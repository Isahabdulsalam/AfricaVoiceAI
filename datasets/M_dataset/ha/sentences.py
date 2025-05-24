import pandas as pd

# Load the file
df = pd.read_csv("unvalidated_sentences.tsv", sep="\t")

# Extract only the 'sentence' column
sentences = df['sentence'].dropna()

# Save to a new text file (one sentence per line)
sentences.to_csv("unvalidated_hausa_sentences.csv", index=False, header=False)
