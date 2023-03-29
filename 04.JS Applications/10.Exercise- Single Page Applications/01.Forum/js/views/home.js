import { html } from '../../node_modules/lit-html/lit-html.js';
import { get, post } from '../data/api.js';
import { createSubmitHandler } from '../data/util.js';

const homeTemplate = (data, onSubmit) => html`
    <!-- homepage -->
    <div class="container">
        <main>
    
            <section id="topic-section">
                <div class="new-topic-border">
                    <div class="header-background">
                        <span>New Topic</span>
                    </div>
                    <form @submit=${onSubmit}>
                        <div class="new-topic-title">
                            <label for="topicName">Title <span class="red">*</span></label>
                            <input type="text" name="topicName" id="topicName">
                        </div>
                        <div class="new-topic-title">
                            <label for="username">Username <span class="red">*</span></label>
                            <input type="text" name="username" id="username">
                        </div>
                        <div class="new-topic-content">
                            <label for="postText">Post <span class="red">*</span></label>
                            <textarea type="text" name="postText" id="postText" rows="8" class="height"></textarea>
                        </div>
                        <div class="new-topic-buttons">
                            <button class="cancel" type="button">Cancel</button>
                            <button class="public">Post</button>
                        </div>
    
                    </form>
                </div>
    
                <div class="topic-title">
    
                    <!-- topic component  -->
                    <div class="topic-container">
                        
                        <!-- <div class="topic-name-wrapper">
                                    <div class="topic-name">
                                        <a href="#" class="normal">
                                            <h2>Angular 10</h2>
                                        </a>
                                        <div class="columns">
                                            <div>
                                                <p>Date: <time>2020-10-10T12:08:28.451Z</time></p>
                                                <div class="nick-name">
                                                    <p>Username: <span>David</span></p>
                                                </div>
                                            </div>
            
            
                                        </div>
                                    </div>
                                </div> -->
                    </div>
    
                </div>
    
            </section>
    
    
    
            <!-- <div class="post-structure-with-comments">
                            <div class="comment">
                                <div class="header">
                                    <img src="./static/profile.png" alt="avatar">
                                    <p><span>David</span> posted on <time>2020-10-10 12:08:28</time></p>
            
                                    <p class="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere
                                        sint
                                        dolorem quam,
                                        accusantium ipsa veniam laudantium inventore aut, tenetur quibusdam doloribus. Incidunt
                                        odio
                                        nostrum facilis ipsum dolorem deserunt illum?</p>
                                </div>
                                </div>
            
                                <div id="user-comment">
                                    <div class="topic-name-wrapper">
                                        <div class="topic-name">
                                            <p><strong>Daniel</strong> commented on <time>3/15/2021, 12:39:02 AM</time></p>
                                            <div class="post-content">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere sint
                                                    dolorem quam.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
    
        </main>
    
    </div>
`;

export async function homePage(ctx) {
    const data = await get('/jsonstore/collections/myboard/posts');
    // console.log(data.content);
    ctx.render(homeTemplate(data, createSubmitHandler(onSubmit)));

    async function onSubmit(received, form) {
        if (Object.values(received).some(x => x == '')) return alert('alert')
        const response = await post('/jsonstore/collections/myboard/posts');
        console.log(response);
    }
}