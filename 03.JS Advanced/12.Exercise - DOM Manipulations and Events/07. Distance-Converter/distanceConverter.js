/* function attachEventsListeners() {

    const inputSelection = document.getElementById('inputUnits');
    const userInput = document.getElementById('inputDistance');
    const buttonEl = document.getElementById('convert');
    const outputSelection = document.getElementById('outputUnits')
    const result = document.getElementById('outputDistance');

    buttonEl.addEventListener('click', convertIt);

    function convertIt() {

        const units = {
            mm: 0.001,
            cm: 0.01,
            m: 1,
            km: 1000,
            mi: 1609.34,
            ft: 0.3048,
            yrd: 0.9144,
            in: 0.0254
        }
        if (!isNaN(userInput.value) && userInput.value != '') {
            let conversion = (userInput.value * units[inputSelection.value]) / units[outputSelection.value];
            result.value = conversion;
        }
    }
} */


// fixed result to 7 digit after decimal point
function attachEventsListeners() {

    const inputSelection = document.getElementById('inputUnits');
    const userInput = document.getElementById('inputDistance');
    const buttonEl = document.getElementById('convert');
    const outputSelection = document.getElementById('outputUnits')
    const result = document.getElementById('outputDistance');

    buttonEl.addEventListener('click', convertIt);

    function convertIt() {

        const units = {
            mm: 0.001,
            cm: 0.01,
            m: 1,
            km: 1000,
            mi: 1609.34,
            ft: 0.3048,
            yrd: 0.9144,
            in: 0.0254
        }
        if (!isNaN(userInput.value) && userInput.value != '') {
            let conversion = (userInput.value * units[inputSelection.value]) / units[outputSelection.value];
            result.value = parseFloat(conversion.toFixed(7));
        }
    }
}