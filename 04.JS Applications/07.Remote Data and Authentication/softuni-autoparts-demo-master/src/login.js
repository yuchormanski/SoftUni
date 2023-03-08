import { showHome } from './home.js';

const loginSection = document.getElementById('login');

const loginForm = loginSection.querySelector('#login-form');
loginForm.addEventListener('submit', onLogin);

export function showLogin() {
    document.querySelector('main').replaceChildren(loginSection);
}

async function onLogin(event) {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const { email, password } = Object.fromEntries(formData.entries());

    try {
        const response =  await fetch('http://localhost:3030/users/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password})
        });

        if (response.ok == false) {
            const error = await response.json();
            throw error;
        }

        const userData = await response.json();

        localStorage.setItem('email', userData.email);
        localStorage.setItem('id', userData._id);
        localStorage.setItem('accessToken', userData.accessToken);

        loginForm.reset();

        showHome();
    } catch (err) {
        alert(err.message);
    }
}