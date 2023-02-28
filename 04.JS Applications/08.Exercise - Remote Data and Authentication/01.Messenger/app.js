function attachEvents() {

    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    sendBtn.addEventListener('click', sendMessage);
    refreshBtn.addEventListener('click', refreshAll);
}
attachEvents();

async function refreshAll() {
    const URL = 'http://localhost:3030/jsonstore/messenger';
    const textArea = document.getElementById('messages');
    textArea.value = '';
    const result = [];
    const response = await fetch(URL);
    let data = await response.json();

    Object.values(data).forEach(post => {
        result.push(`${post.author}: ${post.content}`);
    });
    textArea.value = result.join('\n');
}

async function sendMessage() {
    const URL = 'http://localhost:3030/jsonstore/messenger';
    const textArea = document.getElementById('messages');
    const author = document.querySelector('#controls input[name="author"]');
    const message = document.querySelector('#controls input[name="content"]');

    const data = {
        author: author.value,
        content: message.value,
    }
    const options = {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data),
    }

    try {
        if (data.author === '' || data.content === '') {
            const error = `Fill the fields!`
            throw error;
        }
        const result = await fetch(URL, options);


        if (result.ok == false) {
            const error = await result.json()
            throw alert(error);
        }

        textArea.value = `${data.author}: ${data.content}`;
        author.value = '';
        message.value = '';

    }
    catch (err) {
        console.log(err);
    }
}