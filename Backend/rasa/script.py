import pandas as pd

df = pd.read_csv("C:\Users\Hp\Documents\AfricaVoiceAI\datasets\english_hausa_dataset\en-ha.csv")

nlu_data = {
    'version': '2.0',
    'nlu': []
}

intents = {}

for index, row in df.iterrows():
    intent = row['intent']
    example = row['target_language']
    if intent not in intents:
        intents[intent] = []
    intents[intent].append(f'- {example}')

# convert the intent dictionary to the rasa NLU format

for intent, examples, intents.items():
    nlu_data['nlu'].append({
        'intent': intent,
        'examples': '\n'.join(examples)
    })

# write the NLU data to a file
with open('nlu.yml', 'w') as file:
    file.write('version: "2.0"\n\n')
    file.write('nlu:\n')
    for item in nlu_data['nlu']:
        file.write(f"- intent: {item['intent']}\n")
        file.write(" examples: |\n")
        file.write(f"   {item['examples']}\n")

print("NLU data has been written to nlu.yml")