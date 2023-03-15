import {html, render} from '../node_modules/lit-html/lit-html.js';



export function aboutView(ctx) {
    const main = ctx.main;

    const aboutTemplate = () => html`
    <h2>About our site</h2>
    <div>
        <h4>In process</h4>
    </div>
    `
    render(aboutTemplate(), main)
}