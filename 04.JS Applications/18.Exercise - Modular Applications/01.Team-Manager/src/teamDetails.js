import { html } from '../node_modules/lit-html/lit-html.js'
import { get } from './api.js';
import { url } from './requestURL.js';
import { userData } from './util.js';

export async function teamDetailsPage(ctx) {

    const id = ctx.params.id;

    const teamData = await get(`${url.base}/data/teams/${id}`);
    const teamMembers = await get(`${url.base}/data/members?where=teamId%3D%22${teamData._id}%22&load=user%3D_ownerId%3Ausers`)
    const count = teamMembers.length;

    const teamDetailsTemplate = () => html`
                            <section id="team-home">
                                <article class="layout">
                                    <img src="${teamData.logoUrl}" class="team-logo left-col">
                                    <div class="tm-preview">
                                        <h2>${teamData.name}t</h2>
                                        <p>${teamData.description}</p>
                                        <span class="details">${count} Members</span>
                                        <div>
                                            <a href="#" class="action">Edit team</a>
                                            <a href="#" class="action">Join team</a>
                                            <a href="#" class="action invert">Leave team</a>
                                            Membership pending. <a href="#">Cancel request</a>
                                        </div>
                                    </div>
                                    <div class="pad-large">
                                        <h3>Members</h3>
                                        <ul class="tm-members">
                                            <li>My Username</li>
                                            <li>James<a href="#" class="tm-control action">Remove from team</a></li>
                                            <li>Meowth<a href="#" class="tm-control action">Remove from team</a></li>
                                        </ul>
                                    </div>
                                    <div class="pad-large">
                                        <h3>Membership Requests</h3>
                                        <ul class="tm-members">
                                            <li>John<a href="#" class="tm-control action">Approve</a><a href="#"
                                                    class="tm-control action">Decline</a></li>
                                            <li>Preya<a href="#" class="tm-control action">Approve</a><a href="#"
                                                    class="tm-control action">Decline</a></li>
                                        </ul>
                                    </div>
                                </article>
                            </section>
    `

    ctx.render(teamDetailsTemplate(), ctx.main)
}

