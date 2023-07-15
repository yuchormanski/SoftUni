# Password

---

The password should be a minimum of eight characters long
It should have at least one lower case letter
It should have at least one upper case letter
It should have at least one number

const regex = new RegExp('^(?=._?[A-Z])(?=._?[a-z])(?=.\*?[0-9]).{8,}$');
const valid = regex.test(control.value);
return valid ? null : { invalidPassword: true };
