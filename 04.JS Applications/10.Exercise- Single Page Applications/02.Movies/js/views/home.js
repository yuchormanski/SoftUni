import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';
import { getUserData } from '../data/util.js';

const loaderTemplate = () => html`
            <div class="loader">
                <img src="../../img/VAyR.gif"/>
            </div>
`;

const homeTemplate = (data, userData) => html`
    <section id="home-page" class="view-section">
        <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40">
            <img src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg"
                class="img-fluid" alt="Responsive image" style="width: 150%; height: 200px" />
            <h1 class="display-4">Movies</h1>
            <p class="lead">
                Unlimited movies, TV shows, and more. Watch anywhere. Cancel
                anytime.
            </p>
        </div>
    
        <h1 class="text-center">Movies</h1>
    
        <section id="add-movie-button" class="user">
            <a href="/add" class="btn btn-warning">Add Movie</a>
        </section>
    
        <section id="movie">
            <div class="mt-3">
                <div class="row d-flex d-wrap">
                    <ul id="movies-list" class="card-deck d-flex justify-content-center">
                        <!-- movie list -->
    
                        ${data.map(x => 
                            html`
                                <div class="card mb-4">
                                    <img class="card-img-top" src="${x.img}" alt="Card image cap" width="400">
                                    <div class="card-body">
                                        <h4 class="card-title">${x.title}</h4>
                                    </div>
                                    ${userData ?
                                        html`
                                            <div class="card-footer">
                                                <a href="/details/${x._id}">
                                                    <button data-id="${x._id}" type="button" class="btn btn-info">Details</button>
                                                </a>
                                            </div>
                                        `:null}
                                        
                                </div>
                                `)}
    
                        <!-- movie list -->
                    </ul>
                </div>
            </div>
        </section>
    </section>

`;

export async function homePage(ctx) {
    // ctx.render(loaderTemplate());
    const data = await get('/data/movies');
    const userData = getUserData();
    ctx.render(homeTemplate(data, userData))
}