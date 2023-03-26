import { html } from '../../node_modules/lit-html/lit-html.js';
import { get, put } from '../data/api.js';
import { createSubmitHandler } from '../data/util.js';

const editTemplate = (data, onEdit) => html`
    <section id="edit-movie" class="view-section">
      <form class="text-center border border-light p-5" action="#" method="" @submit=${onEdit}>
        <h1>Edit Movie</h1>
        <div class="form-group">
          <label for="title">Movie Title</label>
          <input id="title" type="text" class="form-control" placeholder="Movie Title" .value=${data.title} name="title" />
        </div>
        <div class="form-group">
          <label for="description">Movie Description</label>
          <textarea class="form-control" placeholder="Movie Description..." name="description" .value=${data.description}></textarea>
        </div>
        <div class="form-group">
          <label for="imageUrl">Image url</label>
          <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" .value=${data.img} name="img" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </section>
`;

export async function editPage(ctx){
    const id = ctx.params.id;
    const data = await get('/data/movies/' + id);
    ctx.render(editTemplate(data, createSubmitHandler(onEdit)));

    async function onEdit(data , form){
        if(Object.values(data).some(x => x=='')) return alert('Fill all fields!');
        await put('/data/movies/' +id, data);
        form.reset();
        ctx.page.redirect('/');
    }
}