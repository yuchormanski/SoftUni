import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';
import { getUserData } from '../data/util.js';


const resultTemplate = (onSearch, result, userData) => html`
        <section id="searchPage">
            <h1>Search by Name</h1>
        
            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button class="button-list" @click=${onSearch}>Search</button>
            </div>
        
            <h2>Results:</h2>
        
            <!--Show after click Search button-->
            <div class="search-result">
                ${result !== undefined ? 
                html`
                   <!--If have matches-->
                    ${result.length > 0 ?
                    html`
                        ${result.map(x => html`
                            <div class="card-box">
                            <img src=${x.imgUrl}>
                            <div>
                                <div class="text-center">
                                    <p class="name">Name: ${x.name}</p>
                                    <p class="artist">Artist: ${x.artist}</p>
                                    <p class="genre">Genre: ${x.genre}</p>
                                    <p class="price">Price: $${x.price}</p>
                                    <p class="date">Release Date: ${x.date}</p>
                                </div>
                                ${userData ? 
                                    html`
                                        <div class="btn-group">
                                            <a href="/details/${x._id}" id="details">Details</a>
                                        </div>
                                    `:null}
                            </div>
                        </div>
                    `)}
                `:
                html`
                    <!--If there are no matches-->
                    <p class="no-result">No result.</p>
                    `}
                
                `:null}         
                </div>
        </section>
`;

export async function searchPage(ctx) {
    let result;
    ctx.render(resultTemplate(onSearch, result))
    async function onSearch() {
        const userData = getUserData();
        const search = document.getElementById('search-input');  
        if(search.value == '') return alert('Fill the field!')
        const result = await get(`/data/albums?where=name%20LIKE%20%22${search.value}%22`);
        search.value = '';
        ctx.render(resultTemplate(onSearch, result, userData))
    }
}