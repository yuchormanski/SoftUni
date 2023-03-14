import { html, render } from './node_modules/lit-html/lit-html.js'
import { div } from './app.js'


export function startHome() {

    const temp = () => html`
        <h2>Welcome</h2>
        <p>Continue reading</p>
    `
    render(temp(), div);
}

