import { html } from '../../node_modules/lit-html/lit-html.js';
import { get, put } from '../data/api.js';
import { createSubmitHandler } from '../data/util.js';

const editTemplate = (data, onEdit) => html`
        <section class="editPage">
            <form @submit=${onEdit}>
                <fieldset>
                    <legend>Edit Album</legend>

                    <div class="container">
                        <label for="name" class="vhide">Album name</label>
                        <input id="name" name="name" class="name" type="text" .value=${data.name}>

                        <label for="imgUrl" class="vhide">Image Url</label>
                        <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" .value=${data.imgUrl}>

                        <label for="price" class="vhide">Price</label>
                        <input id="price" name="price" class="price" type="text" .value=${data.price}>

                        <label for="releaseDate" class="vhide">Release date</label>
                        <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" .value=${data.releaseDate}>

                        <label for="artist" class="vhide">Artist</label>
                        <input id="artist" name="artist" class="artist" type="text" .value=${data.artist}>

                        <label for="genre" class="vhide">Genre</label>
                        <input id="genre" name="genre" class="genre" type="text" .value=${data.genre}>

                        <label for="description" class="vhide">Description</label>
                        <textarea name="description" class="description" rows="10" cols="10" .value=${data.description}></textarea>

                        <button class="edit-album" type="submit">Edit Album</button>
                    </div>
                </fieldset>
            </form>
        </section>
`;


export async function editPage(ctx) {
    const id =  ctx.params.id;
    const data = await get('/data/albums/' + id);
    ctx.render(editTemplate(data, createSubmitHandler(onEdit)));

    async function onEdit(received, form) {
        if (Object.values(received).some(x => x == '')) return alert('Fill all fields!');
        await put('/data/albums/' + id, received);
        form.reset();
        ctx.page.redirect('/details/' + id)
    }
}