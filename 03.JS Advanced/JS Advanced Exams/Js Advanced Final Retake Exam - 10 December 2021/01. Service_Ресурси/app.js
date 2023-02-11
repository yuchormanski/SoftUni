window.addEventListener('load', solve);

function solve() {

    const sendButton = document.querySelector('#right button');
    const receivedOrders = document.getElementById('received-orders');
    const completedOrders = document.getElementById('completed-orders');
    const clearButton = document.querySelector('.clear-btn');
    clearButton.addEventListener('click', (e) => {
        const orderDivs = Array.from(completedOrders.querySelectorAll('div.container'));
        orderDivs.length > 0 ? orderDivs.forEach(el => el.remove()) : null;
    })

    sendButton.addEventListener('click', proceedRepair);

    function proceedRepair(e) {
        e.preventDefault();

        const obj = {
            product: document.getElementById('type-product'),
            description: document.getElementById('description'),
            client: document.getElementById('client-name'),
            phoneNum: document.getElementById('client-phone'),
        }

        if (obj.description.value === '' || obj.client.value === '' || obj.phoneNum.value === '') return;

        const div = creator('div', 'container', '');
        div.appendChild(creator('h2', '', `Product type for repair: ${obj.product.value}`));
        div.appendChild(creator('h3', '', `Client information: ${obj.client.value}, ${obj.phoneNum.value}`));
        div.appendChild(creator('h4', '', `Description of the problem: ${obj.description.value}`));
        const startRepair = creator('button', 'start-btn', 'Start repair')
        const finishRepair = creator('button', 'finish-btn', 'Finish repair');
        finishRepair.disabled = true;
        div.appendChild(startRepair);
        div.appendChild(finishRepair);
        receivedOrders.appendChild(div);

        Object.values(obj).forEach(prop => prop.value = '');

        startRepair.addEventListener('click', (e) => {
            e.target.disabled = true;
            finishRepair.disabled = false;
        });

        finishRepair.addEventListener('click', (e) => {
            completedOrders.appendChild(div);
            startRepair.remove();
            finishRepair.remove();
        });

        function creator(type, hasClass, text) {
            const element = document.createElement(type);
            hasClass ? element.className = hasClass : null;
            text ? element.innerText = text : null;
            return element;
        }
    }
}
