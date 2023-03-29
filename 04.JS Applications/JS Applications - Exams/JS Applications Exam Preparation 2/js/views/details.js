import { html } from '../../node_modules/lit-html/lit-html.js';
import { del, get } from '../data/api.js';
import { getUserData } from '../data/util.js';

const detailsTemplate = (data, deleteAction, user) => html`
        <section id="listing-details">
            <h1>Details</h1>
            <div class="details-info">
                <img src=${data.imageUrl}>
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>${data.brand}</li>
                    <li><span>Model:</span>${data.model}</li>
                    <li><span>Year:</span>${data.year}</li>
                    <li><span>Price:</span>${data.price}$</li>
                </ul>
        
                <p class="description-para">${data.description}</p>
        
                ${user && user._id === data._ownerId ? html`
                    <div class="listings-buttons">
                        <a href="/edit/${data._id}" class="button-list">Edit</a>
                        <a href="javascript:void(0)" class="button-list" @click=${deleteAction}>Delete</a>
                    </div>
                `:null}

            </div>
        </section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const user = getUserData();
    const data = await get('/data/cars/' + id);
    ctx.render(detailsTemplate(data, deleteAction, user));

    async function deleteAction(){
        if(confirm('Are you sure?')){
            await del('/data/cars/' + id);
            ctx.page.redirect('/all');
        }
    }
}