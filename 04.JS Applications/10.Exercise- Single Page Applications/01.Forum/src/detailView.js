import { postCreate } from "./postCreate.js";
import { url } from "./app.js";
const homeBtn = document.querySelector('nav a');
homeBtn.addEventListener('click', () => {
    document.getElementById('detailView').style.display = 'none';
    document.getElementById('homeView').style.display = 'block';
});









export async function detail(e) {

    document.getElementById('detailView').style.display = 'block';
    document.getElementById('homeView').style.display = 'none';
    const themeTitle = document.querySelector('#detailView .theme-title');

    themeTitle.innerHTML = '';
}