
import { monthIndex } from './months.js';


const main = document.getElementById('main');

let captionYear = null;



export const backBtn = document.createElement('button');
backBtn.textContent = 'Back';
backBtn.id = 'back-btn';
backBtn.addEventListener('click', () => {
    window.location.reload();
})


export function thisYear(year) {

    const showThisYear = document.querySelector(`#calendars #year-${year}`);
    main.replaceChildren(showThisYear);
    arch()
    main.appendChild(backBtn);

}

function arch() {
    const tBody = document.querySelector('main tbody');
    return tBody.addEventListener('click', getNumbers);
}

function getNumbers(e) {
    const index = monthIndex[e.target.children[0].innerText];
    captionYear = document.querySelector('#main .calendar caption').textContent;
    let res = `month-${captionYear}-${index}`;
    const currentMonth = document.querySelector(`#calendars section#${res}`);
    main.replaceChildren(currentMonth);
    main.appendChild(backBtn);
}