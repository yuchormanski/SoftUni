function solve() {
    document.getElementById('input').addEventListener('change', onChange);

    function onChange() {
        let options = '<option selected value="binary">Binary</option><option selected value="hexadecimal">Hexadecimal</option>';
        let inputField = document.getElementById('input').value;
        inputField = Number(inputField);
        let convertTo = document.getElementById('selectMenuTo');
        let result = document.getElementById('result');
        convertTo.innerHTML = options;

        document.querySelector('button').addEventListener('click', onClick);

        function onClick() {
            if (convertTo.value === 'binary') {
                result.value = inputField.toString(2);
            } else if (convertTo.value === 'hexadecimal') {
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
        }
    }
}