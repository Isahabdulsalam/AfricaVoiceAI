# Import necessary libraries
import os  # To create directories and check files
import sounddevice as sd  # To record audio
from scipy.io.wavfile import write  # To save the recorded audio in WAV format
import time  # To add pauses between recordings

# Load sentences from a text file
# We open the file "hausa_sentences.txt" and read each sentence into a list called 'sentences'
with open("split_sentences/batch_1/sentences.csv", "r", encoding="utf-8") as f:
    sentences = f.readlines()

# Set the number of sentences to record in one batch (e.g., record 20 sentences at once)
BATCH_SIZE = 20

# Create a folder called "recordings" where all audio files will be saved
# If the folder doesn't already exist, it will be created
output_dir = "recordings"
os.makedirs(output_dir, exist_ok=True)

# Function to count how many audio files are already recorded
# This helps to know where to start recording (e.g., start from the next available number)
def count_existing_recordings():
    return len([name for name in os.listdir(output_dir) if name.endswith(".wav")])

# Set the sample rate for the audio recording (44100 is a standard rate for high-quality sound)
SAMPLE_RATE = 44100
# Set the length of time for each audio recording (in seconds)
DURATION = 10  # Record for 10 seconds for each sentence

# Start recording from the point where you left off
start_index = count_existing_recordings()

# Determine where to stop in this batch of recordings
# If there are less than 20 sentences left, it will stop at the end of the list
end_index = min(start_index + BATCH_SIZE, len(sentences))

# Print a message telling the user that the recording batch is starting
print(f"Starting batch recording ({start_index + 1} to {end_index})...\n")

# Loop through the sentences in the selected batch (from start_index to end_index)
for i in range(start_index, end_index):
    # Get the current sentence
    sentence = sentences[i].strip()  # Remove any extra spaces or line breaks
    # Create a filename for the audio file (e.g., 001.wav, 002.wav, ...)
    file_name = f"{i+1:03d}.wav"
    # Set the path where the file will be saved
    file_path = os.path.join(output_dir, file_name)

    # Print the sentence to the user and ask them to be ready for recording
    print(f"Sentence {i+1}: {sentence}")
    input(" Press Enter when you're ready to record...")

    # Inform the user that the recording is starting
    print(" Recording...")
    # Start recording the audio (in mono, with 1 channel)
    recording = sd.rec(int(DURATION * SAMPLE_RATE), samplerate=SAMPLE_RATE, channels=1)
    # Wait until the recording is finished before continuing
    sd.wait()
    print("✅ Recording finished!")

    # Save the recorded audio as a WAV file
    write(file_path, SAMPLE_RATE, recording)
    print(f" Saved as {file_path}\n")

    # Optional pause for 1 second before starting the next recording
    time.sleep(1)

# When all sentences in this batch have been recorded, print a message to inform the user
print("All sentences in this batch recorded! You can run the script again to continue.")