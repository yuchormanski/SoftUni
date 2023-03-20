import { html } from '../../node_modules/lit-html/lit-html.js'


export function detailsPage(ctx) {

  const detailsTemplate = () => html`
  
  <section id="details">
    <div id="details-wrapper">
      <p id="details-title">Album Details</p>
      <div id="img-wrapper">
        <img src="./images/BackinBlack.jpeg" alt="example1" />
      </div>
      <div id="info-wrapper">
        <p><strong>Band:</strong><span id="details-singer">AC/DC</span></p>
        <p>
          <strong>Album name:</strong><span id="details-album">Back in Black</span>
        </p>
        <p><strong>Release date:</strong><span id="details-release">1980</span></p>
        <p><strong>Label:</strong><span id="details-label">Epic</span></p>
        <p><strong>Sales:</strong><span id="details-sales">26 million (50 million claimed)</span></p>
      </div>
      <div id="likes">Likes: <span id="likes-count">0</span></div>
  
      <!--Edit and Delete are only for creator-->
      <div id="action-buttons">
        <a href="" id="like-btn">Like</a>
        <a href="" id="edit-btn">Edit</a>
        <a href="" id="delete-btn">Delete</a>
      </div>
    </div>
  </section>
  `
  ctx.render(detailsTemplate());

}



