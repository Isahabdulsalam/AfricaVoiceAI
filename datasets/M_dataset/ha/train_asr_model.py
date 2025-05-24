import torch
import pandas as pd
from datasets import load_from_disk, DatasetDict
import evaluate
from transformers import (
    Wav2Vec2Processor,
    Wav2Vec2ForCTC,
    TrainingArguments,
    Trainer,
)

import torchaudio
import re

# 1. Load your custom dataset
dataset = load_from_disk("hausa_speech_dataset")  # Assuming this is how it was saved

# 2. Pre-trained model and processor
model_name = "facebook/wav2vec2-base"
processor = Wav2Vec2Processor.from_pretrained(model_name)
model = Wav2Vec2ForCTC.from_pretrained(model_name, vocab_size=processor.tokenizer.vocab_size)

# 3. Preprocessing audio + text
chars_to_ignore_regex = '[\,\?\.\!\-\;\:"]'

def remove_special_characters(batch):
    batch["transcription"] = re.sub(chars_to_ignore_regex, '', batch["transcription"]).lower()
    return batch

dataset = dataset.map(remove_special_characters)

def speech_file_to_array_fn(batch):
    speech_array, sampling_rate = torchaudio.load(batch["file"])
    batch["speech"] = speech_array[0].numpy()
    batch["sampling_rate"] = sampling_rate
    return batch

def prepare_dataset(batch):
    batch = processor(batch["speech"], sampling_rate=batch["sampling_rate"], padding=True, return_tensors="pt")
    batch["input_values"] = batch.input_values[0]
    batch["labels"] = processor.tokenizer(batch["transcription"]).input_ids
    return batch

dataset = dataset.map(speech_file_to_array_fn)
dataset = dataset.map(prepare_dataset, remove_columns=dataset["train"].column_names)

# 4. Define training args
training_args = TrainingArguments(
    output_dir="./results",
    group_by_length=True,
    per_device_train_batch_size=4,
    evaluation_strategy="epoch",
    num_train_epochs=3,
    save_steps=100,
    eval_steps=100,
    logging_steps=10,
    learning_rate=1e-4,
    warmup_steps=500,
    save_total_limit=2,
)

# 5. Compute metrics
wer_metric = evaluate("wer")

def compute_metrics(pred):
    pred_logits = pred.predictions
    pred_ids = torch.argmax(torch.tensor(pred_logits), dim=-1)
    pred_str = processor.batch_decode(pred_ids)
    label_str = processor.batch_decode(pred.label_ids, group_tokens=False)
    return {"wer": wer_metric.compute(predictions=pred_str, references=label_str)}

# 6. Trainer
trainer = Trainer(
    model=model,
    data_collator=lambda x: {
        'input_values': torch.stack([f["input_values"] for f in x]),
        'labels': torch.tensor([f["labels"] for f in x])
    },
    args=training_args,
    compute_metrics=compute_metrics,
    train_dataset=dataset["train"],
    eval_dataset=dataset["validation"],
    tokenizer=processor.feature_extractor,
)

# 7. Train the model
trainer.train()

