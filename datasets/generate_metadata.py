import csv
import os

# Input and output paths
tsv_path = "M_dataset/ha/validated.tsv"
output_path = "M_dataset/ha/metadata.csv"
audio_folder = "M_dataset/ha/wavs"

# Read validated.tsv and write metadata.csv
with open(tsv_path, 'r', encoding='utf-8') as tsvfile, open(output_path, 'w', encoding='utf-8', newline='') as csvfile:
    reader = csv.DictReader(tsvfile, delimiter='\t')
    writer = csv.writer(csvfile, delimiter='|')

    for row in reader:
        mp3_filename = row['path'].strip()
        transcription = row['sentence'].strip()

        wav_filename = mp3_filename.replace('.mp3', '.wav')
        wav_path = os.path.join(audio_folder, wav_filename)

        # Only include entries where the corresponding .wav file exists
        if os.path.isfile(wav_path):
            writer.writerow([wav_path, transcription])