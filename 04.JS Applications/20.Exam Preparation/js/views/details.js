import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';
import { getUserData } from '../data/util.js';


const detailsTemplate = (data, userData) => html`
        <section id="details-page" class="details">
            <div class="book-information">
                <h3>${data.title}</h3>
                <p class="type">Type: ${data.type}</p>
                <p class="img"><img src=${data.imageUrl}></p>
                <div class="actions">
                    ${userData? 
                    html `
                        ${userData._id === data._ownerId ?
                        html `
                            <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                            <a class="button" href="/edit/${data._id}">Edit</a>
                            <a class="button" href="/delete/${data._id}">Delete</a>`
                        : html `
                            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                            <a class="button" href="#">Like</a>`
                        }`
                            
                    : null}
                    
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: ?0</span>
                    </div>
  
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${data.description}</p>
            </div>
        </section>
`;

export async function detailsPage(ctx) {
    const userData = getUserData();
    const id = ctx.params.id;
    const data = await get('/data/books/' + id);
    ctx.render(detailsTemplate(data, userData))
}