import { html, render } from '../node_modules/lit-html/lit-html.js';
import { get } from './requestFiles/api.js';
import { url } from './serverURL.js';


export async function articleView(ctx) {
    const data = await get(url.get);

    const articleTemplate = () => html`
        <div>
            ${data.map(x => html`
                <h2>${x.title}</h2>
                <img src="${x.img}" width="200" />
                <p>${x.description}</p>
            `)}
        </div>
    `
    render(articleTemplate(), main)

}
