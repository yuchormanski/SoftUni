function solve() {

    const recipientInput = document.getElementById('recipientName');
    const titleInput = document.getElementById('title');
    const textInput = document.getElementById('message');
    const addToListBtn = document.getElementById('add');
    const trash = document.querySelector('.delete-list');
    const resetBtn = document.getElementById('reset');
    addToListBtn.addEventListener('click', listOfMails);
    resetBtn.addEventListener('click', reset);

    function reset(e) {
        e.preventDefault();
        recipientInput.value = '';
        titleInput.value = '';
        textInput.value = '';
    }

    function listOfMails(e) {
        e.preventDefault();
        const ulElement = document.getElementById('list');
        const recipient = recipientInput.value;
        const title = titleInput.value;
        const text = textInput.value;

        if (recipient === '' || title === '' || text === '') return;

        const li = creator('li', '', '', '');
        li.appendChild(creator('h4', '', '', `Title: ${title}`));
        li.appendChild(creator('h4', '', '', `Recipient Name: ${recipient}`));
        li.appendChild(creator('span', '', '', text));
        const div = creator('div', 'id', 'list-action', '');
        const sendBtn = document.createElement('button');
        sendBtn.type = 'submit';
        sendBtn.id = 'send'
        sendBtn.innerText = 'Send';
        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'submit';
        deleteBtn.id = 'delete'
        deleteBtn.innerText = 'Delete';
        div.appendChild(sendBtn);
        div.appendChild(deleteBtn);
        li.appendChild(div);
        ulElement.appendChild(li);

        recipientInput.value = '';
        titleInput.value = '';
        textInput.value = '';

        sendBtn.addEventListener('click', sentMails);
        deleteBtn.addEventListener('click', (e) => {
            Array.from(ulElement.childNodes).forEach(ch => ch.remove());
            const li = creator('li', '', '', '');
            li.appendChild(creator('span', '', '', `To: ${recipient}`));
            li.appendChild(creator('span', '', '', `Title: ${title}`));
            trash.appendChild(li);
        });


        function sentMails() {
            Array.from(ulElement.childNodes).forEach(el => el.remove());
            const ulSentMail = document.querySelector('.sent-list');
            const li = creator('li', '', '', '');
            li.appendChild(creator('span', '', '', `To: ${recipient}`));
            li.appendChild(creator('span', '', '', `Title: ${title}`));
            const div = creator('div', 'class', 'btn', '');
            const deleteBtn = document.createElement('button');
            deleteBtn.type = 'submit';
            deleteBtn.class = 'delete'
            deleteBtn.innerText = 'Delete';
            div.appendChild(deleteBtn);
            li.appendChild(div);
            ulSentMail.appendChild(li);
            deleteBtn.addEventListener('click', deletedMails);


            function deletedMails(e) {
                trash.appendChild(li);
                e.target.parentElement.remove();
            }
        }

        function earlyDelete(e) {
            li.remove();
            const trash = document.querySelector('.delete-list');
            const li = creator('li', '', '', '');
            li.appendChild(creator('span', '', '', `To: ${recipient}`));
            li.appendChild(creator('span', '', '', `Title: ${title}`));
            trash.appendChild(li);
        }

    }

    function creator(type, attribute, attrValue, textCont) {
        const element = document.createElement(type);
        attribute ? element[attribute] = attrValue : null;
        textCont ? element.innerText = textCont : null;
        return element;
    }

}
solve()
