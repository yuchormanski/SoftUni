import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';

const homeTemplate = (data) => html`
        <section id="dashboard-page">
            <h1 class="title">All Posts</h1>
        
            ${data.length > 0 ?
            html`
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
            </div>
            `:
            html`
            <!-- Display an h1 if there are no posts -->
            <h1 class="title no-posts-title">No posts yet!</h1>
            `}
        </section>
`;

export async function homePage(ctx) {

    const data = await get('/data/posts?sortBy=_createdOn%20desc')
    ctx.render(homeTemplate(data));
}