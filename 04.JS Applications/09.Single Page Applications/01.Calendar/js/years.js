import { monthIndex } from './months.js';
import { viewDay } from './daysCalendar.js';

const main = document.getElementById('main');

export const backBtn = document.createElement('button');
backBtn.textContent = 'Back';
backBtn.id = 'back-btn';
backBtn.addEventListener('click', () => {
    window.location.reload();
})

export function thisYear(year) {

    const showThisYear = document.querySelector(`#calendars #year-${year}`);
    main.replaceChildren(showThisYear);
    document.querySelector('main tbody').addEventListener('click', getNumbers);
    main.appendChild(backBtn);
}

function getNumbers(e) {
    const index = monthIndex[e.target.children[0].innerText];
    let captionYear = document.querySelector('#main .calendar caption').textContent;
    let res = `month-${captionYear}-${index}`;
    const currentMonth = document.querySelector(`#calendars section#${res}`);
    main.replaceChildren(currentMonth);
    main.appendChild(backBtn);
    main.querySelector('tbody').addEventListener('click', viewDay);
}