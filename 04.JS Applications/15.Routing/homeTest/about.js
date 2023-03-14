import {html, render} from './node_modules/lit-html/lit-html.js'
import { div } from './app.js'

export function aboutView(){

    const aboutTemplate = () => html`
    <h3>Some text to display</h3>
    <div>
        <p>Text for About page</p>
        <p>
            Yet another text
        </p>
    </div>
    
    `
    render(aboutTemplate(),div)
}
