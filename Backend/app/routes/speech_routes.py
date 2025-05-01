from flask import Blueprint, jsonify

# Create a Blueprint for speech routes
speech_bp = Blueprint('speech', __name__)

@speech_bp.route("/api/speech-to-text", methods=["GET"])
def speech_to_text():
    return jsonify({"message": "Speech to text endpoint is working"})
