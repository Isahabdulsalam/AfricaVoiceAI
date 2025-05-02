from flask import Blueprint, request, send_file, jsonify
from app.utils.tts import text_to_speech

speech_bp = Blueprint('speech', __name__)

@speech_bp.route('/speak', methods=['POST'])
def speak():
    data = request.get_json()

    text = data.get('text')
    language = data.get('language')

    if not text or not language:
        return jsonify({'error': 'Text and language are required.'}), 400

    try:
        audio_fp = text_to_speech(text, language.lower())
        return send_file(audio_fp, mimetype='audio/mpeg', as_attachment=True, download_name='speech.mp3')
    except ValueError as e:
        return jsonify({'error': str(e)}), 400
    except Exception as e:
        return jsonify({'error': 'An error occurred while processing the request.'}), 500
