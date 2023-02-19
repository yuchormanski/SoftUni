window.addEventListener('load', solve);

function solve() {

    const bodyId = document.getElementById('body');
    const mainDiv = document.getElementById('main');
    const ticketInfoList = document.querySelector('ul.ticket-info-list');
    const confirmTicket = document.querySelector('ul.confirm-ticket');

    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const peopleCountInput = document.getElementById('people-count');
    const fromDateInput = document.getElementById('from-date');
    const daysInput = document.getElementById('days-count');
    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', ticketPreview);

    function ticketPreview(e) {
        e.preventDefault();

        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const peopleCount = peopleCountInput.value;
        const fromDate = fromDateInput.value;
        const days = daysInput.value;

        if (firstName === ''
            || lastName === ''
            || peopleCount === ''
            || fromDate === ''
            || days === '') return

        const li = creator('li', 'className', 'ticket', '');    ///
        const article = creator('article', '', '', '');
        article.appendChild(creator('h3', '', '', `Name: ${firstName} ${lastName}`));
        article.appendChild(creator('p', '', '', `From date: ${fromDate}`));
        article.appendChild(creator('p', '', '', `For ${days} days`));
        article.appendChild(creator('p', '', '', `For ${peopleCount} people`));
        li.appendChild(article);
        const editBtn = creator('button', 'className', 'edit-btn', 'Edit');
        const contBtn = creator('button', 'className', 'continue-btn', 'Continue');
        const confirmBtn = creator('button', 'className', 'confirm-btn', 'Confirm');
        const cancelBtn = creator('button', 'className', 'cancel-btn', 'Cancel');
        li.appendChild(editBtn);
        li.appendChild(contBtn);
        ticketInfoList.appendChild(li);

        firstNameInput.value = '';
        lastNameInput.value = '';
        peopleCountInput.value = '';
        fromDateInput.value = '';
        daysInput.value = '';

        nextBtn.disabled = true;

        editBtn.addEventListener('click', backForEdit);
        contBtn.addEventListener('click', confirmTic);

        function backForEdit() {
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            peopleCountInput.value = peopleCount;
            fromDateInput.value = fromDate;
            daysInput.value = days;
            nextBtn.disabled = false;
            li.remove();
        }

        function confirmTic() {
            confirmTicket.appendChild(li);
            li.className = 'ticket-content';
            editBtn.remove();
            contBtn.remove();
            li.appendChild(confirmBtn);
            li.appendChild(cancelBtn);
            cancelBtn.addEventListener('click', removeLi);
            confirmBtn.addEventListener('click', finish);
        }

        function finish() {
            mainDiv.remove();
            bodyId.appendChild(creator('h1', 'id', 'thank-you', 'Thank you, have a nice day!'));
            const backBtn = creator('button', 'id', 'back-btn', 'Back');
            bodyId.appendChild(backBtn);

            backBtn.addEventListener('click', () => {
                window.location.reload();
            });
        }

        function removeLi() {
            li.remove();
            nextBtn.disabled = false;
        }
    }
    function creator(elType, elAttribute, attrValue, elementText) {
        const element = document.createElement(elType);
        elAttribute ? element[elAttribute] = attrValue : null;
        elementText ? element.innerText = elementText : null;
        return element;
    }
}




