import os
from pydub import AudioSegment
from tqdm import tqdm

# Update this path to your 'clips' folder
mp3_dir = "M_dataset/ha/clips"
wav_dir = "M_dataset/ha/wavs"

# Create wav directory if not exists
os.makedirs(wav_dir, exist_ok=True)

# Loop through all .mp3 files
for filename in tqdm(os.listdir(mp3_dir)):
    if filename.endswith(".mp3"):
        mp3_path = os.path.join(mp3_dir, filename)
        wav_path = os.path.join(wav_dir, filename.replace(".mp3", ".wav"))

        try:
            audio = AudioSegment.from_mp3(mp3_path)
            audio.export(wav_path, format="wav")
        except Exception as e:
            print(f"Error converting {filename}: {e}")

