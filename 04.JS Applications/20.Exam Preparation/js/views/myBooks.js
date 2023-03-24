import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';
import { getUserData } from '../data/util.js';

const myBooksTemplate = (data) => html`
        <section id="my-books-page" class="my-books">
            <h1>My Books</h1>
            <!-- Display ul: with list-items for every user's books (if any) -->
            ${data.length > 0 ?
        html`
            <ul class="my-books-list">
                ${data.map(x => html`
                <li class="otherBooks">
                    <h3>${x.title}</h3>
                    <p>Type: ${x.type}</p>
                    <p class="img"><img src=${x.imageUrl}></p>
                    <a class="button" href="/details/${x._id}">Details</a>
                </li>`)}
            </ul>`:
        html`
            <!-- Display paragraph: If the user doesn't have his own books  -->
            <p class="no-books">No books in database!</p>`}
        </section>`;


export async function myBooksPage(ctx) {
    const id = ctx.params.id;
    const userData = getUserData();
    const data = await get(`/data/books?where=_ownerId%3D%22${userData._id}%22&sortBy=_createdOn%20desc`);
    console.log(data);
    ctx.render(data)
}