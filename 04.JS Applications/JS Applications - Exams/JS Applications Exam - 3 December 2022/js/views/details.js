import { html } from '../../node_modules/lit-html/lit-html.js'
import { getData, getDataById, postData } from '../data.js';
import { url } from '../requestURL.js';
import { deleteAlbum } from './deleteAction.js';


export async function detailsPage(ctx) {

  const id = ctx.params.id;
  const data = await getDataById('http://localhost:3030/data/albums', id)
  const { album, imageUrl, label, release, sales, singer, _createdOn, _id, _ownerId } = data;
  const likesUrl = `/data/likes?where=albumId%3D%22${id}%22&distinct=_ownerId&count`
  const likes = await getData(`${url.getLikes}${likesUrl}`)
  console.log(likes);
  // console.log(ctx.userData);
  const detailsTemplate = (data) => html`
  
  
  <section id="details">
    <div id="details-wrapper">
      <p id="details-title">Album Details</p>
      <div id="img-wrapper">
        <img src="${imageUrl}" alt="example1" />
      </div>
      <div id="info-wrapper">
        <p><strong>Band:</strong><span id="details-singer">${singer}</span></p>
        <p>
          <strong>Album name:</strong><span id="details-album">${album}</span>
        </p>
        <p><strong>Release date:</strong><span id="details-release">${release}</span></p>
        <p><strong>Label:</strong><span id="details-label">${label}</span></p>
        <p><strong>Sales:</strong><span id="details-sales">${sales}</span></p>
      </div>
      <div id="likes">Likes: <span id="likes-count">${likes}</span></div>
  
      <!--Edit and Delete are only for creator-->
      ${ctx.userData != null ? navVisibility() : null}
  
    </div>
  </section>
  `
  ctx.render(detailsTemplate());

  function navVisibility() {
    let res;
    if (ctx.userData._id === _ownerId) {
      res = html`
              <div id="action-buttons">
                <a href="/edit" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${deleteAlbum}>Delete</a>
              </div>
            `
    } else if (ctx.userData != null) {
      res = html`
    <div id="action-buttons">
      <a href="javascript:void(0)" id="like-btn" @click=${() => likeAlbum(id)}>Like</a>
    </div>
  `
    }
    return res;
  }
}

async function likeAlbum(id){
  const albumId = id;
  const likeBtn = document.getElementById('like-btn')
  const likeIt = postData('http://localhost:3030' + '/data/likes', {albumId});
  likeBtn.style.display = 'none'
  // detailsPage();
}