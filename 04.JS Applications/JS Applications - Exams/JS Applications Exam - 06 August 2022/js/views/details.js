import { html } from '../../node_modules/lit-html/lit-html.js'
import { del, get } from '../data/api.js';
import { getUserData } from '../data/util.js';

const detailsTemplate = (data, userData, deleteAction) => html`
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src=${data.imageUrl} alt="example1" />
                <p id="details-title">${data.title}</p>
                <p id="details-category">
                    Category: <span id="categories">${data.category}</span>
                </p>
                <p id="details-salary">
                    Salary: <span id="salary-number">${data.salary}</span>
                </p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <h4>Description</h4>
                        <span>${data.description}</span>
                    </div>
                    <div id="details-requirements">
                        <h4>Requirements</h4>
                        <span>${data.requirements}</span>
                    </div>
                </div>
                <p>Applications: <strong id="applications">1</strong></p>
        
                <div id="action-buttons">
                    <!--Edit and Delete are only for creator-->
                    ${userData && userData._id === data._ownerId ? html`
                    <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                    <a href="javascript:void(0)" id="delete-btn" @click=${deleteAction}>Delete</a>` : html`
                    <!--Bonus - Only for logged-in users ( not authors )-->
                    <a href="" id="apply-btn">Apply</a>`}
        
        
        
                </div>
            </div>
        </section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const userData = getUserData();
    const data = await get('/data/offers/' + id)
    ctx.render(detailsTemplate(data, userData, deleteAction))

    async function deleteAction() {
        if (confirm('Are you sure???')) {
            del('/data/offers/' + id);
            ctx.page.redirect('/dashboard')
        }
    }
}