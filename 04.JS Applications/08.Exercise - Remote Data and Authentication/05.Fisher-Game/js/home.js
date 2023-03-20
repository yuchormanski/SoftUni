import { html } from '../node_modules/lit-html/lit-html.js';
// import { newCatch } from './addCatch.js';
import { get, post, del, put } from './api.js';
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
                        <button class="add" ?disabled=${userData===null}>Add</button>
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

    const catchTemplate = () => html`
    <legend>Catches</legend>
    <div id="catches">
        ${data.map(x => html`
        <div class="catch" @click=${userAction}>
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
            <button class="delete" data-id="${x._id}" ?disabled=${userId !==x._ownerId} }>Delete</button>
            <button class="update" data-id="${x._id}" ?disabled=${userId !==x._ownerId} }>Update</button>
        </div>
        `)}
    </div>
    `
    ctxx.render(catchTemplate(), fieldset);

    async function userAction(e) {
        if (e.target.tagName === 'BUTTON') {
            const id = e.target.dataset.id;

            if (e.target.className === 'delete') {
                await del(`${url.delete}/${id}`);
                homePageLoad()
                
            } else if (e.target.className === 'update') {
                const inputs = e.target.parentElement.querySelectorAll('input');
                const edited = {
                    angler: inputs[0].value,
                    weight: Number(inputs[1].value),
                    species: inputs[2].value,
                    location: inputs[3].value,
                    bait: inputs[4].value,
                    captureTime: Number(inputs[5].value)
                }
                
                const response = await put(`${url.put}/${id}`, edited);
                homePageLoad()

            }
        }

    }
}


export async function toSubmit(data, form) {

    try {
        const { angler, weight, species, location, bait, captureTime } = data;

        if (angler == '' || weight == '' || species == '' || location == '' || bait == '' || captureTime == '') {
            throw new Error('All fields are required!')
        }

        const currentCatch = {
            angler,
            weight: Number(weight),
            species,
            location,
            bait,
            captureTime: Number(captureTime)
        }

        const response = await post(url.post, currentCatch);
        form.reset();

    } catch (error) {
        alert(error)
    }
}




