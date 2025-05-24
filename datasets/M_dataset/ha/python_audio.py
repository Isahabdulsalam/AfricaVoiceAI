# These are tools (modules) we need for recording and saving audio, reading files, etc.
import pyaudio        # For recording audio
import wave           # For saving the audio in .wav format
import os             # For working with folders and files
import threading      # For running tasks at the same time (like listening and recording)
import csv            # For reading the CSV file that has the sentences

# These are the settings for how we want to record the audio
FORMAT = pyaudio.paInt16  # Format/type of the audio data
CHANNELS = 1              # Use one audio channel (mono)
RATE = 44100              # Number of samples per second (standard quality)
CHUNK = 1024              # Size of each small piece of audio we collect while recording
OUTPUT_DIR = "recordings"  # Folder where recordings will be saved

# If the folder where we want to save audio doesn't exist, create it
if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

# This function gives the next available file name (like 001.wav, 002.wav, etc.)
def get_next_file_name(directory):
    existing_files = os.listdir(directory)  # Get list of existing files
    existing_files = [f for f in existing_files if f.endswith(".wav")]  # Only .wav files
    file_numbers = [int(f.split('.')[0]) for f in existing_files]  # Extract numbers from file names
    next_number = max(file_numbers, default=0) + 1  # Find the next number
    return f"{next_number:03d}.wav"  # Return it in 3-digit format like 001.wav

# This function lists available microphone devices and lets you choose one
def list_input_devices(p):
    print("Available input devices:")
    info = p.get_host_api_info_by_index(0)
    numdevices = info.get('deviceCount')
    input_devices = []
    for i in range(numdevices):
        device_info = p.get_device_info_by_host_api_device_index(0, i)
        if device_info.get('maxInputChannels') > 0:
            input_devices.append(i)
            print(f"Device id {i} - {device_info.get('name')}")  # Show name of the mic/device
    return input_devices

# This function records your voice until you press Enter to stop
def record_audio(stream):
    frames = []              # This will store the audio data
    stop_recording = False   # This flag helps us know when to stop

    # This nested function waits until you press Enter to stop recording
    def wait_for_enter():
        nonlocal stop_recording
        input()  # Waits for Enter key
        stop_recording = True

    # Start a separate thread to listen for Enter key
    thread = threading.Thread(target=wait_for_enter)
    thread.start()

    print("Recording... Press Enter to stop.")
    # While you haven't pressed Enter, keep recording small chunks of audio
    while not stop_recording:
        data = stream.read(CHUNK, exception_on_overflow=False)
        frames.append(data)
    print("Recording stopped.")

    return frames  # Return the recorded audio data

# Main function that controls the program
def main():
    p = pyaudio.PyAudio()  # Start the audio system
    input_devices = list_input_devices(p)  # List available microphones

    # Ask user to choose which microphone to use
    while True:
        try:
            device_index = int(input("Enter the device id you want to use for recording: "))
            if device_index in input_devices:
                break
            else:
                print("Invalid device id, please select from the list above.")
        except ValueError:
            print("Please enter a valid integer device id.")

    # Open the microphone stream for recording
    stream = p.open(format=FORMAT,
                    channels=CHANNELS,
                    rate=RATE,
                    input=True,
                    input_device_index=device_index,
                    frames_per_buffer=CHUNK)

    # Open the CSV file that contains the Hausa sentences to be recorded
    csv_file = "hausa_sentences.csv"
    with open(csv_file, newline='', encoding='utf-8') as f:
        reader = csv.reader(f)
        sentences = [row[0] for row in reader if row]  # Read each sentence from the file

    # Show user how to use the program
    print("\nInstructions:")
    print("For each sentence, it will display, then press Enter to start recording,")
    print("speak the sentence, then press Enter again to stop recording.\n")

    # Go through each sentence and let user record it
    for sentence in sentences:
        print(f"Sentence to record: {sentence}")  # Show the sentence on screen
        input("Press Enter to START recording...")  # Wait for Enter key to start recording
        frames = record_audio(stream)  # Record the sentence

        # Get the next available file name (like 001.wav)
        file_name = get_next_file_name(OUTPUT_DIR)
        output_file = os.path.join(OUTPUT_DIR, file_name)

        # Save the recorded audio to a file
        with wave.open(output_file, 'wb') as wf:
            wf.setnchannels(CHANNELS)
            wf.setsampwidth(p.get_sample_size(FORMAT))
            wf.setframerate(RATE)
            wf.writeframes(b''.join(frames))  # Write the audio data

        print(f"Saved recording to {output_file}\n")  # Let user know it's saved

    # Close everything after recording is done
    stream.stop_stream()
    stream.close()
    p.terminate()
    print("All sentences recorded.")  # Finished message

# Run the program
if __name__ == "__main__":
    main()
