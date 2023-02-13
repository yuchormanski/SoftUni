function solve() {

    const addButton = document.querySelector('#container button');
    const inputFields = Array.from(document.querySelectorAll('#container input'));
    const adoption = document.querySelector('#adoption ul');
    const nameField = inputFields[0];
    const ageField = inputFields[1];
    const kindField = inputFields[2];
    const ownerField = inputFields[3];
    addButton.addEventListener('click', adoptPanel);

    function adoptPanel(e) {
        e.preventDefault();

        const name = nameField.value;
        const age = ageField.value;
        const kind = kindField.value;
        const owner = ownerField.value;

        if(name === ''
        || age === ''
        || isNaN(age)
        || kind === ''
        || owner === '') return;

        const li = creator('li', '');
        const p = creator('p', ''); //
        p.appendChild(creator('strong', name));
        const firstPart = document.createTextNode(' is a ');
        p.appendChild(firstPart);
        p.appendChild(creator('strong', age));
        const secondPart = document.createTextNode(' year old ');
        p.appendChild(secondPart);
        p.appendChild(creator('strong', kind));
        li.appendChild(p);
        const span = creator('span', `Owner: ${owner}`);
        li.appendChild(span);
        const contactOwnerBtn = creator('button', 'Contact with owner');
        li.appendChild(contactOwnerBtn);
        adoption.appendChild(li);

        contactOwnerBtn.addEventListener('click', contact);
        nameField.value = '';
        ageField.value = '';
        kindField.value = '';
        ownerField.value = '';

        function contact() {
            contactOwnerBtn.removeEventListener('click', contact);
            const div = creator('div', '')
            const newOwnerField = creator('input', '');//
            newOwnerField.placeholder = 'Enter your names';
            div.appendChild(newOwnerField);
            div.appendChild(contactOwnerBtn);
            contactOwnerBtn.innerText = 'Yes! I take it!';
            li.appendChild(div);
            contactOwnerBtn.addEventListener('click', () => {

                if (newOwnerField.value !== '') {
                    const newOwner = newOwnerField.value;
                    const adopted = document.querySelector('#adopted ul');
                    adopted.appendChild(li);
                    div.remove();
                    span.innerText = `New Owner: ${newOwner}`
                    li.appendChild(contactOwnerBtn);
                    contactOwnerBtn.innerText = 'Checked';

                    contactOwnerBtn.addEventListener('click', clear);

                }
            });
        }

        function clear() {
            li.remove();
        }
    }
    
    function creator(type, text) {
        const element = document.createElement(type);
        if (text) element.innerText = text;
        return element;
    }
}