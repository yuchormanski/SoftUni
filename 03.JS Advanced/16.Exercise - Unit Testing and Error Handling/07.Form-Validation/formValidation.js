function validate() {

    const checkbox = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const validDiv = document.getElementById('valid');
    const submitBtn = document.getElementById('submit')

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    })

    submitBtn.addEventListener('click', validation);

    function validation(e) {
        e.preventDefault();
        const userRegex = /\b([A-Za-z0-9]{3,20})\b/;
        const passRegex = /\b([\w]{5,15})\b/;
        const emailRegex = /\w+(@)\w+(\.)\w+/;

        const obj = {
            username: document.getElementById('username'),
            email: document.getElementById('email'),
            pass: document.getElementById('password'),
            confPass: document.getElementById('confirm-password'),
            companyInfo: document.getElementById('companyInfo'),
            companyNumber: document.getElementById('companyNumber'),
        }

        let isUser = false; let isPass = false; let isConfPass = false; let passConf = false;
        let isEmail = false; let isCompNum = false;

        if (!obj.username.value.match(userRegex) || obj.username.value.match(userRegex) === '') {
            obj.username.style.borderColor = 'red'
        }
         else {
            obj.username.style.borderColor = ''
            isUser = true;
        }

        if (!obj.pass.value.match(passRegex) || obj.pass.value.match(passRegex) === '') {
            obj.pass.style.borderColor = 'red';
        }
         else {
            obj.pass.style.borderColor = ''
            isPass = true;
        }

        if (!obj.confPass.value.match(passRegex) || obj.confPass.value.match(passRegex) === '') {
            obj.confPass.style.borderColor = 'red';
        }
         else {
            obj.confPass.style.borderColor = ''
            isConfPass = true;
        }

        if (obj.pass.value !== obj.confPass.value) {
            obj.pass.style.borderColor = 'red';
            obj.confPass.style.borderColor = 'red';

        }
         else {
            obj.pass.style.borderColor = '';
            obj.confPass.style.borderColor = '';
            passConf = true;
        }

        if (!obj.email.value.match(emailRegex) || obj.email.value.match(emailRegex) === '') {
            obj.email.style.borderColor = 'red';
        }
         else {
            obj.email.style.borderColor = '';
            isEmail = true;
        }

        if (checkbox.checked) {
            let num = obj.companyNumber.value;
            num = Number(num);
            console.log(typeof num);
            if (num < 1000 || num > 9999 ) {
                obj.companyNumber.style.borderColor = 'red';
            }
             else {
                obj.companyNumber.style.borderColor = '';
                isCompNum = true;
            }
        }
        if (isUser && isEmail && isPass && isConfPass && passConf && isCompNum) { // || isCompNum  || passConf || 
            validDiv.style.display = 'block';
        } 
    }
}
