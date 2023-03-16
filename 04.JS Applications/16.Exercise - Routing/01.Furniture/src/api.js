import { updateNav } from "./app.js";
async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    }
    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data)
    }

    const response = await fetch(url, options)

    try {
        // const result = await response.json();

        let output;

        //ако резултата от заявката не е празна
        if (response.status !== 204) {
            // при успешна заявка
            output = await response.json()
        }
        //ако заявката не е преминала успешно
        if (response.ok !== true) {
            // ако имаме невалиден токен
            if (response.status === 403) {
                // const userData = localStorage.getItem(userData)
                localStorage.removeItem('userData')
                updateNav()
            }
            throw output;
        }

        return output;


    } catch (error) {
        alert(error.message)
        throw error;
    }
}

export const post = request.bind(null, 'post')
export const get = request.bind(null, 'get')
export const put = request.bind(null, 'put')
export const del = request.bind(null, 'delete')