import { html } from '../../node_modules/lit-html/lit-html.js'
import { get } from '../data/api.js';

const dashTemplate = (data) => html`
        <section id="dashboard">
            <h2>Job Offers</h2>
            
            ${data.length > 0 ? data.map(x => html`
            <div class="offer">
                <img src=${x.imageUrl} alt="example1" />
                <p>
                    <strong>Title: </strong><span class="title">${x.title}</span>
                </p>
                <p><strong>Salary:</strong><span class="salary">${x.salary}</span></p>
                <a class="details-btn" href="/details/${x._id}">Details</a>
            </div>`)
            : html`
            <h2>No offers yet.</h2>`}        
        </section>
`;

export async function dashboardPage(ctx) {

    const data = await get('/data/offers?sortBy=_createdOn%20desc');
    ctx.render(dashTemplate(data))
}