const chatBox = document.getElementById('chat-box');

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        addMessage('User', userInput);
        fetch('/get_response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: userInput }),
        })
        .then(response => response.json())
        .then(data => {
            addMessage('Assistant', data.response);
        });
        document.getElementById('user-input').value = '';
    }
}

function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender.toLowerCase());
    messageElement.innerText = `${sender}: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
