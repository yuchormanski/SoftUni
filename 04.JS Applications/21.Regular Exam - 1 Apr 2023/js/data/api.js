import { clearUserData, getUserData } from "./util.js";

const host = 'http://localhost:3030';

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    }

    const userData = getUserData();
    if (userData) {
        const token = userData.accessToken;
        options.headers['X-Authorization'] = token;
    }

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {

        const response = await fetch(host + url, options);

        let result;
        if (response.status != 204) {
            result = await response.json();
        }

        if (response.ok == false) {
            if (response.status == 403) {
                clearUserData();
            }
            const error = result;
            throw error;
        }

        return result;

    } catch (error) {
        alert(error.message);
        throw error;
    }
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');