import { html } from '../../node_modules/lit-html/lit-html.js';
import { get, put } from '../data/api.js';
import { createSubmitHandler } from '../data/util.js';

const editTemplate = (data, onEdit) => html`
        <section id="editPage">
            <form class="editForm" @submit=${onEdit}>
                <img src=${data.image}>
                <div>
                    <h2>Edit PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" .value=${data.name}>
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" .value=${data.breed}>
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" .value=${data.age}>
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" .value=${data.weight}>
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" .value=${data.image}>
                    </div>
                    <button class="btn" type="submit">Edit Pet</button>
                </div>
            </form>
        </section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const data = await get('/data/pets/' + id);
    ctx.render(editTemplate(data, createSubmitHandler(onEdit)));
    
    async function onEdit(received, form) {
        if (Object.values(received).some(x => x == '')) {
            return alert('All fields are required!');
        };
        await put('/data/pets/' + id, received);
        form.reset();
        ctx.page.redirect('/');
    }
}