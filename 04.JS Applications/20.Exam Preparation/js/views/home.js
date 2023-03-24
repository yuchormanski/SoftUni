import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';


const homeTemplate = (data) => html`

        <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            ${data.length > 0 ? 
            html`
                <ul class="other-books-list">
                ${data.map(x => html`
                    <li class="otherBooks">
                        <h3>${x.title}</h3>
                        <p>Type: ${x.type}</p>
                        <p class="img"><img src=${x.imageUrl}></p>
                        <a class="button" href="/details/${x._id}">Details</a>
                    </li>`)}
                </ul>
            `:
            html`
                <p class="no-books">No books in database!</p>`
            }
        </section>
`;

export async function homePage(ctx){
    const data = await get('/data/books?sortBy=_createdOn%20desc');
    ctx.render(homeTemplate(data));
}