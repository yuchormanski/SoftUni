export const userData = getUserData();

export function setUserData(_userData) {
    localStorage.setItem('userData', JSON.stringify(_userData));
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
        //тримваме инпута. За да може да се мапне се обръща в масив, ако е обект
        // const data = Object.fromEntries([...formData.entries()].map((k, v) => [k, v.trim()]));
        const data = Object.fromEntries(formData.entries());
        callback(data, form);
    }
}