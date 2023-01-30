function calculator() {

    return {
        init: (sel1, sel2, res) => {
            first = document.querySelector(sel1);
            second = document.querySelector(sel2);
            result = document.querySelector(res);
        },
        add: () => {
            let output = Number(first.value) + Number(second.value);
            result.value = output;
        },
        subtract: () => {
            let output = Number(first.value) - Number(second.value);
            result.value = output;
        }
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');



