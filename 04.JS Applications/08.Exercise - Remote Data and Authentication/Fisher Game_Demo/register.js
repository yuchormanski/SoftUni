const registerForm = document.querySelector('form');
document.getElementById("user").style.display = "none";

registerForm.addEventListener('submit', onUserRegistger)

const url = 'http://localhost:3030/users/register'
async function onUserRegistger(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const {email, password, rePass} = Object.fromEntries(formData);
    try {
        if ([...formData.values()].some(el => el === '')) {
            throw new Error('Input is not correct!')
        } else if (password != rePass) {
            throw new Error('The passwords do not match')
        }

        const res = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password,
                rePass
            })
        })

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }
        const data = await res.json()
        console.log(data);
        const user = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        }
        localStorage.setItem('userData', JSON.stringify(user))
        window.location = './index.html'
    } catch (error) {
        document.querySelector('form').reset();
        alert(error.message)
    }

}