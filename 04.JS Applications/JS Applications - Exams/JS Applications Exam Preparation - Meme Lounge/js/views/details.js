import { html } from '../../node_modules/lit-html/lit-html.js';
import { del, get } from '../data/api.js';
import { getUserData } from '../data/util.js';


const detailsTemplate = (data, deleteAction, userData) => html`
        <section id="meme-details">
            <h1>Meme Title: ${data.title}</h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src=${data.imageUrl}>
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>${data.description}</p>
        
                    <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
                    ${userData._id === data._ownerId ? 
                    html`
                        <a class="button warning" href="/edit/${data._id}">Edit</a>
                        <button class="button danger" @click=${deleteAction}>Delete</button>`:null}

        
                </div>
            </div>
        </section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const userData = getUserData();
    const data = await get('/data/memes/' + id)
    console.log(data);
    ctx.render(detailsTemplate(data, deleteAction, userData));


    async function deleteAction() {
        if (confirm("Are you sure?!?!?")) {

            await del('/data/memes/' + id);
            ctx.page.redirect('/all');
        }

    }

}