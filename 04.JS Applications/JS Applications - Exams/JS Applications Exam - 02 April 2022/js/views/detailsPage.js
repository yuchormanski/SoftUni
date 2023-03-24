import { html } from '../../node_modules/lit-html/lit-html.js';
import { get, post } from '../data/api.js';
import { getUserData } from '../data/util.js';


const detailsTemplate = (data, userData, donateAction, donation) => html`
        <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src=${data.image}>
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${data.name}</h1>
                        <h3>Breed: ${data.breed}</h3>
                        <h4>Age: ${data.age}</h4>
                        <h4>Weight: ${data.weight}</h4>
                        <h4 class="donation">Donation: ${donation}$</h4>
                    </div>
                    <!-- if there is no registered user, do not display div-->
                    ${userData ?
                    html`
                    <div class="actionBtn">
                        ${userData._id === data._ownerId ?
                    html`
                        <!-- Only for registered user and creator of the pets-->
                        <a href="/edit/${data._id}" class="edit">Edit</a>
                        <a href="/delete/${data._id}" class="remove">Delete</a>` : html`
                        <!--(Bonus Part) Only for no creator and user-->
                        ${userData.donations === 0 ? html`
                        <a href="javascript:void(0)" class="donate" @click=${donateAction}>Donate</a>` : null}
                        `}
                    </div>`: null}
        
                </div>
            </div>
        </section>
`;

export async function detailsPage(ctx) {
    const userData = getUserData();
    const id = ctx.params.id;
    const data = await get('/data/pets/' + id);
    const totalDonations = await get(`/data/donation?where=petId%3D%22${id}%22&distinct=_ownerId&count`);
    let donation = Number(totalDonations) * 100;
    if (userData) {
        userData.donations = await get(`/data/donation?where=petId%3D%22${id}%22%20and%20_ownerId%3D%22${userData._id}%22&count`);
    }
    ctx.render(detailsTemplate(data, userData, donateAction, donation));

    async function donateAction() {
        const petId = id;
        await post('/data/donation', { petId });
        ctx.page.redirect(`/details/${id}`);
    }
}