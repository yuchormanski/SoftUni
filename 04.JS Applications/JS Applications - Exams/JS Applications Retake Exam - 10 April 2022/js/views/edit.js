import { html } from '../../node_modules/lit-html/lit-html.js'
import { get, put } from '../data/api.js';
import { createSubmitHandler } from '../data/util.js';

const editTemplate = (data, onEdit) => html`

<section id="edit-page" class="auth">
    <form id="edit" @submit=${onEdit}>
        <h1 class="title">Edit Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title" .value=${data.title}>
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description" .value=${data.description}>
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl" .value=${data.imageUrl}>
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address" .value=${data.address}>
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone" .value=${data.phone}>
        </article>

        <input type="submit" class="btn submit" value="Edit Post">
    </form>
</section>

`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const data = await get('/data/posts/' + id);
    ctx.render(editTemplate(data, createSubmitHandler(onEdit)))
    async function onEdit(data, form) {
        if (Object.values(data).some(x => x == '')) return alert('All fields are required!');
        await put('/data/posts/' + id, data)
        form.reset();
        ctx.page.redirect(`/details/${id}`)
    }
}