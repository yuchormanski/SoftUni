import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';
import { getUserData } from '../data/util.js';


const detailsTemplate = (userData, data) => html`
        <section id="detailsPage">
            <div class="wrapper">
                <div class="albumCover">
                    <img src=${data.imgUrl}>
                </div>
                <div class="albumInfo">
                    <div class="albumText">
        
                        <h1>Name: ${data.name}</h1>
                        <h3>Artist: ${data.artist}</h3>
                        <h4>Genre: ${data.genre}</h4>
                        <h4>Price: $${data.price}</h4>
                        <h4>Date: ${data.releaseDate}</h4>
                        <p>Description: ${data.description}</p>
                    </div>
                    ${userData && userData._id === data._ownerId ? html`
                    <!-- Only for registered user and creator of the album-->
                    <div class="actionBtn">
                        <a href="/edit/${data._id}" class="edit">Edit</a>
                        <a href="/delete/${data._id}" class="remove">Delete</a>
                    </div>` :
                     null}
                    
                </div>
            </div>
        </section>
`;

export async function detailsPage(ctx) {
    const userData = getUserData();
    const id = ctx.params.id;
    const data = await get('/data/albums/' + id);
    ctx.render(detailsTemplate(userData, data));
}