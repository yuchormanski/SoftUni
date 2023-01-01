function calc() {
    // TODO: sum = num1 + num2
    let firstNum = document.querySelector('#num1');
    let secondNum = document.querySelector('#num2');
    let sumFields = Number(firstNum.value) + Number(secondNum.value);
    let result = document.querySelector('#sum');
    result.value = sumFields;
}
