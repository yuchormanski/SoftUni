import { html } from '../../node_modules/lit-html/lit-html.js'
import { get, post } from '../data/api.js';
import { getUserData } from '../data/util.js';

// const detailsTemplate = (x, userData, donations,donateAction) => html`
const detailsTemplate = (x, userData) => html`
        <section id="details-page">
            <h1 class="title">Post Details</h1>
        
            <div id="container">
                <div id="details">
                    <div class="image-wrapper">
                        <img src=${x.imageUrl} alt="Material Image" class="post-image">
                    </div>
                    <div class="info">
                        <h2 class="title post-title">${x.title}</h2>
                        <p class="post-description">Description: ${x.description}</p>
                        <p class="post-address">Address: ${x.address}</p>
                        <p class="post-number">Phone number: ${x.phone}</p>
                        <!-- <p class="donate-Item">Donate Materials: ${donations}</p> -->
                        <p class="donate-Item">Donate Materials: 0</p>
        
                        ${userData ? 
                        html`
                        <!--Edit and Delete are only for creator-->
                            <div class="btns">
                                ${userData._id === x._ownerId ? html`
                                    <a href="/edit/${x._id}" class="edit-btn btn">Edit</a>
                                    <a href="/delete/${x._id}" class="delete-btn btn">Delete</a>
                                `: html`
                                    <!--Bonus - Only for logged-in users ( not authors )-->
                                    <!-- <a href="javascript:void(0)" class="donate-btn btn" @click=${() => donateAction(x._id)}>Donate</a> -->
                                    <a href="javascript:void(0)" class="donate-btn btn" }>Donate</a>
                                `}
                            </div>`
                        :null}
                        
        
                    </div>
                </div>
            </div>
        </section>
`;

export async function detailsPage(ctx) {
    const userData = getUserData();
    const id = ctx.params.id;
    const data = await get('/data/posts/' + id);
    const donations = await get(`/data/donations?where=postId%3D%22${id}%22&distinct=_ownerId&count`);
    // ctx.render(detailsTemplate(data, userData, donations, donateAction))
    ctx.render(detailsTemplate(data, userData))

    
    // async function donateAction(postId, e){
    //     const isDonated = await get(`/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userData._id}%22&count`);
    //     if(isDonated === 0){
    //         const response = await post('/data/donations', {postId});
    //     }else {
    //         document.querySelector('.donate-btn').style.display = 'none';
    //     }
    // ctx.page.redirect(`/details/${postId}`)
    // }
}


