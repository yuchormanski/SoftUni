import { html } from '../../node_modules/lit-html/lit-html.js';
import { post } from '../data/api.js';
import { createSubmitHandler } from '../data/util.js';
import { host } from '../data/api.js';



//TODO: Replace with actual content
export const addItemTemplate = (onSubmit) => html`
        <section id="create">
            <div class="form">
                <h2>Add item</h2>
                <form class="create-form" @submit=${onSubmit}>
                    <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
                    <input type="text" name="model" id="shoe-model" placeholder="Model" />
                    <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
                    <input type="text" name="release" id="shoe-release" placeholder="Release date" />
                    <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
                    <input type="text" name="value" id="shoe-value" placeholder="Value" />        
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
`;

export function addItemPage(ctx) {
    ctx.render(addItemTemplate(createSubmitHandler(onSubmit)));

    async function onSubmit(data, form){

        if(Object.values(data).some(x => x=='')){
            return alert('All fields are required!')
        }

        const result = await post('/data/shoes', data);
        form.reset();
        ctx.page.redirect('/dashboard')
    }
}

