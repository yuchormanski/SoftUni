window.addEventListener('load', solve);

function solve() {

    const ulConfirm = document.querySelector('.confirm-list');
    const result = document.getElementById('verification');
    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', toInfo);

    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const dateInInput = document.getElementById('date-in');
    const dateOutInput = document.getElementById('date-out');
    const guestsInput = document.getElementById('people-count');

    function toInfo(e) {
        e.preventDefault();

        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const inDate = dateInInput.value;
        const outDate = dateOutInput.value;
        const guests = Number(guestsInput.value);

        if (firstNameInput.value === ''
            || lastNameInput.value === ''
            || dateInInput.value === ''
            || dateOutInput.value === ''
            || guestsInput.value === ''
            || guestsInput.value <= 0
            || new Date(dateInInput.value) >= new Date(dateOutInput.value)) {
            // || dateInInput.value >= dateOutInput.value) {
            return;
        }
        const ul = document.querySelector('.info-list');
        const li = creator('li', 'class', 'reservation-content', '');
        const article = creator('article', '', '', '');
        article.appendChild(creator('h3', '', '', `Name: ${firstName} ${lastName}`));
        article.appendChild(creator('p', '', '', `From date: ${inDate}`));
        article.appendChild(creator('p', '', '', `To date: ${outDate}`));
        article.appendChild(creator('p', '', '', `For ${guests} people`));
        li.appendChild(article);
        const editBtn = creator('button', '', '', 'Edit');
        editBtn.className = 'edit-btn';
        const contBtn = creator('button', '', '', 'Continue');
        contBtn.className = 'continue-btn';
        li.appendChild(editBtn);
        li.appendChild(contBtn);
        ul.appendChild(li);

        firstNameInput.value = '';
        lastNameInput.value = '';
        dateInInput.value = '';
        dateOutInput.value = '';
        guestsInput.value = '';

        nextBtn.disabled = true;

        editBtn.addEventListener('click', backEdit);

        function backEdit() {
            li.remove();
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            dateInInput.value = inDate;
            dateOutInput.value = outDate;
            guestsInput.value = guests;
            nextBtn.disabled = false;
        }


        contBtn.addEventListener('click', continueFunc);

        function continueFunc() {
            ulConfirm.appendChild(li);
            editBtn.className = 'confirm-btn';
            editBtn.innerText = 'Confirm';
            contBtn.className = 'cancel-btn';
            contBtn.innerText = 'Cancel';
            contBtn.removeEventListener('click', continueFunc);
            editBtn.removeEventListener('click', backEdit);

            contBtn.addEventListener('click', () => {
                li.remove();
                nextBtn.disabled = false;
                result.innerText = 'Cancelled.';
                result.className = 'reservation-cancelled';
            })

            editBtn.addEventListener('click', () => {
                li.remove();
                nextBtn.disabled = false;
                result.innerText = 'Confirmed.';
                result.className = 'reservation-confirmed';
            });
        }
    }

    function creator(type, attribute, attrValue, textCont) {
        const element = document.createElement(type);
        if (attribute !== '') {
            element[attribute] = attrValue;
        }
        if (textCont !== '') {
            element.innerText = textCont;
        }
        return element;
    }
}