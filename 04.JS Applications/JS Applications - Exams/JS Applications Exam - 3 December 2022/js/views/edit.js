import { html } from '../../node_modules/lit-html/lit-html.js'


export function editPage(ctx) {

  const editTemplate = () => html`
  
                <section id="edit">
                  <div class="form">
                    <h2>Edit Album</h2>
                    <form class="edit-form">
                      <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
                      <input type="text" name="album" id="album-album" placeholder="Album" />
                      <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
                      <input type="text" name="release" id="album-release" placeholder="Release date" />
                      <input type="text" name="label" id="album-label" placeholder="Label" />
                      <input type="text" name="sales" id="album-sales" placeholder="Sales" />
                
                      <button type="submit">post</button>
                    </form>
                  </div>
                </section>
  
  `
  ctx.render(editPage())
}
