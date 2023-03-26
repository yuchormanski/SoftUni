import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';

const catalogTemplate = (catData) => html`
        <section id="catalog-page">
            <h1>All Games</h1>
            ${catData.length > 0 ?
        html`
            ${catData.map(x => 
                html`
                <div class="allGames">
                <div class="allGames-info">
                    <img src=${x.imageUrl}>
                    <h6>${x.category}</h6>
                    <h2>${x.title}</h2>
                    <a href="/details/${x._id}" class="details-button">Details</a>
                </div>
            </div>`)}
            `:
        html`
            <h3 class="no-articles">No articles yet</h3>`}
        </section>
`;

export async function catalogPage(ctx) {
    const catData = await get('/data/games?sortBy=_createdOn%20desc');
    // const catData = [];
    ctx.render(catalogTemplate(catData))
}