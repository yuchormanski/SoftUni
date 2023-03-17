import page from '../../node_modules/page/page.mjs';
import { post, put } from './api.js';
import { url } from './requestURL.js';


export function setUserData(userData) {
    localStorage.setItem('userData', JSON.stringify(userData)); //or sessionStorage
}

export function getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}

export function clearUserData() {
    localStorage.removeItem('userData');
    page.redirect('/')
}


export function isUserLogged() {
    const userData = localStorage.userData;
    return userData;
}

export async function getFormData(receivedForm) {

    const formData = new FormData(receivedForm);
    const data = Object.fromEntries(formData.entries())
    const loginOrRegister = data.hasOwnProperty('rePass')
    let currentUrl = url.login;
    receivedForm.reset()

    try {
        if (data.email == '' || data.password == '') {
            const err = 'All fields are required!'
            throw new Error(err)
        }
        if (loginOrRegister) {
            if (data.rePass == '') {
                throw new Error('All fields are required!')
            }
            if (data.password !== data.rePass) {
                const error = 'Password don\'n match!'
                throw new Error(error)
            }
            currentUrl = url.register
        }
        let email = data.email, password = data.password

        const result = await post(currentUrl, {email, password})
        return result;


    } catch (err) {
        alert(err.message)
    }
}


export async function createItem(form){
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
        if (data.description == ''
        || data.img == ''
        || data.make == ''
        || data.model == ''
        || data.price == ''
        || data.year == '') {
            const err = 'All fields are required!'
            throw new Error(err)
        }
        if(data.make.length < 4 || data.model.length < 4){
            throw new Error('Make and Model must be at least 4 letters long')
        }
        if(data.description.length < 10){
            throw new Error('Need longer description')
        }
        if(data.price < 0){
            throw new Error('Price must be positive number!')
        }

        let {description, img, make, material, model, price, year} = data;

        const result = await post(url.post, {description, img, make, material, model, price, year})
        return result;


    } catch (err) {
        alert(err.message)
    }

}

export async function editItem(form,id ){
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
        if (data.description == ''
        || data.img == ''
        || data.make == ''
        || data.model == ''
        || data.price == ''
        || data.year == '') {
            const err = 'All fields are required!'
            throw new Error(err)
        }
        if(data.make.length < 4 || data.model.length < 4){
            throw new Error('Make and Model must be at least 4 letters long')
        }
        if(data.description.length < 10){
            throw new Error('Need longer description')
        }
        if(data.price < 0){
            throw new Error('Price must be positive number!')
        }

        let {description, img, make, material, model, price, year} = data;

        const result = await put(`${url.post}/${id}`, {description, img, make, material, model, price, year})
        return result;


    } catch (err) {
        alert(err.message)
    }

}