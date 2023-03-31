import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';

const allTemplate = (memes) => html`
        <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
                ${memes.length > 0 ?
            html`
                ${memes.map(x => html`
                <div class="meme">
                    <div class="card">
                        <div class="info">
                            <p class="meme-title">${x.title}</p>
                            <img class="meme-image" alt="meme-img" src=${x.imageUrl}>
                        </div>
                        <div id="data-buttons">
                            <a class="button" href="/details/${x._id}">Details</a>
                        </div>
                    </div>
                </div>
                `)}  
                `:
            html`
                <!-- Display : If there are no memes in database -->
                <p class="no-memes">No memes in database.</p>`}
        
        
            </div>
        </section>
`;

export async function allMemesPage(ctx) {
    const memes = await get('/data/memes?sortBy=_createdOn%20desc');
    ctx.render(allTemplate(memes))
}