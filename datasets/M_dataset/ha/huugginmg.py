from datasets import load_dataset, Dataset
import pandas as pd

# Load from your cleaned CSV
df = pd.read_csv("metadata.csv")

# Add full path to audio if needed
df["audio"] = "path/to/audio/files/" + df["file_path"]

# Convert to Hugging Face Dataset
dataset = Dataset.from_pandas(df[["audio", "transcriptions"]])

