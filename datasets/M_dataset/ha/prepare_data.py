import pandas as pd
import os
import torchaudio
from datasets import Dataset, Audio

# Load metadata
df = pd.read_csv("metadata.csv")

# Add the path to each audio file
AUDIO_DIR = "wavs"
df["audio"] = df["file_path"].apply(lambda x: os.path.join(AUDIO_DIR, x))

# Remove invalid/missing files
df = df[df["transcriptions"].notnull()]
df = df[df["audio"].apply(os.path.exists)]

# Create Hugging Face Dataset
dataset = Dataset.from_pandas(df[["audio", "transcriptions"]])

# Cast audio column to Audio type (automatically loads waveform)
dataset = dataset.cast_column("audio", Audio(sampling_rate=16_000))

# Save dataset for future use
dataset.save_to_disk("hausa_speech_dataset")
print("✅ Dataset ready and saved.")

