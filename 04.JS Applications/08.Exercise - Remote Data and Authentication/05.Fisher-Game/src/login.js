
const login = document.getElementById('login-view');
const main = document.querySelector('main');

export function loginFunc() {

    main.replaceChildren(login);
}