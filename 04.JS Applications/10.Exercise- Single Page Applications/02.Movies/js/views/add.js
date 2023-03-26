import { html } from '../../node_modules/lit-html/lit-html.js';
import { post } from '../data/api.js';
import { createSubmitHandler } from '../data/util.js'

const addTemplate = (onAdd) => html`
    <section id="add-movie" class="view-section">
        <form id="add-movie-form" class="text-center border border-light p-5" action="#" method="" @submit=${onAdd}>
            <h1>Add Movie</h1>
            <div class="form-group">
                <label for="title">Movie Title</label>
                <input id="title" type="text" class="form-control" placeholder="Title" name="title" value="" />
            </div>
            <div class="form-group">
                <label for="description">Movie Description</label>
                <textarea class="form-control" placeholder="Description" name="description"></textarea>
            </div>
            <div class="form-group">
                <label for="imageUrl">Image url</label>
                <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" name="img" value="" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </section>
`;

export async function addPage(ctx) {

    ctx.render(addTemplate(createSubmitHandler(onAdd)))

    async function onAdd(data, form){

        if(Object.values(data).some(x => x=='')) return alert('Fill all fields!');
        await post('/data/movies', data)
        form.reset();
        ctx.page.redirect('/');
    }
}