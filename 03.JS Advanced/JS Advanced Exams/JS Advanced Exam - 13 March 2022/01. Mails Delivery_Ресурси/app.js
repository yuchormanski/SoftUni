window.onload = solve();

function solve() {

    const recipientInput = document.getElementById('recipientName');
    const titleInput = document.getElementById('title');
    const messageInput = document.getElementById('message');
    const listOfMails = document.getElementById('list');
    const sentMailsUl = document.querySelector('ul.sent-list');
    const deletedMailsUl = document.querySelector('ul.delete-list');

    const addBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');

    addBtn.addEventListener('click', addNewMail);
    resetBtn.addEventListener('click', resetInputs);

    function addNewMail(e) {
        e.preventDefault()

        const recipient = recipientInput.value;
        const title = titleInput.value;
        const message = messageInput.value;

        if (recipient === '' || title === '' || message === '') return;

        const li = creator('li', '', '', '');
        li.appendChild(creator('h4', '', '', `Title: ${title}`));
        li.appendChild(creator('h4', '', '', `Recipient Name: ${recipient}`));
        li.appendChild(creator('span', '', '', message));
        const div = creator('div', 'id', 'list-action', '');
        const sendBtn = creator('button', 'type', 'submit', 'Send');
        const deleteBtn = creator('button', 'type', 'submit', 'Delete');
        div.appendChild(sendBtn);
        div.appendChild(deleteBtn);
        li.appendChild(div);
        listOfMails.appendChild(li);

        sendBtn.id = 'send';
        deleteBtn.id = 'delete';

        sendBtn.addEventListener('click', sent);
        deleteBtn.addEventListener('click', deleted);

        const sentLi = creator('li', '', '', '');
        sentLi.appendChild(creator('span', '', '', `To: ${recipient}`));
        sentLi.appendChild(creator('span', '', '', `Title: ${title}`));
        const sentDiv = creator('div', 'className', 'btn', '');
        const sentBtnDelete = creator('button', 'type', 'submit', 'Delete');
        sentBtnDelete.className = 'delete';
        sentBtnDelete.addEventListener('click', deleted);
        sentDiv.appendChild(sentBtnDelete);
        sentLi.appendChild(sentDiv);

        recipientInput.value = '';
        titleInput.value = '';
        messageInput.value = '';

        function sent() {
            li.remove();
            sentMailsUl.appendChild(sentLi);
        }

        function deleted() {
            li.remove();
            deletedMailsUl.appendChild(sentLi)
            sentBtnDelete.remove();
        }

    }
    function resetInputs(e) {
        e.preventDefault()
        recipientInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
    }
    function creator(elType, elAttribute, attrValue, elementText) {
        const element = document.createElement(elType);
        elAttribute ? element[elAttribute] = attrValue : null;
        elementText ? element.innerText = elementText : null;
        return element;
    }
}
// solve()