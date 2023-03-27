import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';
import { getUserData } from '../data/util.js';


const profileTemplate = (user, userEvents) => html`
        <section id="profilePage">
            <div class="userInfo">
                <div class="avatar">
                    <img src="./images/profilePic.png">
                </div>
                <h2>${user.email}</h2>
            </div>
            <div class="board">
                ${userEvents.length > 0 ?
                html`
                    ${userEvents.map(x => html`
                        <div class="eventBoard">
                            <div class="event-info">
                                <img src=${x.imageUrl}>
                                <h2>${x.title}</h2>
                                <h6>${x.date}</h6>
                                <a href="/details/${x._id}" class="details-button">Details</a>
                            </div>
                        </div>
                    `)}
                `: html`
                <div class="no-events">
                    <p>This user has no events yet!</p>
                </div>
                `}
            </div>
        </section>
`;

export async function profilePage(ctx) {
    const user = getUserData();
    const userEvents = await get(`/data/theaters?where=_ownerId%3D%22${user._id}%22&sortBy=_createdOn%20desc`);
    // let userEvents = [];
    console.log(userEvents);

    ctx.render(profileTemplate(user, userEvents))
}