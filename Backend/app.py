from flask import Flask, request, jsonify
from rasa.core.agent import Agent
import speech_recognition as sr
import pyttsx3

app = Flask(__name__)

#load the trained Rasa model
agent = Agent.load("models")

@app.route('/chat', method=['POST'])
def chat():
    data = request.json
    message = data["message"]
    response = agent.handle_text(message)
    return jsonify(response)

@app.route('/speak', methods=['POST'])
def speak_text():
    data = request.json
    text = data["text"]
    engine = pyttsx3.init()
    engine.setProperty("rate", 150)
    engine.setProperty("voice", "ha")
    engine.say(text)
    engine.runAndWait()
    return jsonify({"status": "success"})

@app.route("/listen", methods=["POST"])
def listen():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        audio = recognizer.listen(source)
    try:
        message = recognizer.recognize_google(audio, language="ha-NG")
        response = agent.handle_text(message)
        return jsonify(response)
    except sr.Unknownvalueerror:
        return jsonify([{"text": "Bazan iya fahimtar abinda kike cewa ba ko zaka maimaita"}])
    except sr.requesterror:
        return jsonify([{"text": "Akwai kwakwalwa da ake kai akan jin aiki."}])

if __name__ == "__main__":
    app.run(debug=True)