import { html } from '../../node_modules/lit-html/lit-html.js'
import { post } from '../api.js';
import { context } from '../app.js';
import { url } from '../requestURL.js';
import { createSubmitHandler } from '../util.js'


export function createPage(ctx) {

  const createTemplate = () => html`
  
  <section id="create">
    <div class="form">
      <h2>Add Album</h2>
      <form class="create-form" @submit=${createSubmitHandler(toSubmit)}>
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
  ctx.render(createTemplate())
}

async function toSubmit(data, form) {
  const { singer, album, imageUrl, release, label, sales } = data;
  console.log(data);
  try {
    if (singer == ''
      || album == ''
      || imageUrl == ''
      || release == ''
      || label == ''
      || sales == '') {
      throw new Error('All fields are required!');
    }

    const newAlbum = { singer, album, imageUrl, release, label, sales }

    const response = post(url.post, newAlbum);
    context.page.redirect('/dashboard');

  } catch (error) {
    alert(error)
  }
}

