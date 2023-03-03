const register = document.getElementById('register-view');
const main = document.querySelector('main');
const url = `http://localhost:3030/users/register`;
const form = document.querySelector('form#register');

export function registerFunc() {
    main.replaceChildren(register);
    form.querySelector('button').addEventListener('click', reg);

    async function reg(e) {
        e.preventDefault();
        const formData = new FormData(form);

        const { email, password, rePass } = Object.fromEntries(formData.entries());;

        try {
            if (password != rePass) {
                const error = 'Password didn\'t match!';
                throw new Error(error);
            }

        }
        catch (err) {
            console.log(err);
        }
    }



}

