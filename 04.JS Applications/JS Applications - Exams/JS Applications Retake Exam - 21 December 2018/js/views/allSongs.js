import { html } from '../../node_modules/lit-html/lit-html.js';
import { get, post } from '../data/api.js';
import { getUserData } from '../data/util.js';

const allTemplate = (data, user, likes, likeSong) => html`
        <section id="allSongsView">
            <div class="background-spotify">
                <div class="song-container">
                    <h1>All Songs</h1>
                    <a href="/addSong">
                        <button type="button" class="btn-lg btn-block new-song-btn">Add a new song</button>
                    </a>
                    ${data.map(x => html`
                        <div class="song">                       
                            <h5>Title: ${x.title}</h5>
                            <h5>Artist: ${x.artist}</h5>
                            <img class="cover" src=${x.imageURL}/>
                            ${user ? html`
                            ${user._id === x._ownerId ? html`
                            
                                <p>Likes: ${likes.length}; Listened 1500 times</p>
                                <a href="/delete/${x._id}"><button type="button" class="btn btn-danger mt-4">Remove</button></a>
                                <a href="#"><button type="button" class="btn btn-success mt-4">Listen</button></a>
                                
                                `: html`
                                
                                <p>Likes: ${likes.length}</p>
                                <a href="javascript:void(0)"><button type="button" class="btn btn-primary mt-4" @click=${() => likeSong(x._id)}>Like</button></a> 
                                
                                `}
                                
                                
                            
                            `: null}
                                                   
                        </div>
                    `)}
                </div>
            </div>
        </section>
`;

export async function allSongsPage(ctx) {
    const user = getUserData();
    const data = await get('/data/songs');
    const likes = await get('/data/likes');

    ctx.render(allTemplate(data, user, likes, likeSong));

    async function likeSong(id) {
        await post('/data/likes/', { songId: id });
        ctx.page.redirect('/allSongs')
    }
}