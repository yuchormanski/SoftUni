function solve() {

    let inputElement = document.getElementById('input');
    let selectElement = document.getElementById('selectMenuTo');
    let result = document.getElementById('result');

    let buttonElement = document.querySelector('#container button');

    let binaryElement = document.createElement('option');
    binaryElement.setAttribute('selected', '');
    binaryElement.setAttribute('value', '');
    binaryElement.value = 'binary';
    binaryElement.textContent = 'Binary';

    let hexElement = document.createElement('option');
    hexElement.setAttribute('selected', '');
    hexElement.setAttribute('value', '');
    hexElement.value = 'hexadecimal';
    hexElement.textContent = 'Hexadecimal';

    selectElement.appendChild(binaryElement);
    selectElement.appendChild(hexElement);

    buttonElement.addEventListener('click', () => {
        if (selectElement.value === 'binary') {
            result.value = Number(inputElement.value).toString(2);
        } else if (selectElement.value === 'hexadecimal') {
            inputField = Number(inputElement.value);
            let base = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
            let hex = [];
            let reminder = 0;
            while (inputField !== 0) {
                let current = inputField / 16;
                inputField = parseInt(inputField / 16)
                if (current - parseInt(current) > 0) {
                    reminder = (current - parseInt(current)) * 16;
                }
                hex.unshift(base[reminder]);
            }
            result.value = hex.join('').toUpperCase();
        }
    });
}