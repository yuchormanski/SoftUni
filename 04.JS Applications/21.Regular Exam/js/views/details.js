import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';
import { getUserData } from '../data/util.js';


const detailsTemplate = (fruit, user) => html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${fruit.imageUrl} />
            <p id="details-title">${fruit.name}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p>${fruit.description}</p>
                    <p id="nutrition">Nutrition</p>
                   <p id = "details-nutrition">${fruit.nutrition}</p>
              </div>
               <!--Edit and Delete are only for creator-->
               ${user && user._id === fruit._ownerId ? html`
               
                    <div id="action-buttons">
                        <a href="/edit/${fruit._id}" id="edit-btn">Edit</a>
                        <a href="/delete/${fruit._id}" id="delete-btn">Delete</a>
                    </div>
               `: null}

            </div>
        </div>
      </section>

`;

export async function detailsPage(ctx){
    const id = ctx.params.id;
    const user = getUserData();
    const fruit = await get('/data/fruits/' + id)
    ctx.render(detailsTemplate(fruit, user))
}