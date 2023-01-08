function validate() {
    let inputEmail = document.getElementById('email');

    let regex = /\b([a-z]+@[a-z]+\.[a-z]+)\b/g;
    
    inputEmail.addEventListener('change', (e) => {
        if(e.target.value.match(regex)){
            e.target.classList.remove('error');
        } else {
            e.target.classList.add('error');
        }
    });
}