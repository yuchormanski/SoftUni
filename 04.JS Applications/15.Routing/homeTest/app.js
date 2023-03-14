import { html, render } from './node_modules/lit-html/lit-html.js';
import page from "//unpkg.com/page/page.mjs";
import { data } from './input.js';
import { startHome } from './home.js';
import { articlesView } from './article.js';
import { aboutView } from './about.js';



export const div = document.querySelector('#mainDiv');

page('/home', startHome);
page('/Articles', articlesView);
page('/About', aboutView);
page.start();









