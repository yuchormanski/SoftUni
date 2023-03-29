import { html } from '../../node_modules/lit-html/lit-html.js';

const postTemplate = () => html`
            <section id="comment-section">
                <div class="container">
                    <!-- theme-title  -->
                    <div class="theme-title">
                        <div class="theme-name-wrapper">
                            <div class="theme-name">
                                <h2>Angular 10</h2>
    
                            </div>
    
    
                        </div>
    
                        <div class="post-structure">
                            <div class="comment">
                                <div class="header">
                                    <!-- <img src="./static/profile.png" alt="avatar">
                            <p><span>David</span> posted on <time>2020-10-10 12:08:28</time></p>
    
                            <p class="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere
                                sint
                                dolorem quam,
                                accusantium ipsa veniam laudantium inventore aut, tenetur quibusdam doloribus. Incidunt odio
                                nostrum facilis ipsum dolorem deserunt illum?</p> -->
                                </div>
    
                                <div class="user-comment">
    
                                </div>
                            </div>
    
                        </div>
    
                        <div class="answer-comment">
                            <p><span>currentUser</span> comment:</p>
                            <div class="answer">
                                <form>
                                    <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                                    <div>
                                        <label for="username">Username <span class="red">*</span></label>
                                        <input type="text" name="username" id="username">
                                    </div>
                                    <button>Post</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

`;

export async function postViewPage(ctx){

    ctx.render(postTemplate())
}


