import { html } from '../../node_modules/lit-html/lit-html.js';
import { get, put } from '../data/api.js';
import { createSubmitHandler } from '../data/util.js';


const editTemplate = (data, onEdit) => html`
        <section id="edit-page" class="auth">
            <form id="edit" @submit=${onEdit}>
                <div class="container">    
                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" .value=${data.title}>
        
                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" .value=${data.category}>
        
                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${data.maxLevel}>
        
                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" .value=${data.imageUrl}>
        
                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary" .value=${data.summary}></textarea>
                    <input class="btn submit" type="submit" value="Edit Game"> 
                </div>
            </form>
        </section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const data = await get('/data/games/' + id);

    ctx.render(editTemplate(data, createSubmitHandler(onEdit)));

    async function onEdit(data, form) {
        if (Object.values(data).some(x => x == '')) {
            return alert('All fields are required!')
        }
        const response = await put('/data/games/' + id, data);
        form.reset();
        ctx.page.redirect('/details/'+ id);
    }
}