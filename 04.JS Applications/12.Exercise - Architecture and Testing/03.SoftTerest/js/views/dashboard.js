import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';



const dashboardTemplate = (data) => html`
    <div id="dashboard-holder">
        
        ${data.length > 0 ?
            html`
            ${data.map(x => html`
                    <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
                        <div class="card-body">
                            <p class="card-text">${x.title}</p>
                        </div>
                        <img class="card-image" src=${x.img} alt="Card image cap">
                        <a class="btn" href="/details/${x._id}">Details</a>
                    </div>
                `)}
            `:
            html`
                <h1>No ideas yet! Be the first one :)</h1>
                `}
    </div>
    `;

export async function dashboardPage(ctx){

    const data = await get('/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');
    // const data = [];
    ctx.render(dashboardTemplate(data))
}
