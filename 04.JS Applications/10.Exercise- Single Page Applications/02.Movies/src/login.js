import { homePageSection } from "./app.js";
import { formLoginSection } from "./app.js";
import { formSignUpSection } from "./app.js";
//TODO: get data from form


export async function login() {
    homePageSection.style.display = 'none';
    formSignUpSection.style.display = 'none';
    formLoginSection.style.display = 'block';
    console.log('ok');

    if(email == undefined || password == undefined) {
        throw new Error('no user or pass')
    }
    // try {
    //     const res = await fetch('http://localhost:3030/users/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ email, password })
    //     });
    //     if (!res.ok) {
    //         const error = await res.json();
    //         throw new Error(error.message);
    //     }

    //     const user = await res.json();
    //     localStorage.setItem('user', JSON.stringify(user));
    // } catch (err) {
    //     alert(err.message);
    //     throw err;
    // }
}