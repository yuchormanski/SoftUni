function solve() {
    const url = 'http://localhost:3030/jsonstore/bus/schedule';
    let infoBox = document.querySelector('.info');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    let nextStop = 'depot';
    let stopName = '';

    function depart() {

        departBtn.disabled = true;
        arriveBtn.disabled = false;

        fetch(`${url}/${nextStop}`)
            .then(res => res.json())
            .then(data => {
                let { name, next } = data;
                nextStop = next;
                stopName = name;
                infoBox.innerText = `Next stop ${stopName}`;
            })
            .catch(error => {
                infoBox.innerText = 'Error';
                departBtn.disabled = true;
                arriveBtn.disabled = true;
            })
    }

    function arrive() {
        infoBox.innerText = `Arriving at ${stopName}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();