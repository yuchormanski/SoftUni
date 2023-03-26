import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';
import { getUserData } from '../data/util.js';

const catalogTemplate = (userData, data) => html`
        <section id="catalogPage">
            <h1>All Albums</h1>
        ${data.length > 0 ?
        html`
            ${data.map(x => 
                html`
                <div class="card-box">
                <img src=${x.imgUrl}>
                <div>
                    <div class="text-center">
                        <p class="name">Name: ${x.name}</p>
                        <p class="artist">Artist: ${x.artist}</p>
                        <p class="genre">Genre: ${x.genre}</p>
                        <p class="price">Price: $${x.price}</p>
                        <p class="date">Release Date: ${x.releaseDate}</p>
                    </div>
                    ${userData ? html`
                    <div class="btn-group">
                        <a href="/details/${x._id}" id="details">Details</a>
                    </div>
                    `:null}

                </div>
            </div>
                `)}
        `:
        html`<p>No Albums in Catalog!</p>`}
        </section>
`;

export async function catalogPage(ctx) {
    const userData = getUserData();
    const data = await get('/data/albums?sortBy=_createdOn%20desc&distinct=name')
    ctx.render(catalogTemplate(userData, data))
}