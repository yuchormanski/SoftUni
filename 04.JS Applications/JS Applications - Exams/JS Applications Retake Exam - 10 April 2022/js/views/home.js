import { html } from '../../node_modules/lit-html/lit-html.js'
import { get } from '../data/api.js';

const homeTemplate = (data) => html`
        <section id="dashboard-page">
            <h1 class="title">All Posts</h1>
            <div class="all-posts"></div>
            <!-- Display a div with information about every post (if any)-->
        
            ${data.length > 0 ? html`
            <div class="all-posts">
                ${data.map(x => html`
                <div class="post">
                    <h2 class="post-title">${x.title}</h2>
                    <img class="post-image" src=${x.imageUrl} alt="Material Image">
                    <div class="btn-wrapper">
                        <a href="/details/${x._id}" class="details-btn btn">Details</a>
                    </div>
                </div>
                `)}
            </div>`:
        html`<h1 class="title no-posts-title">No posts yet!</h1>`}
            </div>
        </section>
`;

export async function homePage(ctx) {
    const data = await get('/data/posts?sortBy=_createdOn%20desc');
    // let data = []
    ctx.render(homeTemplate(data));
}

