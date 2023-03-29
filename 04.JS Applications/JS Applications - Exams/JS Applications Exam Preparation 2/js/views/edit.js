import { html } from '../../node_modules/lit-html/lit-html.js';
import { get, put } from '../data/api.js';
import { createSubmitHandler } from '../data/util.js';


const editTemplate = (data, onEdit) => html`
        <section id="edit-listing">
            <div class="container">
        
                <form id="edit-form" @submit=${onEdit}>
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit an listing.</p>
                    <hr>
        
                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" .value=${data.brand}>
        
                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" .value=${data.model}>
        
                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" .value=${data.description}>
        
                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" .value=${data.year}>
        
                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${data.imageUrl}>
        
                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" .value=${data.price}>
        
                    <hr>
                    <input type="submit" class="registerbtn" value="Edit Listing">
                </form>
            </div>
        </section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const data = await get('/data/cars/' + id);
    ctx.render(editTemplate(data, createSubmitHandler(onEdit)));

    async function onEdit(data, form) {
        if (Object.values(data).some(x => x == '')) return alert('Fill all fields!');
        data.price = Number(data.price);
        data.year = Number(data.year);
        if(data.year <= 0 || data.price <= 0) return alert('Must be a positive number!');
        await put('/data/cars/' + id, data);
         ctx.page.redirect('/details/' + id);
    }
}