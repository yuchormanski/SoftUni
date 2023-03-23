import { html } from '../../node_modules/lit-html/lit-html.js'
import { del, get, post } from '../data/api.js';
import { getUserData } from '../data/util.js';

const detailsTemplate = (data, userData, deleteAction, apply,applied) => html`
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
                <p>Applications: <strong id="applications">${Object.values(applied).length}</strong></p>
        
                <div id="action-buttons">
                    <!--Edit and Delete are only for creator-->
                    ${userData ? html`
                        ${userData._id === data._ownerId ? 
                            html`
                                <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                                <a href="javascript:void(0)" id="delete-btn" @click=${deleteAction}>Delete</a>` : 
                            html`
                                <a href="javascript:void(0)" id="apply-btn" @click=${apply}>Apply</a>`}`
                        : null}
                </div>
            </div>
        </section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const userData = getUserData();
    const data = await get('/data/offers/' + id);
    // let applied;
    const applied = await get(`/data/applications?where=offerId%3D%22${data._id}%22&distinct=_ownerId&count`);
    ctx.render(detailsTemplate(data, userData, deleteAction, apply,applied))
    
    async function deleteAction() {
        if (confirm('Are you sure???')) {
            del('/data/offers/' + id);
            ctx.page.redirect('/dashboard')
        }
    }
    
    async function apply(e){
        const application = await get(`/data/applications?where=offerId%3D%22${ctx.params.id}%22%20and%20_ownerId%3D%22${userData._id}%22&count`);
        if(Object.values(application) > 0){
            e.target.style,display = 'none';
        }else{
            await post('/data/applications',{ offerId: ctx.params.id });
        }
        

    }
}