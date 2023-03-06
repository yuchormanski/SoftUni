import { creator } from "./createElement.js";
import { detail } from "./detailView.js";

import { now } from "./time.js";
export const urlComments = 'http://localhost:3030/jsonstore/collections/myboard/comments'
const form = document.querySelector('#detailView .answer-comment form');

let dateTime = `${now.year}-${now.month}-${now.day} ${now.hours}:${now.minutes}:${now.seconds}`;



export async function addComment(e) {
    e.preventDefault();
    const userCommentDiv = document.querySelector('#detailView .theme-content .comment');
    const currentId = document.querySelector('#detailView .theme-content .comment .post-content');

    if (e.target.tagName == 'BUTTON') {
        const formData = new FormData(form);
        const dataComment = Object.fromEntries(formData);

        console.log(dataComment);
        if (dataComment.postText == ''
            || dataComment.username == '') {
            const error = 'All fields required!';
            throw new Error(error);
        }


        dataComment.time = dateTime;
        dataComment.commentFor = currentId.id;


        const update = await fetch(urlComments, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataComment)
        })

        form.reset();

        const userComment = creator('div', 'id', 'user-comment', '');
        const topicNameWrapper = creator('div', 'className', 'topic-name-wrapper', '');
        const topicName = creator('div', 'className', 'topic-name', '');
        const pCurrentUserTime = creator('p', '', '', '');
        pCurrentUserTime.innerHTML = `<strong>${dataComment.username}</strong> commented on <time>${dataComment.time}</time>`
        const postContent = creator('div', 'className', 'post-content', '');
        const pContent = creator('p', '', '', dataComment.postText);
        postContent.appendChild(pContent);
        topicName.appendChild(pCurrentUserTime);
        topicName.appendChild(postContent);
        topicNameWrapper.appendChild(topicName);
        userComment.appendChild(topicNameWrapper);
        userCommentDiv.appendChild(userComment);
    }

}