import {detail} from './detailView.js';
import { url } from './app.js';
const topicTitle = document.querySelector('.topic-title');
// const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';



export async function postCreate() {

    const response = await fetch(url);
    const data = await response.json();

    topicTitle.innerHTML = '';

    Object.values(data).forEach(post => {

        const topicContainer = creator('div', 'className', 'topic-container', '');
        const topicNameWrapper = creator('div', 'className', 'topic-name-wrapper', '');
        const topicName = creator('div', 'className', 'topic-name', '');
        const aNormal = creator('a', 'className', 'normal', ``);
        aNormal.href = '#';
        aNormal.setAttribute('data-topicName', post.topicName);
        const h2 = creator('h2', '', '', post.topicName);
        aNormal.appendChild(h2)
        const columns = creator('div', 'className', 'columns', '');

        const div = creator('div', '', '', '');
        const p = creator('p', '', '', '');
        p.appendChild(creator('time', '', '', `Date: ${post.time}`));
        const nickName = creator('div', 'className', 'nick-name', '');
        const pUsername = creator('p', '', '', `Username: ${post.username}`);
        nickName.appendChild(pUsername);
        div.appendChild(p);
        div.appendChild(nickName);
        columns.appendChild(div);
        topicName.appendChild(aNormal);
        topicName.appendChild(columns);
        topicNameWrapper.appendChild(topicName);
        topicContainer.appendChild(topicNameWrapper);

        topicTitle.appendChild(topicContainer);
        h2.addEventListener('click', detail);

    })
}


function creator(elType, elAttribute, attrValue, elementText) {
    const element = document.createElement(elType);
    elAttribute ? element[elAttribute] = attrValue : null;
    elementText ? element.innerText = elementText : null;
    return element;
}