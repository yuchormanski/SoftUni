export function setUserData(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
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
        // console.log(data);
        callback(data, form);
    }
}