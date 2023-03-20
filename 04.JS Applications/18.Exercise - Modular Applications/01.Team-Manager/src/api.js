//изграждане на базова функция за извършване на заявки
// импорт на необходимите ресурси
// import { url } from "../js/requestURL.js";
import { clearUserData, getUserData } from "./util.js";

export let errorMessage = null;

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    //Authorization
    const userData = getUserData();
    if (userData != null) {
        options.headers['X-Authorization'] = userData.accessToken;
    }


    try {
        //правим заявка
        const response = await fetch(url, options)

        let result;

        //ако резултата от заявката не е празна
        if (response.status != 204) {
            // при успешна заявка
            result = await response.json();
        }
        //ако заявката не е преминала успешно
        if (response.ok != true) {
            errorMessage = result.message
            console.log(errorMessage);
            const errorDiv = document.querySelector('.error');
            errorDiv.textContent = errorMessage
            // ако имаме невалиден токен
            if (response.status == 403) {
                clearUserData();
            }

            throw result;
        }
        //връщаме резултата от заявката
        return result;

    } catch (err) {

        // alert(err.message);
        errorMessage = err.message;
        throw err;

    }
    // finally {
    //     if (errorMessage !== null) {
    //     }
    // }
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');