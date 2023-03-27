import { html } from '../../node_modules/lit-html/lit-html.js';
import { del, get, post } from '../data/api.js';
import { getUserData } from '../data/util.js';


const detailsTemplate = (data, user, deleteAction, likeAction, likes, isLiked) => html`
        <section id="detailsPage">
            <div id="detailsBox">
                <div class="detailsInfo">
                    <h1>Title: ${data.title}</h1>
                    <div>
                        <img src=${data.imageUrl} />
                    </div>
                </div>
        
                <div class="details">
                    <h3>Theater Description</h3>
                    <p>${data.description}</p>
                    <h4>Date: ${data.date}</h4>
                    <h4>Author: ${data.author}</h4>

                    ${user ? 
                    html`
                        <div class="buttons">
                            ${user._id === data._ownerId ?
                            html`
                                <a class="btn-delete" href="javascript:void(0)" @click=${deleteAction}>Delete</a>
                                <a class="btn-edit" href="/edit/${data._id}">Edit</a>
                            `: html`
                                ${isLiked === 0 ?html`<a class="btn-like" href="javascript:void(0)" @click=${likeAction}>Like</a>`:null}                                   
                            `}
                        </div>
                    `:null}
                    
                    <p class="likes">Likes: ${likes}</p>
                </div>
            </div>
        </section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const user = getUserData();
    const data = await get('/data/theaters/' + id);
    const likes = await get(`/data/likes?where=theaterId%3D%22${id}%22&distinct=_ownerId&count`);
    let isLiked = 1;
    if(user) {
        isLiked = await get(`/data/likes?where=theaterId%3D%22${id}%22%20and%20_ownerId%3D%22${user._id}%22&count`);
    }
    ctx.render(detailsTemplate(data, user, deleteAction, likeAction, likes, isLiked));

    async function deleteAction(){
        await del('/data/theaters/' + id);
        ctx.page.redirect('/profile');
    }

    async function likeAction(){
        const theaterId = id;
        const likeIt = await post('/data/likes', { theaterId });
        ctx.page.redirect('/details/' + id);
    }
}
