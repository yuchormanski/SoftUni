function solve() {

    const sections = Array.from(document.getElementsByTagName('section'));
    const openTask = sections[1].children[1];
    const inProgressTask = sections[2].children[1];
    const completeTask = sections[3].children[1];
    const taskInput = document.getElementById('task');
    const descInput = document.getElementById('description');
    const dateInput = document.getElementById('date');
    const addBtn = document.getElementById('add');

    addBtn.addEventListener('click', openSection);

    function openSection(e) {
        e.preventDefault();

        const task = taskInput.value;
        const description = descInput.value;
        const date = dateInput.value;

        if(task === '' || description === '' | date === '') return;

        const article = creator('article', '', '', '');
        article.appendChild(creator('h3', '', '', task));
        article.appendChild(creator('p', '', '', `Description: ${description}`));
        article.appendChild(creator('p', '', '', `Due Date: ${date}`));
        const div = creator('div', 'className', 'flex', '');
        const startBtn = creator('button', 'className', 'green', 'Start');
        const deleteBtn = creator('button', 'className', 'red', 'Delete');
        const finishBtn = creator('button', 'className', 'orange', 'Finish');
        div.appendChild(startBtn);
        div.appendChild(deleteBtn);
        article.appendChild(div);
        openTask.appendChild(article);

        startBtn.addEventListener('click', inProgressSection);
        finishBtn.addEventListener('click', complete);
        deleteBtn.addEventListener('click', () => {
            article.remove();
        })

        taskInput.value = '';
        descInput.value = '';
        dateInput.value = '';

        function inProgressSection() {
            inProgressTask.appendChild(article);
            startBtn.remove();
            div.appendChild(finishBtn);
        }

        function complete(){
            completeTask.appendChild(article);
            div.remove()
        }
    }

    function creator(elementType, attribute, attrValue, textCont) {
        const element = document.createElement(elementType);
        if (attribute != '') {
            element[attribute] = attrValue;
        }
        if (textCont != '') {
            element.innerText = textCont;
        }
        return element;
    }
}