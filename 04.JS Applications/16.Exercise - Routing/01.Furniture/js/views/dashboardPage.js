import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../api.js';
import { url } from '../requestURL.js';
import { isUserLogged } from '../util.js';


export async function dashboardPage(ctx) {

    const userData = isUserLogged();
    if(userData === undefined){
        document.querySelector('#user').style.display = 'none';
        document.querySelector('#guest').style.display = '';
    }else {
        document.querySelector('#user').style.display = '';
        document.querySelector('#guest').style.display = 'none';
    }

    const data = await get(url.get);

    const dashTemplate = () => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
        </div>
    </div>
    <div class="row space-top">
        ${data.map(x => html`
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="${x.img}" />
                    <p>Description here</p>
                    <footer>
                        <p>Price: <span>${x.price} $</span></p>
                    </footer>
                    <div>
                        <a href="/detail/${x._id}" id="${x._id}" class="btn btn-info">Details</a>
                    </div>
                </div>
            </div>
        </div>
        `)}
    
    </div>
`
    ctx.render(dashTemplate(), ctx.container)

}