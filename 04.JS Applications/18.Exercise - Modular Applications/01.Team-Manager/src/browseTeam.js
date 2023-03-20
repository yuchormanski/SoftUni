import { html } from '../node_modules/lit-html/lit-html.js';
import { get } from './api.js';
import { url } from './requestURL.js';
import { getUserData } from './util.js';


export async function browseTeamPage(ctx) {
    let count;

    const allTeams = await get(url.get);
    async function members(id) {
        const teamMembers  = await get(`${url.base}/data/members?where=teamId%3D%22${id}%22&load=user%3D_ownerId%3Ausers`)
        console.log(teamMembers.length);
        return await teamMembers.length;
    }


    const browseTeamTemplate = () => html`

        <section id="browse">
        
            <article class="pad-med">
                <h1>Team Browser</h1>
            </article>
        
            ${getUserData() !== null? html`
            <article class="layout narrow">
                <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
            </article>
            `
             : null
            }
                
        
            ${allTeams.map(x => html`
            ${count = members(x._id)}
            <article class="layout">
                <img src="${x.logoUrl}" class="team-logo left-col">
                <div class="tm-preview">
                    <h2>${x.name}</h2>
                    <p>${x.description}</p>
                    <span class="details">${count} Members</span>
                    <div><a href="/details/${x._id}" class="action">See details</a></div>
                </div>
            </article>
        
            `)}
        </section>
`

    ctx.render(browseTeamTemplate(), ctx.main)


}




