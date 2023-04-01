import { html } from '../../node_modules/lit-html/lit-html.js';
import { post } from '../data/api.js';
import { createSubmitHandler } from '../data/util.js';

const addTemplate = (onAdd) => html`
        <section id="create">
          <div class="form">
            <h2>Add Fruit</h2>
            <form class="create-form" @submit=${onAdd}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image"
              />
              <textarea
              id="fruit-description"
              name="description"
              placeholder="Description"
              rows="10"
              cols="50"
            ></textarea>
            <textarea
              id="fruit-nutrition"
              name="nutrition"
              placeholder="Nutrition"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Fruit</button>
            </form>
          </div>
        </section>
`;

export function addFruitPage(ctx) {
    ctx.render(addTemplate(createSubmitHandler(onAdd)));

    async function onAdd(data, form) {
        if (Object.values(data).some(x => x == '')) return alert('All fields are required!');

        await post('/data/fruits', data);
        form.reset();
        ctx.page.redirect('/dashboard');
    }
}