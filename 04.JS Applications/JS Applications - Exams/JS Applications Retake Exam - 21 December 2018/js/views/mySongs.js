import { html } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../data/api.js';
import { getUserData } from '../data/util.js';

const myTemplate = (data, likes) => html`
        <section id="mySongsView">
            <div class="background-spotify">
                <div class="song-container">
                    <h1>My Songs</h1>

                    ${data.length > 0 ?
                    html`
                        ${data.map(x => html`
                            <div class="song">
                            <h5>Title: ${x.title}</h5>
                            <h5>Artist: ${x.artist}</h5>
                            <img class="cover" src=${x.imageURL} />
                            <p>Likes: 100; Listened 1500 times</p>
                            <a href="/delete/${x._id}"><button type="button" class="btn btn-danger mt-4">Remove</button></a>

                            <a href="#"><button type="button" class="btn btn-success mt-4">Listen</button></a>
                            <p>Likes: ${likes.length}</p>

                        </div>
                        `)}
                    `:html`
                        <h2>There is no sings at this time</h2>
                    `}
                    


                </div>
            </div>
        </section>
`;

export async function mySongsPage(ctx) {
    const user = getUserData();


    const data = await get(`/data/songs?where=_ownerId%3D%22${user._id}%22&sortBy=_createdOn%20desc`);
    const likes = await get('/data/likes');

    ctx.render(myTemplate(data, likes))
}