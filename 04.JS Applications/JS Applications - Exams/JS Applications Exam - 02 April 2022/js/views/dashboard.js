import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';


const dashboardTemplate = (data) => html`
        <section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">
                ${data.length > 0 ?
                html`
                ${data.map(x => 
                    html`
                    <div class="animals-board">
                    <article class="service-img">
                        <img class="animal-image-cover" src=${x.image}>
                    </article>
                    <h2 class="name">${x.name}</h2>
                    <h3 class="breed">${x.breed}</h3>
                    <div class="action">
                        <a class="btn" href="/details/${x._id}">Details</a>
                    </div>
                </div>`)}
                `: html `
                <!--If there is no pets in dashboard-->
                <div>
                    <p class="no-pets">No pets in dashboard</p>
                </div>`}
            </div>
        </section>
`;

export async function dashboardPage(ctx) {
    const data = await get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
    // const data = [];
    ctx.render(dashboardTemplate(data))
}