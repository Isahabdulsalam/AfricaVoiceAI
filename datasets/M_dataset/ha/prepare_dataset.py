import pandas as pd
import os
from datasets import Dataset, Audio

# ✅ Read the file correctly using regex separator (tabs or 2+ spaces)
df = pd.read_csv(
    "metadata.csv",
    sep=r'\s{2,}|\t',  # matches 2+ spaces or tabs
    engine="python",
    skiprows=1,
    on_bad_lines="skip",
    encoding="utf-8",
    names=["file_path", "transcriptions"]
)

# Clean whitespace
df = df.map(lambda x: x.strip() if isinstance(x, str) else x)

# Drop missing values
df.dropna(subset=["transcriptions"], inplace=True)

# Add full path to the audio file
AUDIO_DIR = "wavs"
df["audio"] = df["file_path"].apply(lambda x: os.path.join(AUDIO_DIR, x))

# Remove missing audio paths
df = df[df["audio"].apply(os.path.exists)]

# Convert to Hugging Face dataset
from datasets import Dataset
dataset = Dataset.from_pandas(df[["audio", "transcriptions"]])
dataset = dataset.cast_column("audio", Audio(sampling_rate=16_000))

# Save dataset
dataset.save_to_disk("hausa_speech_dataset")
print("✅ Dataset ready and saved.")

