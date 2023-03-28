import { html } from '../../node_modules/lit-html/lit-html.js';
import { del, get, post } from '../data/api.js';
import { getUserData } from '../data/util.js';

const detailsTemplate = (item, userData, deleteItem, dCount, donate, isDonated) => html`
        <section id="details-page">
            <h1 class="title">Post Details</h1>
        
            <div id="container">
                <div id="details">
                    <div class="image-wrapper">
                        <img src=${item.imageUrl} alt="Material Image" class="post-image">
                    </div>
                    <div class="info">
                        <h2 class="title post-title">${item.title}</h2>
                        <p class="post-description">Description: ${item.description}</p>
                        <p class="post-address">Address: ${item.address}</p>
                        <p class="post-number">Phone number: ${item.phone}</p>
                        <p class="donate-Item">Donate Materials: ${dCount}</p>
        
                        ${userData ?
                        html`
                        <div class="btns">
                            ${userData._id === item._ownerId ?
                            html`
                            <a href="/edit/${item._id}" class="edit-btn btn">Edit</a>
                            <a href="javascript:void(0)" class="delete-btn btn" @click=${deleteItem}>Delete</a>
                            `:
                                html`
                                    ${isDonated === 0 ? html`<a href="javascript:void(0)" class="donate-btn btn" @click=${donate}>Donate</a>`:null}
                                `
                        }
                        </div>
        
                        `: null}
                    </div>
                </div>
            </div>
        </section>
`;

export async function detailsPage(ctx) {

    const id = ctx.params.id;
    const userData = getUserData();
    const item = await get('/data/posts/' + id);
    const dCount = await get(`/data/donations?where=postId%3D%22${id}%22&distinct=_ownerId&count`);
    if(userData){
        const isDonated = await get(`/data/donations?where=postId%3D%22${id}%22%20and%20_ownerId%3D%22${userData._id}%22&count`)
        ctx.render(detailsTemplate(item, userData, deleteItem, dCount, donate, isDonated));
    }else {
        ctx.render(detailsTemplate(item, userData, deleteItem, dCount, donate));

    }


    async function deleteItem() {
        if (confirm('Are you sure?!')) {
            await del('/data/posts/' + id);
            ctx.page.redirect('/')
        }
    }

    async function donate() {
        const postId = ctx.params.id;
        await post('/data/donations', { postId })
        ctx.page.redirect('/details/' + id);
    }
}