import csv  # To read and write CSV files
import os   # To work with folders and file paths

# This is the file that contains all your original Hausa sentences
input_file = 'hausa_sentences.csv'

# This is the main folder where we will save our batches
root_output_dir = 'split_sentences'

# How many sentences you want in each small file (batch)
batch_size = 20

# Create the main folder (if it doesn’t already exist)
os.makedirs(root_output_dir, exist_ok=True)

# Read all sentences from the original CSV file
with open(input_file, newline='', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile)              # Create a reader to read the file
    sentences = [row for row in reader if row]  # Read each row (sentence) and ignore empty rows

# Now split the sentences into smaller groups (batches) of 20
for i in range(0, len(sentences), batch_size):
    batch = sentences[i:i + batch_size]             # Get the next 20 sentences
    batch_number = i // batch_size + 1              # Number the batch (starts from 1)
    batch_folder = os.path.join(root_output_dir, f"batch_{batch_number}")  # Create folder name
    os.makedirs(batch_folder, exist_ok=True)        # Create the folder if it doesn’t exist

    batch_file = os.path.join(batch_folder, 'sentences.csv')  # File path for sentences.csv in the batch folder

    # Write the 20 sentences into the new CSV file
    with open(batch_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)       # Create a writer to write into the file
        writer.writerows(batch)      # Write all the 20 sentences

    print(f"Saved: {batch_file}")    # Print a message to show that the batch is saved

