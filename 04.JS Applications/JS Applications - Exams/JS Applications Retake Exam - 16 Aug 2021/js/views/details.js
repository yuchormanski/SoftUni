import { html } from '../../node_modules/lit-html/lit-html.js';
import { del, get, post } from '../data/api.js';
import { createSubmitHandler, getUserData } from '../data/util.js';

const detailsTemplate = (game, userData, comments, deleteAction, onComment) => html`
        <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">
        
                <div class="game-header">
                    <img class="game-img" src=${game.imageUrl} />
                    <h1>${game.title}</h1>
                    <span class="levels">MaxLevel: ${game.maxLevel}</span>
                    <p class="type">${game.category}</p>
                </div>
        
                <p class="text"> ${game.summary} </p>
    
                <div class="details-comments">
                    <h2>Comments:</h2>
                    ${comments.length > 0 ? 
                    html `
                        <ul>
                            ${comments.map(z => html`
                                <li class="comment">
                                    <p>Content: ${z.comment}</p>
                                </li>
                            `)}
                        </ul>
                        `:
                    html`
                    <p class="no-comment">No comments.</p>`}
                </div>

                ${userData ? html`
                    ${userData._id === game._ownerId ? 
                        html`
                            <div class="buttons">
                                <a href="/edit/${game._id}" class="button">Edit</a>
                                <a href="javascript:void(0)" class="button" @click=${deleteAction}>Delete</a>
                            </div>
                        ` :
                        html`
                            <article class="create-comment">
                                <label>Add new comment:</label>
                                <form class="form" @submit=${onComment}>
                                    <textarea name="comment" placeholder="Comment......"></textarea>
                                    <input class="btn submit" type="submit" value="Add Comment">
                                </form>
                            </article>`}
                `: null}
                
            </div> 
        </section>
`;

export async function detailsPage(ctx) {
    const userData = getUserData();
    const id = ctx.params.id;
    const game = await get('/data/games/' + id);
    const comments = await get(`/data/comments?where=gameId%3D%22${id}%22`);


    ctx.render(detailsTemplate(game, userData, comments, deleteAction, createSubmitHandler(onComment)));

    async function deleteAction(){
        if(confirm('Are you sure?')){
            await del('/data/games/' + id);
            ctx.page.redirect('/');
        }
    }

    async function onComment({comment }, form){
        if(comment == '') return alert('Can\'t post empty comment!');
        const commentData = await post('/data/comments',{  gameId:id, comment });
        console.log(commentData);
        form.reset();
        ctx.page.redirect('/details/' + id);
    }
}
