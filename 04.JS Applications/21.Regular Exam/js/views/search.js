import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';
import { createSubmitHandler } from '../data/util.js';

const searchTemplate = (onSearch) => html`
       <section id="search">

                <div class="form">
                <h2>Search</h2>
                <form class="search-form" @submit=${onSearch}>
                    <input
                    type="text"
                    name="search"
                    id="search-input"
                    />
                    <button class="button-list">Search</button>
                </form>
                </div>
                <h4>Results:</h4>
        </section>
`;


const resultTemplate = (result, onSearch) => html`
       <section id="search">

                <div class="form">
                <h2>Search</h2>
                <form class="search-form" @submit=${onSearch}>
                    <input
                    type="text"
                    name="search"
                    id="search-input"
                    />
                    <button class="button-list">Search</button>
                </form>
                </div>
                <h4>Results:</h4>

                <div class="search-result">
                ${result.length > 0 ?
                    html`                            
                        ${result.map(x => html`
                            <div class="fruit">
                                <img src=${x.imageUrl} />
                                <h3 class="title">${x.name}</h3>
                                <p class="description">${x.description}</p>
                                <a class="details-btn" href="/details/${x._id}">More Info</a>
                            </div>                       
                            `)}                      
                        `:
                    html`
                        <p class="no-result">No result.</p>
                        `
                }     
                </div>
        </section>
`;

export async function searchPage(ctx) {
    ctx.render(searchTemplate(createSubmitHandler(onSearch)));
    async function onSearch(data, form) {
        if (Object.values(data).some(x => x == '')) return alert('Add search criteria');
        const result = await get(`/data/fruits?where=name%20LIKE%20%22${data.search}%22`);
        ctx.render(resultTemplate(result, createSubmitHandler(onSearch)));
    }
}