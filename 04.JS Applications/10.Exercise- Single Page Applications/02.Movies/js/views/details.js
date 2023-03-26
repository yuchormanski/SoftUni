import { html } from '../../node_modules/lit-html/lit-html.js';
import { get, post } from '../data/api.js';
import { getUserData } from '../data/util.js';

const loaderTemplate = () => html`
            <div class="loader">
                <img src="../../img/VAyR.gif" />
            </div>
`;

const detailsTemplate = (movie, userData, likes, likeAction) => html`
    <section id="movie-example" class="view-section">
        <div class="container">
            <div class="row bg-light text-dark">
                <h1>Movie title: ${movie.title}</h1>
    
                <div class="col-md-8">
                    <img class="img-thumbnail" src=${movie.img} alt="Movie" />
                </div>
                <div class="col-md-4 text-center">
                    <h3 class="my-3">Movie Description</h3>
                    <p>${movie.description}</p>
                    ${userData._id === movie._ownerId ?
            html`
                    <a class="btn btn-danger" href="/delete/${movie._id}">Delete</a>
                    <a class="btn btn-warning" href="/edit/${movie._id}">Edit</a>` :
            html`
    
                    <a class="btn btn-primary" href="javascript:void(0)" @click=${likeAction}>Like</a>
                    `}
                    <span class="enrolled-span">Liked ${likes}</span>
                </div>
            </div>
        </div>
    </section>
`;

export async function detailsPage(ctx) {
    const userData = getUserData();
    const id = ctx.params.id;
    // ctx.render(loaderTemplate());
    const movie = await get('/data/movies/' + id);
    const likes = await get(`/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&`);
    // const isUserLike = await get(`/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userData._id}%`);
    // console.log(isUserLike);
    ctx.render(detailsTemplate(movie, userData, likes, likeAction));
    const likesSpan = document.querySelector('.enrolled-span');
    likesSpan.style.display = 'none';
    const likeBtn = document.querySelector('.btn-primary');


    async function likeAction() {
        likesSpan.style.display = '';
        likeBtn.style.display = 'none';
        await post('/data/likes', { movieId: id });
        const res = await get('/data/likes');
        console.log(res);
        // ctx.page.redirect('/details/' +id)
        ctx.render(detailsTemplate(movie, userData, likes, likeAction));
    }
}