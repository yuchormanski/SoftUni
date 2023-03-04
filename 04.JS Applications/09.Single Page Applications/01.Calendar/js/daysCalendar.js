const main = document.getElementById('main');
import {sheet} from './sheet.js';
import { backBtn } from './years.js';

export function viewDay(e){
    const currentDay = e.target.children[0].textContent;
    console.log(currentDay);
    const theDay = sheet(currentDay)

    main.replaceChildren(theDay);
    main.appendChild(backBtn);
}