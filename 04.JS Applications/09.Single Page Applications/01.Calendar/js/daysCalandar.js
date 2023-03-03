import { backBtn } from "./years.js";


const main = document.getElementById('main');


export function currentMonth() {
    main.appendChild(backBtn);
}