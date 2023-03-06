import { creator } from "./createElement.js";
import { url } from "./app.js";
const answerComment = document.querySelector('#detailView .answer-comment');
const currentId = document.querySelector('#detailView .theme-content .comment .header');
const form = document.querySelector('#detailView .answer-comment form');





export async function addComment(e) {
    e.preventDefault();
    if (e.target.tagName == 'BUTTON') {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        console.log(currentId);

        // const response = await fetch(url, {
        //     method: 'PUT',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify
        // })
        // console.log(e.target.parentElement.parentElement.parentElement);
    }
}