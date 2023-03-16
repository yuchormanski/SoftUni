import { post } from "./api.js";
import { url } from "./requestURL.js";


export async function getFormData(receivedForm) {

    const formData = new FormData(receivedForm);
    const data = Object.fromEntries(formData.entries())
    const logOrReg = data.hasOwnProperty('rePass')
    let currentUrl = url.login;
    receivedForm.reset()

    try {
        if (data.email == '' || data.password == '') {
            const err = 'All fields are required!'
            throw new Error(err)
        }
        if (logOrReg) {
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