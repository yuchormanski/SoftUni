
import { homePageSection, formSignUpSection } from "./app.js";
import { url } from "./routing.js";

export async function register(e) {
    e.preventDefault();
    formSignUpSection.style.display = 'block';
    homePageSection.style.display = 'none';

    const registerForm = document.getElementById('register-form');
    const regBtn = registerForm.querySelector('button');
    regBtn.addEventListener('click', submitReg);

    async function submitReg(e) {
        e.preventDefault();
        const formData = new FormData(registerForm);
        const { email, password, repeatPassword } = Object.fromEntries(formData);

        try {
            if (email == '' || password == '' || repeatPassword == '') {
                throw new Error('All fields are required!');
            }
            if (password !== repeatPassword) {
                throw new Error('The password don\'t match')
            }

            const response = await fetch(url.post, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },

            })


        } catch (error) {
            alert(error)
        }

    }
}