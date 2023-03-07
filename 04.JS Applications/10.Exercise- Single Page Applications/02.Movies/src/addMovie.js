import { homePageSection, movieExampleSection, editMovieSection, formLoginSection, formSignUpSection, addMovieSection, home } from "./app.js";
import { url } from "./routing.js";


export async function addMovie() {
    homePageSection.style.display = 'none';
    addMovieSection.style.display = 'block';
    const addBtn = document.querySelector('form button');
    addBtn.addEventListener('click', add);
}

async function add(e) {
    e.preventDefault();
    const form = document.getElementById('add-movie-form');
    const formData = new FormData(form);
    try {
        const { title, description, img } = Object.fromEntries(formData);

        if (title == '' || description == '' || img == '') {
            const err = 'All fields required';
            throw new Error(err);
        }

        const response = await fetch(url.post, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description, img })
        });
        const data = await response.json();
        console.log(data);


    } catch (err) {
        alert(err);
    }
}