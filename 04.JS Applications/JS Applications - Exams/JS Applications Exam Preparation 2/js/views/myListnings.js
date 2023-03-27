import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';
import { getUserData } from '../data/util.js';

const myListTemplate = (data) => html`
        <section id="my-listings">
            <h1>My car listings</h1>
            <div class="listings">
        
                ${data.length > 0 ?
                html`
                    ${data.map(x => html`
                            <!-- Display all records -->
                        <div class="listing">
                            <div class="preview">
                                <img src=${x.imageUrl}>
                            </div>
                            <h2>${x.brand} ${x.model}</h2>
                            <div class="info">
                                <div class="data-info">
                                    <h3>Year: ${x.year}</h3>
                                    <h3>Price: ${x.price} $</h3>
                                </div>
                                <div class="data-buttons">
                                    <a href="/detail?${x._id}" class="button-carDetails">Details</a>
                                </div>
                            </div>
                        </div>
                    `)}
                `:
                html`
                    <!-- Display if there are no records -->
                    <p class="no-cars"> You haven't listed any cars yet.</p>
                `}           
            </div>
        </section>
`;

export async function myListingsPage(ctx) {
    const user = getUserData();
    let data = [];
    if(user){
        data = await get(`/data/cars?where=_ownerId%3D%22${user._id}%22&sortBy=_createdOn%20desc`)
    }
    ctx.render(myListTemplate(data));
}