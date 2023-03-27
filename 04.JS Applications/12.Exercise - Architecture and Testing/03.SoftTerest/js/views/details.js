import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';
import { getUserData } from '../data/util.js';


const detailsTemplate = (data, user) => html`
    <div class="container home some">
        ${data.img[0] === '.'?
        html`
            <img class="det-img" src=${data.img.slice(1)} />`:
        html`
            <img class="det-img" src=${data.img} />`}
        <div class="desc">
            <h2 class="display-5">${data.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${data.description}</p>
        </div>
        <div class="text-center">
            ${user && user._id === data._ownerId ?
            html`
                <a class="btn detb" href="/delete/${data._id}">Delete</a>`
            :null}
            
        </div>
    </div>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const user = getUserData();
    const data = await get('/data/ideas/' + id);
    ctx.render(detailsTemplate(data, user));
}