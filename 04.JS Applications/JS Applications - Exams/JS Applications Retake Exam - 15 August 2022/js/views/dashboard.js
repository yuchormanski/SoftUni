import { get } from '../data/api.js'
import { html } from '../../node_modules/lit-html/lit-html.js';

const dashboardTemplateWithData = (data) => html`

<section id="dashboard">
    <h2>Collectibles</h2>
    <ul class="card-wrapper">
        <!-- Display a li with information about every post (if any)-->
        ${data.map(x => html`

        <li class="card">
            <img src=${x.imageUrl} alt="travis" />
            <p>
                <strong>Brand: </strong><span class="brand">${x.brand}</span>
            </p>
            <p>
                <strong>Model: </strong><span class="model">${x.model}</span>
            </p>
            <p><strong>Value:</strong><span class="value">${x.value}</span>$</p>
            <a class="details-btn" href="/details/${x._id}">Details</a>
        </li>

        `)}

    </ul>
`;

const dashboardTemplateNoteData = () => html`
        <section id="dashboard">
            <h2>Collectibles</h2>
            <h2>There are no items added yet.</h2>
        </section>
`;

export async function dashboardPage(ctx) {

    const data = await get(`/data/shoes?sortBy=_createdOn%20desc`);
    // const data = [];
    if (data.length > 0) {
        ctx.render(dashboardTemplateWithData(data));
    } else {
        ctx.render(dashboardTemplateNoteData());
    }
}