import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getBooks, editBook, deleteBook } from './router.js';
import { addBook } from './addBook.js';

const body = document.querySelector('body');


export function initialize() {
    const buttonTemplate = () => html`
        <button id="loadBooks" @click=${()=> getBooks()} >LOAD ALL BOOKS</button>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        
        <form id="add-form">
            <h3>Add book</h3>
            <label>TITLE</label>
            <input type="text" name="title" placeholder="Title...">
            <label>AUTHOR</label>
            <input type="text" name="author" placeholder="Author...">
            <input type="submit" value="Submit">
        </form>
        
        <form id="edit-form" style='display: none'>
            <input type="hidden" name="id">
            <h3>Edit book</h3>
            <label>TITLE</label>
            <input type="text" name="title" placeholder="Title...">
            <label>AUTHOR</label>
            <input type="text" name="author" placeholder="Author...">
            <input type="submit" value="Save">
        </form>
        `;
    render(buttonTemplate(), body)

    document.querySelector('#add-form input[type="submit"]').addEventListener('click', addBook)
}

export function loadBooks(data) {

    const tBody = document.querySelector('table tbody');
    const addForm = document.getElementById('add-form')
    const editForm = document.getElementById('edit-form')

    const booksTemplate = (book) => html`
    
                <tr>
                    <td>${book[1].title}</td>
                    <td>${book[1].author}</td>
                    <td>
                        <button @click=${() => editBook(book)} >Edit</button>
                        <button @click=${() => deleteBook(book)} >Delete</button>
                    </td>
                </tr>
    `
    render(data.map(booksTemplate), tBody)

    addForm.style.display = 'block';
    editForm.style.display = 'none';
}

