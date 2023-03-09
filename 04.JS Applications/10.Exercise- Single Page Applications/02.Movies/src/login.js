import { homePageSection, formSignUpSection, formLoginSection, addMovieSection, movieExampleSection, editMovieSection, homeView} from "./app.js";

//TODO: get data from form


export async function login() {
    formLoginSection.style.display = 'block';
    homePageSection.style.display = 'none';
    formSignUpSection.style.display = 'none';
    addMovieSection.style.display = 'none';
    movieExampleSection.style.display = 'none';
    editMovieSection.style.display = 'none';

    const sendLoginBtn = formLoginSection.getElementsByTagName('button')[0];
    sendLoginBtn.addEventListener('click', sendLogin);
}

async function sendLogin(e) {
    e.preventDefault()
    const form = formLoginSection.querySelector('form');
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData);
    try {
        if (email == undefined || password == undefined) {
            throw new Error('no user or pass')
        }

        const res = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const data = await res.json();

        const userData = {
          email: data.email,
          id: data._id,
          token: data.accessToken,
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        window.location.reload()

    } catch (err) {
        alert(err.message);
        throw err;
    }
}