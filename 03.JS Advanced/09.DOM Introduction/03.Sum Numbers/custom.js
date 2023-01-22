// function calc() {
//     const firstNum = document.getElementById('num1');
//     const secondNum = document.getElementById('num2');
//     const result = document.getElementById('sum');
//     let calc = Number(firstNum.value) + Number(secondNum.value);
//     result.value = calc;
// }

let calculation = () => {
    const firstNum = document.getElementById('num1');
    const secondNum = document.getElementById('num2');
    const result = document.getElementById('sum');
    let calc = Number(firstNum.value) + Number(secondNum.value);
    result.value = calc;
}
const button = document.getElementsByTagName('input')[3];
button.addEventListener('click', calculation)