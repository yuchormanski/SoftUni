import { postCreate } from "./postCreate.js";
import { addComment } from "./comment.js";
import { url } from "./app.js";
import { creator } from "./createElement.js";
const homeBtn = document.querySelector('nav a');
homeBtn.addEventListener('click', () => {
    document.getElementById('detailView').style.display = 'none';
    document.getElementById('homeView').style.display = 'block';
});

export async function detail(e) {

    document.getElementById('detailView').style.display = 'block';
    document.getElementById('homeView').style.display = 'none';
    const content = document.querySelector('#detailView .theme-content');
    const answerComment = document.querySelector('#detailView .answer-comment');
    const postCategory = document.querySelector('#detailView .theme-title .theme-name h2');
    content.addEventListener('click', addComment);

    const category = e.target.innerText;
    const id = e.target.id
    console.log(id);


    const response = await fetch(url);
    const data = await response.json();
    const filtered = Object.values(data).filter(post => post._id == id);
    const post = filtered[0];

    content.innerHTML = '';
    postCategory.innerText = category;


    const divComment = creator('div', 'className', 'comment', '');
    const divHeader = creator('div', 'className', 'header', '');
    divComment.appendChild(divHeader);
    const img = creator('img', 'src', './static/profile.png', '');
    img.alt = 'avatar';
    const pName = creator('p', '', '', '');
    pName.innerHTML = `<span>${post.username}</span> posted on <time>${post.time}</time>`;
    const pContent = creator('p', 'className', 'post-content', post.postText);
    pContent.id = id;
    divHeader.appendChild(img)
    divHeader.appendChild(pName)
    divHeader.appendChild(pContent);

    content.appendChild(divComment);
    content.appendChild(answerComment);

}

/* 
                    <!-- comment  -->

                    <div class="comment">
                        <div class="header">
                            <img src="./static/profile.png" alt="avatar">
                            <p><span>David</span> posted on <time>2020-10-10 12:08:28</time></p>
                    
                            <p class="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere sint
                                dolorem quam,
                                accusantium ipsa veniam laudantium inventore aut, tenetur quibusdam doloribus. Incidunt odio
                                nostrum facilis ipsum dolorem deserunt illum?</p>
                        </div>
                    </div>

*/
/*                  // currentUser comment:
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

*/