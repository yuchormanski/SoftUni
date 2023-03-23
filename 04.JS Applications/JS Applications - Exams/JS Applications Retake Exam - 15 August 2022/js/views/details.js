import { get } from '../data/api.js';
import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../data/util.js';


const detailsTemplate = (data, userData) => html`
            <section id="details">
                <div id="details-wrapper">
                    <p id="details-title">Shoe Details</p>
                    <div id="img-wrapper">
                        <img src="${data.imageUrl}" />
                    </div>
                    <div id="info-wrapper">
                        <p>Brand: <span id="details-brand">${data.brand}</span></p>
                        <p>
                            Model: <span id="details-model">${data.model}</span>
                        </p>
                        <p>Release date: <span id="details-release">${data.release}</span></p>
                        <p>Designer: <span id="details-designer">${data.designer}</span></p>
                        <p>Value: <span id="details-value">${data.value}</span></p>
                    </div>
            
                    <!--Edit and Delete are only for creator-->
            
            
                    ${userData && userData._id == data._ownerId ? html`
                    <div id="action-buttons">
                        <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                        <a href="/delete/${data._id}" id="delete-btn">Delete</a>
                    </div>
                    `: null}
                </div>
            </section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const userData = getUserData();
    const data = await get('/data/shoes/' + id);
    ctx.render(detailsTemplate(data, userData));
}

