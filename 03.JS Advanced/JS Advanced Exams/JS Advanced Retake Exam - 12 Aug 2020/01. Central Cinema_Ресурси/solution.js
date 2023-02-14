function solve() {

    const containerElements = Array.from(document.querySelectorAll('#container input'));
    const movies = document.querySelector('#movies ul');
    const archive = document.querySelector('#archive ul');
    const clearBtn = document.querySelector('#archive button');
    const nameInput = containerElements[0];
    const hallInput = containerElements[1];
    const priceInput = containerElements[2];
    const onScreenBtn = document.querySelector('#container button');
    onScreenBtn.addEventListener('click', onScreen);
    clearBtn.addEventListener('click', deleteAll);

    function onScreen(e) {
        e.preventDefault();

        const name = nameInput.value;
        const hall = hallInput.value;
        const price = Number(priceInput.value);

        if (name === ''
            || hall === ''
            || price === ''
            || isNaN(price)) return;

        const li = creator('li', '', '', '');
        li.appendChild(creator('span', '', '', name));
        li.appendChild(creator('strong', '', '', `Hall: ${hall}`));
        const div = creator('div', '', '', '');
        div.appendChild(creator('strong', '', '', price.toFixed(2)));
        div.appendChild(creator('input', 'placeholder', 'Tickets Sold', ''));
        div.appendChild(creator('button', '', '', 'Archive'));
        li.appendChild(div);
        movies.appendChild(li);

        const strong = li.querySelector('strong');
        const archiveBtn = div.querySelector('button');
        const ticketInput = div.querySelector('input');
        archiveBtn.addEventListener('click', toArchive);
        
        nameInput.value = '';
        hallInput.value = '';
        priceInput.value = '';
        
        function toArchive() {
            const ticketSold = Number(ticketInput.value);
            if (ticketInput.value === '' || isNaN(ticketInput.value)) return
            const totalPrice = ticketSold * price;
            archive.appendChild(li);
            div.remove();
            strong.innerText = `Total amount: ${totalPrice.toFixed(2)}`;
            li.appendChild(archiveBtn);
            archiveBtn.innerText = 'Delete';
            archiveBtn.removeEventListener('click', toArchive);
            archiveBtn.addEventListener('click', deleteLi);
        }

        function deleteLi() {
            li.remove();
        }
    }

    function deleteAll() {
        Array.from(archive.childNodes).forEach(li => li.remove());
    }

    function creator(type, attr, attrText, text) {
        const element = document.createElement(type);
        if (attr) {
            element[attr] = attrText;
        }
        if (text) {
            element.innerText = text;
        }
        return element;
    }
}