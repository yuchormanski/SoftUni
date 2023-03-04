import { thisYear } from './years.js';

homeView()

export function homeView() {

    const main = document.getElementById('main');
    const yearsView = document.querySelector('#calendars #years')
    main.replaceChildren(yearsView);
    yearsView.addEventListener('click', select);

    function select(e) {
        const currentYear = e.target.innerText;
        thisYear(currentYear)
    }
}