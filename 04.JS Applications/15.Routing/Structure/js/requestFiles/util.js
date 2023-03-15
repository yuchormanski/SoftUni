import page from '../../node_modules/page/page.mjs';

export function setUserData(userData) {
    localStorage.setItem('userData', JSON.stringify(userData)); //or sessionStorage
}

export function getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}

export function clearUserData() {
    localStorage.removeItem('userData');
    page.redirect('/')
}

export function createSubmitHandler(callback){
    return function(e){
        e.preventDefault()
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        callback(data, form);
    }

}