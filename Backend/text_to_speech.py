import pyttsx3

@app.route("/speak", methods=["POST"])
def speak_text():
    data = request.json
    text = data["text"]
    engine = pyttsx3.init()
    engine.setProperty("rate", 150)
    engine.setProperty("voice", "ha")
    engine.say(text)
    engine.runAndWait()
    return jsonify({"status": "success"})