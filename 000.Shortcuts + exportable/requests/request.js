
//---------------------------------------------

// onHome sample

import { login } from "./auth.js";

async function onHome() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData != null) {
        'GREETING-TAG.textContent' = userData.email;
    } else {
        'GREETING-TAG.textContent' = 'Welcome to our site'; // or something

    }

    // usage -----
    const loadedData = await getSomethingForGet()

    //--------------------------
    // ...
}

//onPost sample 

import { post } from 'post.js';

async function onPost() {
    //...
    //..
    //..
    // import {login} from 'post functoin location'
    const data = { 'data for post'}

    await post(data)
}


//onLogin sample 

async function onLogin() {
    //...
    //..
    //..
    // import {login} from 'post functoin location'

    await login(email, password)

    // loginForm.reset()  - if needed
    // go to home page
}

//-------------------------------------------------

async function requests(method, url, data) {  //no need to be exported, function will be .bind

    try {
        const userData = JSON.parse(localStorage.getItem('userData'));
        const options = {
            method,
            headers: {}
        };

        if (userData != null) {
            options.headers['X-Authorization'] = userData.accessToken;
        }
        if (data != undefined) {
            options.headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(data);
        }

        const response = await fetch(url, options);

        let result;

        if (response.status != 204) {
            result = await response.json();
        }

        if (response.ok == false) {
            if (response.status == 403) {
                //      localStorage.clear()  // if used localStorage. In other way clear SessionStorage
                localStorage.removeItem('userData');
            }
            const error = result;
            throw error;
        }

        return result; // 

    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export const get = requests.bind(null, 'get')
export const post = requests.bind(null, 'post')
export const put = requests.bind(null, 'put')
export const del = requests.bind(null, 'delete')


