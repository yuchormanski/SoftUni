function validate() {
    const inputField = document.getElementById('email');
    inputField.addEventListener('change', (e) => {
        const regex = /([a-z]+)(@)([a-z]+)(\.)([a-z]+)/g;
        let email = inputField.value;
        if (!email.match(regex)) {
            inputField.className = 'error';
        } else {
            inputField.className = '';
        }
    })
}