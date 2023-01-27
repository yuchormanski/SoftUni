function solve() {
    const [input, outputTextArea] = document.querySelectorAll('#exercise textarea');
    const [generateBtn, buyBtn] = document.querySelectorAll('#exercise button');
    const tBody = document.querySelector('.table tbody');
    
    generateBtn.addEventListener('click', generate);
    
    function generate(e) {
        const data = JSON.parse(input.value);

        //COLLECT ITEMS
        for (let el of data) {
            const tr = document.createElement('tr');

            const tdImg = document.createElement('td');
            const img = document.createElement('img');
            img.src = el.img;
            tdImg.appendChild(img);

            const tdName = document.createElement('td');
            const pName = document.createElement('p');
            pName.textContent = el.name;
            tdName.appendChild(pName);

            const tdPrice = document.createElement('td');
            const pPrice = document.createElement('p');
            pPrice.textContent = el.price;
            tdPrice.appendChild(pPrice);

            const tdDecFactor = document.createElement('td');
            const pDecFactor = document.createElement('p');
            pDecFactor.textContent = el.decFactor;
            tdDecFactor.appendChild(pDecFactor);

            const tdCheckbox = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            tdCheckbox.appendChild(checkbox);

            tr.appendChild(tdImg);
            tr.appendChild(tdName);
            tr.appendChild(tdPrice);
            tr.appendChild(tdDecFactor);
            tr.appendChild(tdCheckbox);

            tBody.appendChild(tr);
        } // END COLLECT ITEMS  

        buyBtn.addEventListener('click', buyItems);
        const tableRows = Array.from(tBody.querySelectorAll('tr'));

        const products = [];
        let totalPrice = 0;
        let avgFactor = 0;

        function buyItems(e) {

            for (let row of tableRows) {
                const allTd = Array.from(row.querySelectorAll('td'));
                const chBox = row.querySelector('input[type="checkbox"]');
                if (chBox.checked) {
                    products.push(allTd[1].textContent);
                    totalPrice += Number(allTd[2].textContent);
                    avgFactor += Number(allTd[3].textContent);
                }
            }
            outputTextArea.textContent = `Bought furniture: ${products.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgFactor / products.length}`

        }
    }
}