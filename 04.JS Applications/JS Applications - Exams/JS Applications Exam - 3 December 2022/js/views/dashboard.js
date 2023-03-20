import { html } from '../../node_modules/lit-html/lit-html.js'
import { getData } from '../data.js';
import { url } from '../requestURL.js';


export async function dashboardPage(ctx) {

  const data = await getData(url.get)

  const dashTemplate = () => html`
  <section id="dashboard">
    <h2>Albums</h2>
    <ul class="card-wrapper">                
                ${data.map(x => html`
                <li class="card">
                  <img src="${x.imageUrl}" alt="travis" />
                  <p>
                    <strong>Singer/Band: </strong><span class="singer">${x.singer}</span>
                  </p>
                  <p>
                    <strong>Album name: </strong><span class="album">${x.album}</span>
                  </p>
                  <p><strong>Sales:</strong><span class="sales">${x.sales}</span></p>
                  <a class="details-btn" href="/details/${x._id}">Details</a>
                </li>`   
          )}
    </ul>
  </section>
  `

  const empty = () => html`
            <section id="dashboard">
              <h2>Albums</h2>
              <ul class="card-wrapper"> 
                <h2>There are no albums added yet.</h2>
              </ul>
            </section>
  `;
  if(data !== null){
    ctx.render(dashTemplate());
  } else {
    ctx.render(empty());
  }

}


/* <li class="card">
<img src="./images/beatles-1.jpg" alt="travis" />
<p>
  <strong>Singer/Band: </strong><span class="singer">The Beatles</span>
</p>
<p>
  <strong>Album name: </strong><span class="album">1</span>
</p>
<p><strong>Sales:</strong><span class="sales">26 million (31 million claimed)</span></p>
<a class="details-btn" href="">Details</a>
</li>
<li class="card">
<img src="./images/pink-floyd-the-wall.jpeg" alt="travis" />
<p>
  <strong>Singer/Band: </strong><span class="singer">Pink Floyd</span>
</p>
<p>
  <strong>Album name: </strong><span class="album">The Wall</span>
</p>
<p><strong>Sales:</strong><span class="sales">18 million (30 million claimed)</span></p>
<a class="details-btn" href="">Details</a>
</li> */
