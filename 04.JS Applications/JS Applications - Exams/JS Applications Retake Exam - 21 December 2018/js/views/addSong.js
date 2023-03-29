import { html } from '../../node_modules/lit-html/lit-html.js';
import { post } from '../data/api.js';
import { createSubmitHandler } from '../data/util.js';

const addTemplate = (onAdd) => html`
        <section id="createSongView">
            <div class="background-spotify">
                <div class="song-container">
                    <h1>Create new song</h1>
                    <form action="#" method="POST" @submit=${onAdd}>
                        <div class="form-group">
                            <label for="title" class="white-labels">Title</label>
                            <input id="title" type="text" name="title" class="form-control" placeholder="Title">
                        </div>
                        <div class="form-group">
                            <label for="artist" class="white-labels">Artist</label>
                            <input id="artist" type="text" name="artist" class="form-control" placeholder="Artist">
                        </div>
                        <div class="form-group">
                            <label for="imageURL" class="white-labels">imageURL</label>
                            <input id="imageURL" type="text" name="imageURL" class="form-control" placeholder="imageURL">
                        </div>
                        <button type="submit" class="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </section>
`;

export async function addSongPage(ctx){

    ctx.render(addTemplate(createSubmitHandler(onAdd)));

    async function onAdd(data, form){
        if(Object.values(data).some(x=> x=='')) return alert('All fields are required!');

        await post('/data/songs', data);
        form.reset();
        ctx.page.redirect('/allSongs');
    }
}