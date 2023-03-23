import { html } from '../../node_modules/lit-html/lit-html.js'
import { get, put } from '../data/api.js';
import { createSubmitHandler } from '../data/util.js';

const editTemplate = (data, onEdit) => html` 
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form class="edit-form" @submit=${onEdit}>
            <input type="text" .value=${data.title} name="title" id="job-title" placeholder="Title">
            <input type="text" .value=${data.imageUrl} name="imageUrl" id="job-logo" placeholder="Company logo url">
            <input type="text" .value=${data.category} name="category" id="job-category" placeholder="Category">
            <textarea id="job-description" .value=${data.description} name="description" placeholder="Description"
                rows="4" cols="50"></textarea>
            <textarea id="job-requirements" .value=${data.requirements} name="requirements" placeholder="Requirements"
                rows="4" cols="50"></textarea>
            <input type="text" .value=${data.salary} name="salary" id="job-salary" placeholder="Salary">

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const data = await get('/data/offers/' + id);
    ctx.render(editTemplate(data, createSubmitHandler(onEdit)));

    async function onEdit(receivedData, form) {
        if (Object.values(receivedData).some(x => x == '')) return alert('All fields are required!');
        const response = put('/data/offers/' + id, receivedData);
        form.reset();
        ctx.page.redirect('/details/' + id);
    }
}