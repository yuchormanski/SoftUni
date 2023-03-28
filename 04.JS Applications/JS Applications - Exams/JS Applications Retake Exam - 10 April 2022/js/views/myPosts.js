import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';
import { getUserData } from '../data/util.js';

const myPostsTemplate = (posts) => html`
        <section id="my-posts-page">
            <h1 class="title">My Posts</h1>
        
            ${posts.length > 0 ?
                html`
                    <div class="my-posts">
                        ${posts.map(x => html`
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
            <h1 class="title no-posts-title">You have no posts yet!</h1>
            `}     
        </section>
`;

export async function myPostsPage(ctx) {
    const user = getUserData();
    const posts = await get(`/data/posts?where=_ownerId%3D%22${user._id}%22&sortBy=_createdOn%20desc`);
    // const posts = [];
    ctx.render(myPostsTemplate(posts))
}