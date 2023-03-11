import { html, render } from '../node_modules/lit-html/lit-html.js';
import { table } from './app.js';

export function createTable(data) {
    const tableTemplate = (row) => html`
            <tr>
                <td>${row.firstName} ${row.lastName}</td>
                <td>${row.email}</td>
                <td>${row.course}</td>
            </tr>
`
    render(data.map(tableTemplate), table)
}