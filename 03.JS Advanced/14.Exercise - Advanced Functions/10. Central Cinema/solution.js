function solve() {

    //get elements
    const [input1, input2, input3] = document.querySelectorAll('#container input');
    const onScreenButton = document.querySelector('#container button');
    onScreenButton.addEventListener('click', onScreen);
    const onScreenMovies = document.querySelector('#movies ul');
    const archiveMovies = document.querySelector('#archive ul');
    const clearBtn = document.querySelector('#archive button');
    clearBtn.addEventListener('click', (e) => {
        const archiveList = Array.from(e.target.parentElement.children[1].children)
        archiveList.forEach(el => el.remove());
    });

    //easy clearing fields
    const movie = {
        name: input1,
        hall: input2,
        ticketPrice: input3
    }

    //
    function onScreen(e) {
        e.preventDefault(); // form included
        //input validation
        if (input1.value === '' ||
            input2.value === '' ||
            input3.value === '' ||
            isNaN(input3.value)) {
            return;
        }

        //create elements - using function for creating with attributes (type, attribute, attributeText, innerText)
        const li = createELement('li', '', '', '');
        li.appendChild(createELement('span', '', '', `${movie.name.value}`));
        li.appendChild(createELement('strong', '', '', `Hall: ${movie.hall.value}`));
        li.appendChild(createELement('div', '', '', ''));
        const div = createELement('div', '', '', '');
        div.appendChild(createELement('strong', '', '', `${Number(movie.ticketPrice.value).toFixed(2)}`)); // to number and after that 2 trailing zeroes
        const inputQty = createELement('input', 'placeholder', 'Thicket Sold', '')
        div.appendChild(inputQty);
        //create all needed butons
        const archiveBtn = createELement('button', '', '', 'Archive');
        const deleteBtn = createELement('button', '', '', 'Delete'); //on demand
        archiveBtn.addEventListener('click', toArchive);
        deleteBtn.addEventListener('click', () => { li.remove() });
        div.appendChild(archiveBtn);
        li.appendChild(div);
        onScreenMovies.appendChild(li);

        Object.values(movie).forEach(el => el.value = ''); //clear input fields

        function toArchive() {

            //validaton
            if (inputQty.value === '' || isNaN(inputQty.value)) {
                return;
            }
            archiveMovies.appendChild(li); // change parent
            const price = archiveMovies.querySelector('div strong').innerText; // taking price
            const qty = archiveMovies.querySelector('input').value; // taking quantity
            let totalPrice = Number(price) * Number(qty);
            div.remove();
            li.querySelector('strong').innerText = `Total amount: ${totalPrice.toFixed(2)}`;
            li.appendChild(deleteBtn);
        }

        // element tool
        function createELement(type, attribute, attributeText, innerText) {
            const element = document.createElement(type);
            if (attribute) {
                element[attribute] = attributeText;
            }
            if (innerText) {
                element.innerText = innerText;
            }
            return element;
        }
    }
}