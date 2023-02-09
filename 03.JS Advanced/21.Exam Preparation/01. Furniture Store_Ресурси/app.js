window.addEventListener('load', solve);

function solve() {

    const input = {
        model: document.getElementById('model'),
        year: document.getElementById('year'),
        description: document.getElementById('description'),
        price: document.getElementById('price'),
    }
    const addButton = document.getElementById('add');
    addButton.addEventListener('click', review);
    
    let priceKeeper = 0;
    
    function review(e) {
        e.preventDefault();
        
        const tableBody = document.getElementById('furniture-list');
        const model = input.model.value;
        const year = input.year.value;
        const description = input.description.value;
        const price = input.price.value;
        
        if (model === '' || year === '' || description === '' || price === '') return;
        
        const tr = creator('tr', 'info', '');
        tr.appendChild(creator('td', '', `${model}`));
        tr.appendChild(creator('td', '', `${Number(price).toFixed(2)}`));
        const btnTD = creator('td', '', '');
        const moreBtn = creator('button', 'moreBtn', 'More Info');
        const buyBtn = creator('button', 'buyBtn', 'Buy it');
        btnTD.appendChild(moreBtn);
        btnTD.appendChild(buyBtn);
        tr.appendChild(btnTD);
        tableBody.appendChild(tr);

        const trHidden = creator('tr', 'hide', '');
        trHidden.appendChild(creator('td', '', `Year: ${year}`));
        const tdColspan = creator('td', '', `Description: ${description}`);
        tdColspan.colSpan = '3';
        trHidden.appendChild(tdColspan);
        tableBody.appendChild(trHidden);
        
        moreBtn.addEventListener('click', viewMore);
        buyBtn.addEventListener('click', buyItem);

        input.model.value = '';
        input.year.value = '';
        input.description.value = '';
        input.price.value = '';


        function viewMore() {
            if (moreBtn.innerText === 'Less Info') {
                moreBtn.innerText = 'More info'
                trHidden.style.display = 'none';
            } else {
                moreBtn.innerText = 'Less Info'
                trHidden.style.display = 'contents';
            }
        }
        
        function buyItem() {
            const totalPrice = document.querySelector('tfoot .total-price');
            priceKeeper += Number(price);
            totalPrice.innerText = priceKeeper.toFixed(2);
            tr.remove();
            trHidden.remove();

        }
    }
    function creator(type, attribute, text) {
        const element = document.createElement(type);
        if (attribute) {
            element.className = attribute;
        };
        if (text) { element.innerText = text };
        return element;
    }

}
