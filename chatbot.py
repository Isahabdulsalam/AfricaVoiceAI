from transformers import pipeline

#Load a pre-trained chatbot model (you can fine-tune this later)

chatbot = pipeline("text-generation", model="facebook/blenderbot-400M-distill")

def get_response(user_input):
    response = chatbot(user_input, max_length=100, num_return_sequences=1)

    return response[0]['generated_text']
