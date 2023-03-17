import { html } from '../../node_modules/lit-html/lit-html.js';
import { url } from '../requestURL.js';
import { get } from '../api.js';
import { isUserLogged } from '../util.js';

export async function detailPage(ctx) {


    const data = await get(`${url.get}/${ctx.params.id}`)

    const detailTemplate = () => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src="${data.img.slice(1)}" />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${data.make}</span></p>
                <p>Model: <span>${data.model}</span></p>
                <p>Year: <span>${data.year}</span></p>
                <p>Description: <span>${data.description}</span></p>
                <p>Price: <span>${data.price}</span></p>
                <p>Material: <span>${data.material}</span></p>
                <div class="logged">
                    <a href="/edit/${data._id}" class="btn btn-info" @click=${editItem}>Edit</a>
                    <a href="" class="btn btn-red">Delete</a>
                </div>
            </div>
        </div>
`

    ctx.render(detailTemplate(), ctx.container)

    const userData = isUserLogged();
    if (!userData) {
        document.querySelectorAll('.btn').forEach(btn => btn.style.display = 'none');
    } else {
        document.querySelectorAll('.btn').forEach(btn => btn.style.display = '');
        // document.querySelector('div.btn a[class="btn-info"]').addEventListener('click', editItem)
    }

    function editItem() {
        // console.log(id);
        if (userData !== undefined) {
            ctx.page.redirect('/editPage/' + ctx.params.id)
        }

    }

}