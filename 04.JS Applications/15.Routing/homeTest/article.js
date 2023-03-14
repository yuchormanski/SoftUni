import { html, render } from './node_modules/lit-html/lit-html.js'
import { div } from './app.js'
import { data } from './input.js'




export function articlesView() {
    const template = (d) => html`
            <h1>${d.name}</h1>
            <p>${d.email}</p>
            <p>${d.ip_address}</p>
            <article>${d.text}</article>
            `
    render(data.map(template), div)
}