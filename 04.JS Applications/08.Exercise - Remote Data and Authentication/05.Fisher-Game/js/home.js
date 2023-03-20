import { html } from '../node_modules/lit-html/lit-html.js';
import { newCatch } from './addCatch.js';
import { get, post } from './api.js';
import { navLoad } from './app.js';
import { url } from './requestURL.js';
import { getUserData } from './util.js';
import { createSubmitHandler } from './util.js';

let ctxx;
// const addBtn = document.querySelector('fieldset .add');


export async function homePage(ctx) {
    ctxx = ctx
    const userData = getUserData();
    const homeTemplate = () => html`
            <fieldset id="main">
                <legend>Click to load catches</legend>
            </fieldset>
            <aside>
                <button class="load" @click=${homePageLoad}>Load</button>
                <form id="addForm" @submit=${createSubmitHandler(toSubmit)}>
                    <fieldset>
                        <legend>Add Catch</legend>
                        <label>Angler</label>
                        <input type="text" name="angler" class="angler" />
                        <label>Weight</label>
                        <input type="number" name="weight" class="weight" />
                        <label>Species</label>
                        <input type="text" name="species" class="species" />
                        <label>Location</label>
                        <input type="text" name="location" class="location" />
                        <label>Bait</label>
                        <input type="text" name="bait" class="bait" />
                        <label>Capture Time</label>
                        <input type="number" name="captureTime" class="captureTime" />
                        <button class="add" ?disabled=${userData === null}>Add</button>
                </form>
            </aside>
    `
    ctx.render(homeTemplate(), ctx.section)
}

export async function homePageLoad() {
    const fieldset = document.getElementById('main');
    const userData = getUserData();
    let userId = null;

    const data = await get(url.get);
    if (userData !== null) {
        userId = userData._id;
    }
    // console.log(userData);
    // console.log(data);

    const catchTemplate = () => html`
    <legend>Catches</legend>
    <div id="catches">
        ${data.map(x => html`
        <div class="catch">
            <label>Angler</label>
            <input type="text" class="angler" value="${x.angler}">
            <label>Weight</label>
            <input type="text" class="weight" value="${x.weight}">
            <label>Species</label>
            <input type="text" class="species" value="${x.species}">
            <label>Location</label>
            <input type="text" class="location" value="${x.location}">
            <label>Bait</label>
            <input type="text" class="bait" value="${x.bait}">
            <label>Capture Time</label>
            <input type="number" class="captureTime" value="${x.captureTime}">
            <button class="update" data-id="${x._ownerId}" ?disabled=${userId !== x.ownerId}>Update</button>
            <button class="delete" data-id="${x._ownerId}" ?disabled=${userId !== x.ownerId}>Delete</button>
        </div>
        `)}
    </div>
    `
    ctxx.render(catchTemplate(), fieldset);
}


export async function toSubmit(data, form) {
    console.log(data);

    try {
        const { angler, weight, species, location, bait, captureTime } = data;
        if (angler == '' || weight == '' || species == '' || location == '' || bait == '' || captureTime == '') {
            throw new Error('All fields are required!')
        }
        const response = await post(url.post, data);
        console.log(response);

    } catch (error) {
        alert(error)
    }
}


