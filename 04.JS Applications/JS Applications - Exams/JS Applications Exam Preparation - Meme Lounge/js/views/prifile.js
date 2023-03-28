import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';
import { getUserData } from '../data/util.js';

const profileTemplate = (data, user) => html`
    <section id="user-profile-page" class="user-profile">
        <article class="user-info">
            <img id="user-avatar-url" alt="user-profile" src="/images/${user.gender}.png">
            <div class="user-content">
                <p>Username: ${user.username}</p>
                <p>Email: ${user.email}</p>
                <p>My memes count: ${data.length}</p>
            </div>
        </article>
        <h1 id="user-listings-title">User Memes</h1>
        <div class="user-meme-listings">

            ${data.length > 0 ?
            html`
                ${data.map(x => html`
                        <!-- Display : All created memes by this user (If any) -->
                    <div class="user-meme">
                        <p class="user-meme-title">${x.title}</p>
                        <img class="userProfileImage" alt="meme-img" src=${x.imageUrl}>
                        <a class="button" href="/details/${x._id}">Details</a>
                    </div>
                `)}
            `:
            html`
                    <!-- Display : If user doesn't have own memes  -->
                    <p class="no-memes">No memes in database.</p>
            `}
        </div>
    </section>
`;

export async function ProfilePage(ctx) {
    const user = getUserData();
    const data = await get(`/data/memes?where=_ownerId%3D%22${user._id}%22&sortBy=_createdOn%20desc`);
    ctx.render(profileTemplate(data, user));
}
