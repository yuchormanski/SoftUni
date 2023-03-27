import { html } from '../../node_modules/lit-html/lit-html.js';
import { post } from '../data/api.js';
import { createSubmitHandler } from '../data/util.js';


const createTemplate = (onCreate) => html`
    <div class="container home wrapper  my-md-5 pl-md-5">
        <div class=" d-md-flex flex-mb-equal ">
            <div class="col-md-6">
                <img class="responsive-ideas create" src="./images/creativity_painted_face.jpg" alt="">
            </div>
            <form class="form-idea col-md-5" action="#/create" method="post" @submit=${onCreate}>
                <div class="text-center mb-4">
                    <h1 class="h3 mb-3 font-weight-normal">Share Your Idea</h1>
                </div>
                <div class="form-label-group">
                    <label for="ideaTitle">Title</label>
                    <input type="text" id="ideaTitle" name="title" class="form-control" placeholder="What is your idea?"
                        required="" autofocus="">
                </div>
                <div class="form-label-group">
                    <label for="ideaDescription">Description</label>
                    <textarea type="text" name="description" class="form-control" placeholder="Description"
                        required=""></textarea>
                </div>
                <div class="form-label-group">
                    <label for="inputURL">Add Image</label>
                    <input type="text" id="inputURL" name="img" class="form-control" placeholder="Image URL"
                        required="">

                </div>
                <button class="btn btn-lg btn-dark btn-block" type="submit">Create</button>

                <p class="mt-5 mb-3 text-muted text-center">© SoftTerest - 2021.</p>
            </form>
        </div>
    </div>
`;

export async function createPage(ctx){

    ctx.render(createTemplate(createSubmitHandler(onCreate)));

    async function onCreate(data, form){
        if(Object.values(data).some(x => x=='')) return alert('Fill all fields!');

        if(data.title.length < 6) return alert('The title should be at least 6 characters long.');
        if(data.description.length < 10) return alert('The description should be at least 10 characters long.');
        if(data.img.length < 5) return alert('The image should be at least 5 characters long.');

        await post('/data/ideas', data);
        form.reset();
        ctx.page.redirect('/dashboard');
    }
}