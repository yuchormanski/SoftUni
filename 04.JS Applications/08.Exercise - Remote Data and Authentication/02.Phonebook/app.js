function attachEvents() {
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');
    loadBtn.addEventListener('click', viewContacts);
    createBtn.addEventListener('click', createContact);
}

attachEvents();

async function createContact() {
    const URL = 'http://localhost:3030/jsonstore/phonebook';
    const phonebook = document.getElementById('phonebook');
    const person = document.getElementById('person');
    const phone = document.getElementById('phone');

    const contact = {
        person: person.value,
        phone: phone.value
    };
    try {
        if(contact.person == '' || HTMLFormControlsCollection.phone == ''){
            const error = 'Fields can not  be empty!';
            throw error;
        }
        const options = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(contact),
        }
        const create = await fetch(URL, options)
        const result = await create.json();

        const li = creator('li', 'data-id', result._id, `${result.person}: ${result.phone}`);
        const deleteBtn = creator('button', '', '', 'Delete');
        li.appendChild(deleteBtn);
        phonebook.appendChild(li);
        deleteBtn.addEventListener('click', deleteContact);

        console.log(result);
    }
    catch (error) {
        console.log(await create.json());
    }
    viewContacts()
    person.value = '';
    phone.value = '';

}

async function viewContacts() {
    const phonebook = document.getElementById('phonebook');
    phonebook.innerHTML = '';
    const URL = 'http://localhost:3030/jsonstore/phonebook';

    const load = await fetch(URL);
    const loadedData = await load.json();

    Object.entries(loadedData).forEach(line => {
        const currentKey = line[0];
        const li = creator('li', 'id', currentKey, `${line[1].person}: ${line[1].phone}`);
        const deleteBtn = creator('button', '', '', 'Delete');
        li.appendChild(deleteBtn);
        phonebook.appendChild(li);
        deleteBtn.addEventListener('click', deleteContact)
    })
}

async function deleteContact(e) {
    const URL = 'http://localhost:3030/jsonstore/phonebook';
    // const key = e.target.parentElement['data-id'];
    const key = e.target.parentElement.getAttribute('id');

    const deleteURL = `${URL}/${key}`;
    const options = {
        method: 'DELETE',
    }
    try {
        const action = confirm(`You are going to delete contact.\nAre you sure?`)
        if (action != true) return;
        const remove = await fetch(deleteURL, options);
    }
    catch (err) {
        console.log(err);
    }
    viewContacts()
}

function creator(elType, elAttribute, attrValue, elementText) {
    const element = document.createElement(elType);
    elAttribute ? element[elAttribute] = attrValue : null;
    elementText ? element.innerText = elementText : null;
    return element;
}