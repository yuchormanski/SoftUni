window.addEventListener('load', solve);

function solve() {
    // input fields
    const modelInput = document.getElementById('model');
    const yearInput = document.getElementById('year');
    const descriptionInput = document.getElementById('description');
    const priceInput = document.getElementById('price');
    const addButton = document.getElementById('add');
    addButton.type = 'button'
    addButton.addEventListener('click', addProduct);

    let totalPrice = 0;
    let pricePanel = document.querySelector('tfoot .total-price');

    function addProduct() {
        // FIELD VALIDATION
        if (modelInput.value !== '' && yearInput.value !== '' && yearInput.value >= 0 && descriptionInput.value !== '' && priceInput.value !== '' && priceInput.value >= 0) {

            let currentPrice = Number(priceInput.value);
            totalPrice += currentPrice;
            const furnitureList = document.getElementById('furniture-list');

            //create row
            const trInfo = document.createElement('tr');
            trInfo.className = 'info';
            trInfo.addEventListener('click', action);

            //create tds
            const tdItem = document.createElement('td');
            tdItem.textContent = modelInput.value;

            const tdPrice = document.createElement('td');
            tdPrice.textContent = Number(priceInput.value).toFixed(2);

            const tdButtons = document.createElement('td');
            const moreBtn = document.createElement('button');
            moreBtn.className = 'moreBtn';
            moreBtn.textContent = 'More Info';
            // moreBtn.addEventListener('click', moreInfo);
            const buyBtn = document.createElement('button');
            buyBtn.className = 'buyBtn';
            buyBtn.textContent = 'Buy it';
            // buyBtn.addEventListener('click', buyItem);
            tdButtons.appendChild(moreBtn);
            tdButtons.appendChild(buyBtn);

            trInfo.appendChild(tdItem);
            trInfo.appendChild(tdPrice);
            trInfo.appendChild(tdButtons);

            //create second row
            const trHide = document.createElement('tr');
            trHide.className = 'hide';

            const tdYear = document.createElement('td');
            tdYear.textContent = `Year:${yearInput.value}`;

            const tdDesc = document.createElement('td');
            tdDesc.colSpan = '3';
            tdDesc.textContent = `Description:${descriptionInput.value}`;

            trHide.appendChild(tdYear);
            trHide.appendChild(tdDesc);

            furnitureList.appendChild(trInfo);
            furnitureList.appendChild(trHide);

            modelInput.value = '';
            yearInput.value = '';
            descriptionInput.value = '';
            priceInput.value = '';

            function action(event) {

                if (event.target.tagName = 'BUTTON') {
                    if (event.target.textContent === 'More Info') {
                        event.target.textContent = 'Less Info';
                        trHide.style.display = 'contents';
                    } else if (event.target.textContent === 'Less Info') {
                        event.target.textContent = 'More Info';
                        trHide.style.display = 'none';
                    }
                }
                if (event.target.className === 'buyBtn') {
                    buyItem(event)
                }
            }

            function buyItem(event) {
                trInfo.remove();
                trHide.remove();
                pricePanel.textContent = totalPrice.toFixed(2);
            }
        }// end validation
    }// end addProduct
}
