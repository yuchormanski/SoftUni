import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';

const dashTemplate = (data) => html`
        <h2>Fruits</h2>

        ${data.length > 0 ?
        html`
        
            <section id="dashboard">
            <!-- Display a div with information about every post (if any)-->
                ${data.map(x => html`
                    <div class="fruit">
                        <img src=${x.imageUrl} />
                        <h3 class="title">${x.name}</h3>
                        <p class="description">${x.description}</p>
                        <a class="details-btn" href="/details/${x._id}">More Info</a>
                    </div>
                `)}

            
            </section>
        
        `:
        html`
        
                 <!-- Display an h2 if there are no posts -->
         <h2>No fruit info yet.</h2>
        
        `}


`;

export async function dashboardPage(ctx) {
    const data = await get('/data/fruits?sortBy=_createdOn%20desc');
    // const data = [];
    console.log(data);
    ctx.render(dashTemplate(data))
}