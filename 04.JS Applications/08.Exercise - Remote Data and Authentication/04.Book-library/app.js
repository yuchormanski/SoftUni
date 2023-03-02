
const URL = `http://localhost:3030/jsonstore/collections/books`;
const tableBody = document.querySelector('tbody');
const formInput = Array.from(document.querySelectorAll('form input[type="text"]'));
const titleInput = formInput[0];
const authorInput = formInput[1];
const submitBtn = document.querySelector('form button');
submitBtn.addEventListener('click', addBook);


function getElements() {
    document.getElementById('loadBooks').addEventListener('click', loadBooks);
}
getElements()

async function loadBooks() {
    tableBody.innerHTML = '';
    const respond = await fetch(URL);
    const data = await respond.json();
    
    Object.entries(data).forEach(book => {
        const id = book[0];
        const { author, title } = book[1];
        
        tableBody.appendChild(createRow(title, author, id));
    });

}
async function addBook(e) {
    e.preventDefault();
    const filled = formInput.every(input => input.value !== '');
    if (!filled) {
        const error = 'All fields are required!';
        return alert(error);
    }
    const newBook = {
        title: titleInput.value,
        author: authorInput.value
    }

    const options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newBook)
    }

    const response = await fetch(URL, options);
    const data = await response.json();

    formInput.forEach(input => input.value = '');

    tableBody.appendChild(createRow(data.title, data.author, data._id));
}


async function editBook(e) {
    e.preventDefault();

    const formH3 = document.querySelector('form h3');
    const form = document.querySelector('form');
    const saveBtn = submitBtn.cloneNode(false);
    const element = e.target.parentElement.parentElement;
    const [title, author, _] = element.querySelectorAll('td');
    saveBtn.textContent = 'Save';
    form.replaceChild(saveBtn, submitBtn);
    formH3.textContent = 'Edit FORM';
    
    titleInput.value = title.textContent;
    authorInput.value = author.textContent;

    saveBtn.addEventListener('click', edit)

    async function edit(e) {
        e.preventDefault();
     
        const edited = {
            title: titleInput.value,
            author: authorInput.value,
        }
        
        const options = {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(edited)
        }

        const response = await fetch(`${URL}/${element.id}`, options);
        const data = await response.json();
        
        element.remove()
        formInput.forEach(input => input.value = '');
        formH3.textContent = 'FORM';
        form.replaceChild(submitBtn, saveBtn);
        loadBooks()
    }
}




async function deleteBook(e) {
    const element = e.target.parentElement.parentElement;
    element.remove();

    const options = {
        method: 'DELETE',
    }
    const respond = await fetch(`${URL}/${element.id}`, options);
    const data = await respond.json();
}

function createRow(title, author, id) {
    const tr = document.createElement('tr');
    tr.setAttribute('id', id);

    const bookTitle = tr.insertCell(0);
    bookTitle.textContent = title;

    const bookAuthor = tr.insertCell(1);
    bookAuthor.textContent = author;

    const actionCell = tr.insertCell(2);
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    deleteBtn.textContent = 'Delete';
    actionCell.appendChild(editBtn);
    actionCell.appendChild(deleteBtn);



    editBtn.addEventListener('click', editBook);
    deleteBtn.addEventListener('click', deleteBook);
    return tr;
}

