import speech_recognition as sr

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
        return jsonify([{"text": "Ban fahimtar abinda kike cewa ba ko zaka maimaita"}])
    except sr.requesterror:
        return jsonify([{"text": "Maimaita."}])