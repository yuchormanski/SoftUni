import { y2020, y2021, y2022, y2023 } from './years.js';

homeView()

export function homeView() {
    
    const main = document.getElementById('main');
    const yearsView = document.querySelector('#calendars #years')
    main.replaceChildren(yearsView);
    yearsView.addEventListener('click', select);


    function select(e) {

        const currentYear = e.target.children[0].innerText;
        currentYear == 2020 ? y2020() :
            currentYear == 2021 ? y2021() :
                currentYear == 2022 ? y2022() :
                    currentYear == 2023 ? y2023() : null;
    }
}
