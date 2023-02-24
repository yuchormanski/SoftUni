function getInfo() {
    const bussInfo = 'http://localhost:3030/jsonstore/bus/businfo'
    const stopIdInput = document.getElementById('stopId');
    const stopNameResult = document.getElementById('stopName');
    const busses = document.getElementById('buses');

    fetch(`${bussInfo}/${stopIdInput.value}`)
        .then(result => result.json())
        .then(data => {
            stopNameResult.innerText = data.name;
            Object.entries(data.buses).forEach(buss => {
                const li = creator('li', '', '', `Bus ${buss[0]} arrives in ${buss[1]} minutes`);
                busses.appendChild(li);
            });
        })
        .catch(error => stopNameResult.innerText = 'Error');

    busses.innerHTML = '';
}

function creator(elType, elAttribute, attrValue, elementText) {
    const element = document.createElement(elType);
    elAttribute ? element[elAttribute] = attrValue : null;
    elementText ? element.innerText = elementText : null;
    return element;
}