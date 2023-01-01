function subtract() {
    let first = Number(document.querySelector('#firstNumber').value);
    let second = Number(document.querySelector('#secondNumber').value);
    let subtract = first - second;
    let result = document.getElementById('result');
    result.textContent = subtract;
    console.log(subtract);
}