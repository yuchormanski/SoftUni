import { registerFunc } from './register.js';
import { loginFunc } from './login.js';

const home = document.getElementById('home-view');
const main = document.querySelector('main');
const greeting = document.querySelector('p.email span');

main.replaceChildren(home);

document.querySelector('#register').addEventListener('click', registerFunc);
const loginBtn = document.querySelector('#login')
loginBtn.addEventListener('click', loginFunc);
const logoutBtn = document.querySelector('#logout')
logoutBtn.addEventListener('click', () => {
    localStorage.clear();
    main.replaceChildren(home);
});
document.querySelector('#home').addEventListener('click', () => {
    main.replaceChildren(home);

});

if(greeting.textContent == 'guest'){
    logoutBtn.remove();
}