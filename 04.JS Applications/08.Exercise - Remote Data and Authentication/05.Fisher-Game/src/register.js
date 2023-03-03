const url = `http://localhost:3030/users/register`;
const form = document.querySelector('section #register');
document.querySelector('nav #user').style.display = 'none'; // logout button
document.querySelector('nav #guest #register').style.display = 'none'; // login & reg button


form.addEventListener('submit', regUser);


async function regUser(e) {
    e.preventDefault();

    const formData = new FormData(form);
    // const {email, password, rePass} = Object.fromEntries(formData.entries());
    const { email, password, rePass } = Object.fromEntries(formData);

    try {
        // спредваме formData-та и проверяваме за празни полета
        if (![...formData.values()].every(x => x != '')) {
            throw new Error('All fields are required!'); // ако има празни полета
        }
        if (password != rePass) {
            throw new Error('Passwords didn\'t match!'); // ако не съвпадат паролите
        }

        // API
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) { //ако е неуспешна регистрацията
            const err = await response.json();
            throw new Error(err.message);
        }

        const data = await response.json();

        const user = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        }

        // записваме регистрацията на потребителя в localStorage (перманентно), или в sessionStorage (докато сесията на браузъра е отворена)
        localStorage.setItem('userData', JSON.stringify(user));

        // пренасочваме към началната страница
        window.location = './index.html';

    } catch (error) {
        alert(error.message);  // съобщение за грешката
        form.reset();  // чистим полетата
    }
}