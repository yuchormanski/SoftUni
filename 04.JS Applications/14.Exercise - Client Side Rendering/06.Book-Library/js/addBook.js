import { getBooks } from "./router.js";
export async function addBook(e) {
    e.preventDefault()

    const form = document.getElementById('add-form');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData)

    if (data.title == '' || data.author == '') {
        const error = 'All fields are required!';
        throw new Error(error);
    }

    const response = await fetch('http://localhost:3030/jsonstore/collections/books/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    try {
        if (!response.ok) {
            const error = response.json();
            throw new Error(error.message);
        }
        const data = await response.json();
        form.reset()


    } catch (error) {
        alert(error.message)
    }

}