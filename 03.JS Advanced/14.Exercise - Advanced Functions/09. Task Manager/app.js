function solve() {
    const taskInput = document.getElementById('task');
    const descriptionInput = document.getElementById('description');
    const dateInput = document.getElementById('date')
    const addInput = document.getElementById('add');
    addInput.addEventListener('click', toOpen);

    const sections = Array.from(document.querySelectorAll('section'));
    const addTask = sections[0];
    const openDiv = sections[1];
    const inProgress = sections[2];
    const complete = sections[3];

    function toOpen(e) {
        e.preventDefault();

        if (taskInput.value === '' ||
            descriptionInput.value === '' ||
            dateInput.value === '') {
            return;
        }

        const h3 = document.createElement('h3');
        h3.innerText = taskInput.value;

        const pDesc = document.createElement('p');
        pDesc.innerText = `Description: ${descriptionInput.value}`;

        const pDate = document.createElement('p');
        pDate.innerText = `Due Date: ${dateInput.value}`;

        const article = document.createElement('article');

        article.appendChild(h3);
        article.appendChild(pDesc);
        article.appendChild(pDate);

        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'flex';
        const leftButton = document.createElement('button');
        const rightButton = document.createElement('button');

        leftButton.className = 'green';
        leftButton.innerText = 'Start';
        leftButton.addEventListener('click', toProgress);
        rightButton.className = 'red';
        rightButton.innerText = 'Delete';
        rightButton.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.remove();
        });

        buttonDiv.appendChild(leftButton);
        buttonDiv.appendChild(rightButton);

        article.appendChild(buttonDiv);

        openDiv.appendChild(article);
    }

    function toProgress(e) {
        const currentH3 = e.target.parentElement.parentElement;
        inProgress.appendChild(currentH3)
        const leftButton = document.querySelector('.green');
        leftButton.className = 'red'
        leftButton.innerText = 'Delete';
        const rightButton = document.querySelector('.red');
        rightButton.className = 'orange';
        rightButton.innerText = 'Finish';
    }

}