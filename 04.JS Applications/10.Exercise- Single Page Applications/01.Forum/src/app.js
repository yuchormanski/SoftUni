import { postCreate } from "./postCreate.js";
import { now } from "./time.js";

document.getElementById('detailView').style.display = 'none';
const form = document.querySelector('form');
const postBtn = document.querySelector('form .public');
const cancelBtn = document.querySelector('form .cancel');
export const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
postBtn.addEventListener('click', newPost);
cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    form.reset();
})

// detail()
postCreate()

export async function newPost(e) {
    e.preventDefault();

    let dateTime = `${now.year}-${now.month}-${now.day} ${now.hours}:${now.minutes}:${now.seconds}`;

    const formData = new FormData(form)
    const { topicName, username, postText } = Object.fromEntries(formData);
    const post = {
        topicName,
        username,
        postText,
        time: dateTime,
    }
    try {
        if (topicName == '' || username == '' || postText == '') {
            const error = 'All fields required!';
            throw new Error(error.message)
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        })
        const data = await response.json();

        postCreate();

    } catch (error) {
        console.log(error);
    }

    form.reset()
}



