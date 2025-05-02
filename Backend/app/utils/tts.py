from gtts import gTTS
import io

language_map = {
    "hausa": "ha",
    "yoruba": "yo",
    "igbo": "ig"
}

def text_to_speech(text, language):
    if language not in language_map:
        raise ValueError("Unsupported language.")

    tts = gTTS(text=text, lang=language_map[language])
    mp3_fp = io.BytesIO()
    tts.write_to_fp(mp3_fp)
    mp3_fp.seek(0)
    return mp3_fp
