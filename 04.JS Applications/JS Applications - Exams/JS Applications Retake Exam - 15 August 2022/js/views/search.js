import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { get } from "../data/api.js";
import { getUserData } from "../data/util.js";

const searchTemplate = (onSearch) => html`

        <section id="search">
            <h2>Search by Brand</h2>
        
            <form class="search-wrapper cf" @submit=${onSearch}>
                <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
                <button type="submit">Search</button>
            </form>
        
            <h3>Results:</h3>
        
            <div id="search-container">
        
            </div>
        </section>
`;

export async function searchPage(ctx) {
    ctx.render(searchTemplate(onSearch))

    async function onSearch(e) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const searchString = Object.fromEntries(formData.entries())
        // {search: "value"}
        const data = await get('/data/shoes')
        const result = data.filter(x => x.brand.includes(searchString.search));
        form.reset();
        showResult(result)
    }

    function showResult(result) {
        const searchContainer = document.getElementById('search-container');
        const userData = getUserData();
        const resultTemplate = () => html`
                        <ul class="card-wrapper">
                            ${result.map(x => html`
                            <li class="card">
                                <img src=${x.imageUrl} alt="travis" />
                                <p>
                                    <strong>Brand: </strong><span class="brand">${x.brand}</span>
                                </p>
                                <p>
                                    <strong>Model: </strong><span class="model">${x.model}</span>
                                </p>
                                <p><strong>Value:</strong><span class="value">${x.value}</span>$</p>
                                ${userData ? html`<a class="details-btn" href="/details/${x._id}">Details</a>` : null}
                            </li>
                            `)}
                        </ul>
        `;
        const emptyResult = () => html`
            <h2>There are no results found.</h2>
        `;
        if (result.length > 0) {

            render(resultTemplate(result), searchContainer)
        } else {
            render(emptyResult(), searchContainer)
        }
    }
}