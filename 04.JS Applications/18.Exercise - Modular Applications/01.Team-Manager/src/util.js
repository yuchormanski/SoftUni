export const userData = getUserData();

export function setUserData(userData) {
    localStorage.setItem('userData', JSON.stringify(userData)); //or sessionStorage
}

export function getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}

export function clearUserData() {
    localStorage.removeItem('userData');
}


export function createSubmitHandler(callback) {
    return function (e) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        //тримваме инпута . За да може да се мапне се обръща в масив
        // const data = Object.fromEntries([...formData.entries()].map((k, v) => [k, v.trim()]));
        const data = Object.fromEntries(formData.entries());

        // const { email, password } = data;
        // if (email == '' || password == '') {
            // e.currentTarget.querySelector('.error').style.display = '';

        // } else {
            // e.currentTarget.querySelector('.error').style.display = 'none';
        // }

        callback(data, form);
    }
}



