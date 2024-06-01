from flask import Flask, render_template, request, jsonify
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_response', methods=['POST'])
def get_response():
    user_message = request.json['message']
    response = generate_response(user_message)
    return jsonify({'response': response})

def generate_response(message):
    # Simple response generation logic
    responses = [
        "Hello, how can I assist you today?",
        "I'm here to help.",
        "What can I do for you?",
        "How can I assist you today?",
    ]
    return random.choice(responses)

if __name__ == '__main__':
    app.run(debug=True)
