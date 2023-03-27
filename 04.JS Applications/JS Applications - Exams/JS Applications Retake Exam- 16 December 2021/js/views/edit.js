import { html } from '../../node_modules/lit-html/lit-html.js';
import { get, put } from '../data/api.js';
import { createSubmitHandler } from '../data/util.js';


const editTemplate = (data, onEdit) => html`
        <section id="editPage">
            <form class="theater-form" @submit=${onEdit}>
                <h1>Edit Theater</h1>
                <div>
                    <label for="title">Title:</label>
                    <input id="title" name="title" type="text" placeholder="Theater name" .value=${data.title}>
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input id="date" name="date" type="text" placeholder="Month Day, Year" .value=${data.date}>
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input id="author" name="author" type="text" placeholder="Author" .value=${data.author}>
                </div>
                <div>
                    <label for="description">Theater Description:</label>
                    <textarea id="description" name="description" placeholder="Description" .value=${data.description}></textarea>
                </div>
                <div>
                    <label for="imageUrl">Image url:</label>
                    <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" .value=${data.imageUrl}>
                </div>
                <button class="btn" type="submit">Submit</button>
            </form>
        </section>
`;

export async function editPage(ctx) {

    const id = ctx.params.id;
    const data = await get('/data/theaters/' + id);
    ctx.render(editTemplate(data, createSubmitHandler(onEdit)));

    async function onEdit(data, form) {
        if(Object.values(data).some(x => x=='')) return alert("All fields are required!");
        await put('/data/theaters/' + id, data);
        form.reset();
        ctx.page.redirect('/details/' + id);
    }
}