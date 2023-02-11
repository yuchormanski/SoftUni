window.addEventListener('load', solve);

function solve() {

    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const dateInInput = document.getElementById('date-in');
    const dateOutInput = document.getElementById('date-out');
    const guestsInput = document.getElementById('people-count');
    const nextButton = document.getElementById('next-btn');
    nextButton.addEventListener('click', makeReservation);

    const resContent = document.querySelector('ul.info-list');
    const confirmContent = document.querySelector('ul.confirm-list');

    function makeReservation() {
        // fields validation
        if (firstNameInput.value == ''
            || lastNameInput.value == ''
            || dateInInput.value == ''
            || dateOutInput.value == ''
            || guestsInput.value == ''
            || guestsInput.value <= 0
            || new Date(dateInInput.value) >= new Date(dateOutInput.value)) {
            return;
        }

        const res = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            inDate: dateInInput.value,
            outDate: dateOutInput.value,
            guests: Number(guestsInput.value),
        }


        //creating elements
        const liElement = document.createElement('li');
        liElement.className = 'reservation-content';
        const article = document.createElement('article');
        const h3Name = document.createElement('h3');
        h3Name.textContent = `Name: ${res.firstName} ${res.lastName}`;
        const pFrom = document.createElement('p');
        pFrom.textContent = `From date: ${res.inDate}`;
        const pTo = document.createElement('p');
        pTo.textContent = `From date: ${res.outDate}`;
        const guests = document.createElement('p');
        guests.textContent = `For ${res.guests} people`;
        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', edit);
        const continueBtn = document.createElement('button');
        continueBtn.className = 'continue-btn';
        continueBtn.textContent = 'Continue';
        continueBtn.addEventListener('click', continueFunc);

        //append elements
        article.appendChild(h3Name);
        article.appendChild(pFrom);
        article.appendChild(pTo);
        article.appendChild(guests);

        liElement.appendChild(article);

        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        resContent.appendChild(liElement);

        //emptying fields
        firstNameInput.value = '';
        lastNameInput.value = '';
        dateInInput.value = '';
        dateOutInput.value = '';
        guestsInput.value = '';

        //disable button
        nextButton.disabled = true;

        //IF edit fill inputs with saved data
        function edit() {
            firstNameInput.value = res.firstName;
            lastNameInput.value = res.lastName;
            dateInInput.value = res.inDate;
            dateOutInput.value = res.outDate;
            guestsInput.value = res.guests;

            nextButton.disabled = false;
            liElement.remove();
        }

        function continueFunc() {
            confirmContent.appendChild(liElement);
            //remove old elements
            editBtn.remove();
            continueBtn.remove();

            const output = document.getElementById('verification');

            //create new buttons with functionality depending on cases
            //CONFIRM
            const confirmBtn = document.createElement('button');
            confirmBtn.className = 'confirm-btn'
            confirmBtn.textContent = 'Confirm'
            confirmBtn.addEventListener('click', () => {
                liElement.remove();
                nextButton.disabled = false;
                output.className = 'reservation-confirmed';
                output.textContent = 'Confirmed.'
            });
            liElement.appendChild(confirmBtn);

            //CANCEl case
            const cancelBtn = document.createElement('button');
            cancelBtn.classList.add('cancel-btn');
            cancelBtn.textContent = 'Cancel';
            cancelBtn.addEventListener('click', () => {
                liElement.remove();
                nextButton.disabled = false;
                output.className = 'reservation-cancelled';
                output.textContent = 'Cancelled.'
            });
            liElement.appendChild(cancelBtn);
        }
    }
}