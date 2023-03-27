import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';

const allTemplate = (data) => html`
        <section id="car-listings">
            <h1>Car Listings</h1>
            <div class="listings">
        
                ${data.length > 0 ?
                html`
                    <!-- Display all records -->
                    ${data.map(x => html`
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
                                    <a href="/details/${x._id}" class="button-carDetails">Details</a>
                                </div>
                            </div>
                        </div>
                    `)}

                `:
                html`
                    <!-- Display if there are no records -->
                    <p class="no-cars">No cars in database.</p>
                `}


        

            </div>
        </section>
`;

export async function allListingsPage(ctx) {
const data = await get('/data/cars?sortBy=_createdOn%20desc');
// let data = []
    ctx.render(allTemplate(data));
}

