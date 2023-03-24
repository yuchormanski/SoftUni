import { html } from '../../node_modules/lit-html/lit-html.js'
import { editData, getDataById } from '../data.js';
import { url } from '../requestURL.js';
import { createSubmitHandler } from '../util.js';


export async function editPage(ctx) {
  const id = ctx.params.id;
  // console.log(id);
  const data = await getDataById(url.getById, id);

  const editTemplate = (toSubmit) => html`
  
                <section id="edit">
                  <div class="form">
                    <h2>Edit Album</h2>
                    <form class="edit-form" @submit=${toSubmit}>
                      <input type="text" .value=${data.singer} name="singer" id="album-singer" placeholder="Singer/Band" />
                      <input type="text" .value=${data.album} name="album" id="album-album" placeholder="Album" />
                      <input type="text" .value=${data.imageUrl} name="imageUrl" id="album-img" placeholder="Image url" />
                      <input type="text" .value=${data.release} name="release" id="album-release" placeholder="Release date" />
                      <input type="text" .value=${data.label} name="label" id="album-label" placeholder="Label" />
                      <input type="text" .value=${data.sales} name="sales" id="album-sales" placeholder="Sales" />
                
                      <button type="submit">post</button>
                    </form>
                  </div>
                </section>
  
  `

  ctx.render(editTemplate(createSubmitHandler(toSubmit)))

  async function toSubmit(data, form) {
    if (Object.values(data).some(x => x == '')) {
      return alert('All fields are required!')
    }
    const edited = editData(url.put, id, data)
    ctx.page.redirect(`/details/${id}`)
  }
}
