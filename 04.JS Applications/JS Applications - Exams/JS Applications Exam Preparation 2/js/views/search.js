import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';

const searchTemplate = (searchCar) => html`
        <section id="search-cars">
            <h1>Filter by year</h1>
        
            <div class="container">
                <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
                <button class="button-list" @click=${searchCar}>Search</button>
            </div>
        
            <h2>Results:</h2>
            <div class="listings">
        
        
        
        
            </div>
        </section>
`;

const resultTemplate = (found) => html`
                ${found.length > 0 ?
                html`
                    ${found.map(x => html`
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
                                    <a href="/details/${x._id}" class="button-carDetails">Details</a>
                                </div>
                            </div>
                        </div>
                    `)}
                `:
                html`
                    <!-- Display if there are no matches -->
                    <p class="no-cars"> No results.</p>
                `}
`;


export async function searchPage(ctx) {
    ctx.render(searchTemplate(searchCar));

    async function searchCar() {
        const searchField = document.getElementById('search-input');
        const resField = document.querySelector('.listings');
        const found = await get(`/data/cars?where=year%3D${searchField.value}`);
        render(resultTemplate(found), resField)
    }
}