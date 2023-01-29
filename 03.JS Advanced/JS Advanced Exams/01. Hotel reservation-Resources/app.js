window.addEventListener('load', solve);

function solve() {

    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const dateInInput = document.getElementById('date-in');
    const dateOutInput = document.getElementById('date-out');
    const guestsInput = document.getElementById('people-count');
    const nextButton = document.getElementById('next-btn');
    nextButton.addEventListener('click', makeReservation);

    function makeReservation() {
        // if (firstNameInput.value === '' &&
        //     lastNameInput.value === '' &&
        //     dateInInput.value === '' &&
        //     dateOutInput.value === '' &&
        //     guestsInput.value === '') {
        //     return;
        // }

        //check if date1 is before date2
        // const d1 = new Date(`${dateInInput.value}`);
        // const d2 = new Date(`${dateOutInput.value}`);
        // if (d1 > d2) return;

        const resContent = document.querySelector('ul.info-list');

        const liElement = document.createElement('li');
        liElement.className = 'reservation-content';

        const article = document.createElement('article');

        const h3Name = document.createElement('h3');
        h3Name.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;

        const pFrom = document.createElement('p');
        pFrom.textContent = `From date: ${dateInInput.value}`;

        const pTo = document.createElement('p');
        pTo.textContent = `From date: ${dateOutInput.value}`;

        const guests = document.createElement('p');
        guests.textContent = `For ${guestsInput.value} people`;

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';

        const continueBtn = document.createElement('button');
        continueBtn.className = 'continue-btn';
        continueBtn.textContent = 'Continue';

        article.appendChild(h3Name);
        article.appendChild(pFrom);
        article.appendChild(pTo);
        article.appendChild(guests);

        liElement.appendChild(article);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        resContent.appendChild(liElement);

        nextButton.disabled = true;
    }


}





