import whisper

model = whisper.load_model("small")
result = model.transcribe("common_voice_ha_41983288.mp3", language="ha")
print(result["text"])

