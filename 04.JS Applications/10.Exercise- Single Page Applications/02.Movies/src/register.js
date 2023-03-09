
import { homePageSection, formSignUpSection, formLoginSection, addMovieSection, movieExampleSection, editMovieSection } from "./app.js";
import { url } from "./routing.js";
import { homeView } from "./app.js";

export async function register(e) {
    e.preventDefault();


    formSignUpSection.style.display = 'block';
    homePageSection.style.display = 'none';
    addMovieSection.style.display = 'none';
    movieExampleSection.style.display = 'none';
    editMovieSection.style.display = 'none';
    formLoginSection.style.display = 'none';

    const registerForm = document.getElementById('register-form');
    const regBtn = registerForm.querySelector('button');
    regBtn.addEventListener('submit', submitReg);

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
            
            
            const response = await fetch(url.register, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })
            const data = response.json();
            console.log(data);
            if(!response.ok || response.status !== 200){
                throw new Error('Registration failed! PLease try again later');
            }
            
            homeView()

        } catch (error) {
            alert(error)
        }
    }
}