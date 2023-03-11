import { html, render } from './node_modules/lit-html/lit-html.js'
import { towns } from './towns.js'
import { getResult } from './userSearch.js';

const townsElement = document.querySelector('#towns');
document.querySelector('article button').addEventListener('click', getResult)

search()
function search(town) {
   
   const ul = () => html`<ul></ul>`
   render(ul(),townsElement)

   const townsTemplate = (town) => html`<li>${town}</li>`
   render(towns.map(townsTemplate), townsElement.querySelector('ul'));
}
