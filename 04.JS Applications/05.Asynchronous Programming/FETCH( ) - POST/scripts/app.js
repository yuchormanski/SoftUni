window.onload = start();


function start() {

    // const url = 'http://localhost:3030/jsonstore/bus';
    const url = 'https://js-apps-7302c-default-rtdb.europe-west1.firebasedatabase.app/.json';

    const button = document.getElementById('send-btn');
    const inputField = document.getElementById('input-field');
    const dataField = document.getElementById('data-field');
    const ul = document.getElementById('ul-ele');

    button.addEventListener('click', myFunc);

    function myFunc() {
        const input = inputField.value;
        const data = dataField.value;


        fetch(url, {        // по подразбиране fetch е GET  метод. За да се ползва POST се добавя като аргумент следния обект:
            method: 'POST',    // 
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ [input]: `${data}` })  //        JSON.stringify({ подаваме датата за базата данни })
        })
            .then(res => res.json())  // then връща json, за това го парсваме
            .then(data => {
                // тук се създават нови елементи и се добавят към ДОМ дървото, ако  се налага
            })
            .catch(err => console.error('This is an error')) /// не съ сигурен дали се изисква...

            inputField.value = '';
            dataField.value = '';
    }

}