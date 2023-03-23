import { html } from "../../node_modules/lit-html/lit-html.js";
import { get, put } from "../data/api.js";
import { createSubmitHandler } from "../data/util.js";

const editTemplate = (data, onEdit) => html`

<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form class="edit-form" @submit=${onEdit}>
            <input type="text" .value=${data.brand} name="brand" id="shoe-brand" placeholder="Brand" />
            <input type="text" .value=${data.model} name="model" id="shoe-model" placeholder="Model" />
            <input type="text" .value=${data.imageUrl} name="imageUrl" id="shoe-img" placeholder="Image url" />
            <input type="text" .value=${data.release} name="release" id="shoe-release" placeholder="Release date" />
            <input type="text" .value=${data.designer} name="designer" id="shoe-designer" placeholder="Designer" />
            <input type="text" .value=${data.value} name="value" id="shoe-value" placeholder="Value" />
            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const data = await get('/data/shoes/' + id)
    ctx.render(editTemplate(data, createSubmitHandler(onEdit)))

    async function onEdit(editedData, form) {
        if (Object.values(editedData).some(x => x == '')) {
            return alert('All fields are required!')
        }
        const result = await put('/data/shoes/' + id, editedData);
        form.reset();
        ctx.page.redirect('/details/' + id);
    }

}