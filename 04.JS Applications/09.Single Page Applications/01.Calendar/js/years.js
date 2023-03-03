
import { monthIndex } from './months.js';


const main = document.getElementById('main');
const year2020 = document.querySelector('#calendars #year-2020');
const year2021 = document.querySelector('#calendars #year-2021');
const year2022 = document.querySelector('#calendars #year-2022');
const year2023 = document.querySelector('#calendars #year-2023');

let captionYear = null;



export const backBtn = document.createElement('button');
backBtn.textContent = 'Back';
backBtn.id = 'back-btn';
backBtn.addEventListener('click', () => {
    window.location.reload();
})


export function y2020() {
    main.replaceChildren(year2020);
    arch()
}

export function y2021() {
    main.replaceChildren(year2021);
    arch()
}

export function y2022() {
    main.replaceChildren(year2022);
    arch()
}

export function y2023() {
    main.replaceChildren(year2023);
    arch()
}
function arch() {
    const tBody = document.querySelector('main tbody');
    return tBody.addEventListener('click', getNumbers);
    main.appendChild(backBtn);
}

function getNumbers(e) {
    const index = monthIndex[e.target.children[0].innerText];
    captionYear = document.querySelector('#main .calendar caption').textContent;
    let res = `month-${captionYear}-${index}`;
    const currentMonth = document.querySelector(`#calendars section#${res}`);
    main.replaceChildren(currentMonth);
    main.appendChild(backBtn);
}