import { loadBooks } from "./templates.js";

const url = 'http://localhost:3030/jsonstore/collections/books/';

export async function getBooks() {
    const response = await fetch(url);
    const data = Object.entries(await response.json());

    try {
        if (!response.ok) {
            const err = await response.json()
            throw new Error(err.message)
        }
        loadBooks(data)
    } catch (error) {
        alert(error.message)
    }
}

export async function editBook(book) {
    const addForm = document.getElementById('add-form');
    const editForm = document.getElementById('edit-form');
    addForm.style.display = 'none';
    editForm.style.display = 'block';
    const [titleInput, authorInput] = [...document.querySelectorAll('form#edit-form input[type="text"]')]
    const saveBtn = document.querySelector('form#edit-form input[type="submit"]');
    saveBtn.addEventListener('click', updateBook);
    const id = book[0];
    const { title, author } = book[1];
    titleInput.value = title;
    authorInput.value = author;

    async function updateBook(e) {
        e.preventDefault();

        const response = await fetch(url + id, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: titleInput.value, author: authorInput.value })
        })
        try {
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message)
            }
            const data = await response.json()
            getBooks()
        } catch (error) {
            alert(error.message)
        }

    }
}


export async function deleteBook(book) {
    const id = book[0];
    if (confirm(`You\'re about to delete book from library!\nAre you sure?`)) {
        const response = await fetch(url + id, {
            method: 'DELETE'
        });
        getBooks()
    }
}