const loginForm = document.querySelector('form#login');
const logout = document.querySelector('nav #user').style.display = 'none';
const url = 'http://localhost:3030/users/login';
const loginBtn =  document.querySelector('form#login button')
loginBtn.addEventListener('click', logIn);

async function logIn(e) {
    e.preventDefault();

    const form = new FormData(loginForm);
    // const { email, password } = Object.fromEntries(form);

    const email = form.get('email');
    const password = form.get('password');
    
    try {

        // const response = await fetch(url);
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            const err = await response.json()
            throw new Error(err.message)
        }

        const data = await response.json();

        const user = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        }
        localStorage.setItem('userData', JSON.stringify(user));
        
        // пренасочваме към началната страница
        window.location = './index.html';


    } catch (error) {
        alert(error.message);
        // loginForm.reset()
    }


}
