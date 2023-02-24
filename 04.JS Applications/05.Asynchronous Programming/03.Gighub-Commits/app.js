function loadCommits() {
    // Try it with Fetch API
    const nameField = document.getElementById('username');
    const repo = document.getElementById('repo');
    const ulEle = document.getElementById('commits');
    const baseURL = `https://api.github.com/repos/${nameField.value}/${repo.value}/commits`
    ulEle.innerHTML = '';

    fetch(baseURL)
        .then((result) => result.json())
        .then((data) => {
            data.forEach(element => {
                const currentText = `${element.commit.author.name}: ${element.commit.message}`;
                const li = creator('li', currentText);
                ulEle.appendChild(li);
            });
        })
        .catch((error) => {
            const currentText = `Error: ${error.status} (Not Found)`;
            const li = creator('li', currentText);
            ulEle.appendChild(li);
        })
}

function creator(type, text) {
    const element = document.createElement(type);
    element.innerText = text;
    return element;
}