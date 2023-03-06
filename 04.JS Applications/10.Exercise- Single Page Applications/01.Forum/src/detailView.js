// import { postCreate } from "./postCreate.js";
import { addComment } from "./comment.js";
import { url } from "./app.js";
import { urlComments } from "./comment.js";
import { creator } from "./createElement.js";
// import {detail} from './detailView.js';

const homeBtn = document.querySelector('nav a');
homeBtn.addEventListener('click', () => {
    document.getElementById('detailView').style.display = 'none';
    document.getElementById('homeView').style.display = 'block';
    document.location.reload();
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

    const comments = await fetch(urlComments);
    const dataComments = await comments.json();
    const found = Object.values(dataComments).filter(c => c.commentFor == id);

    if (found) {
        found.forEach(comment => {
            console.log(comment);
            const userComment = creator('div', 'id', 'user-comment', '');
            const topicNameWrapper = creator('div', 'className', 'topic-name-wrapper', '');
            const topicName = creator('div', 'className', 'topic-name', '');
            const pCurrentUserTime = creator('p', '', '', '');
            pCurrentUserTime.innerHTML = `<strong>${comment.username}</strong> commented on <time>${comment.time}</time>`
            const postContent = creator('div', 'className', 'post-content', '');
            const pContent = creator('p', '', '', comment.postText);
            postContent.appendChild(pContent);
            topicName.appendChild(pCurrentUserTime);
            topicName.appendChild(postContent);
            topicNameWrapper.appendChild(topicName);
            userComment.appendChild(topicNameWrapper);
            
            divComment.appendChild(userComment);
        });
    }
    
    content.appendChild(divComment);
    content.appendChild(answerComment);
}