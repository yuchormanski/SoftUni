function solve() {

    //create object from inputs
    const inputs = {
        task: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date')
    }
    
    //get relation to sections
    const [addTask, openSection, inProgress, completeSection] = Array.from(document.querySelectorAll('section')).map(el => el.children[1]);
    const addBtn = document.getElementById('add');  //get button
    addBtn.addEventListener('click', toOpen); //attach listener
    
    function toOpen(e) {
        e.preventDefault(); // button is in form element , prevent submit action
        
        //validatin of the inputs
        if (inputs.task.value === '' ||
            inputs.description.value === '' ||
            inputs.date.value === '') {
            return;
        }

        const article = document.createElement('article');   //create article element
        //create element from function with given params and append it to article
        // if some of parameters is unneeded add '' as param
        article.appendChild(createElement('h3', `${inputs.task.value}`));
        article.appendChild(createElement('p', `Description: ${inputs.description.value}`));
        article.appendChild(createElement('p', `Due Date: ${inputs.date.value}`));
        const div = createElement('div', '', 'flex');
        //create buttons as variables for easy reuse later
        const startButton = createElement('button', 'Start', 'green');
        const deleteButton = createElement('button', 'Delete', 'red');
        const finishButton = createElement('button', 'Finish', 'orange');
        startButton.addEventListener('click', progress);
        deleteButton.addEventListener('click', deletePanel);
        finishButton.addEventListener('click', toComplete);
        div.appendChild(startButton);
        div.appendChild(deleteButton);
        article.appendChild(div);
        openSection.appendChild(article);

        //clear input fields
        Object.values(inputs).forEach(el => el.value = '');

        //click delete
        function deletePanel() {
            article.remove();
        }

        //click start
        function progress() {
            inProgress.appendChild(article);
            startButton.remove();  //remove start button
            div.appendChild(finishButton);  //add finish button
        }

        // click finish
        function toComplete() {
            completeSection.appendChild(article);  //change parent
            div.remove();  //remove div with buttons
        }
    }

    // creating element function
    function createElement(type, text, className) {
        const element = document.createElement(type);
        element.className = className;
        element.innerText = text;
        return element;
    }
}