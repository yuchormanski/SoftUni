window.addEventListener('load', solution);

function solution() {

  const infoPreview = document.getElementById('infoPreview');
  const nameField = document.getElementById('fname');
  const emailField = document.getElementById('email');
  const phoneField = document.getElementById('phone');
  const addressField = document.getElementById('address');
  const postCodeField = document.getElementById('code');
  const submitBtn = document.getElementById('submitBTN');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');
  submitBtn.addEventListener('click', previewInfo);

  function previewInfo(e) {

    editBtn.addEventListener('click', editInfo);
    continueBtn.addEventListener('click', haveA_NiceFlight);

    const userFullName = nameField.value;
    const userEmail = emailField.value;
    const userPhone = phoneField.value;
    const userAddress = addressField.value;
    const userPostCode = postCodeField.value;

    if(userFullName === '' || userEmail === '') return;

    const name = creator('li', `Full Name: ${userFullName}`);
    const email = creator('li', `Email: ${userEmail}`);
    const phone = creator('li', `Phone Number: ${userPhone}`);
    const address = creator('li', `Address: ${userAddress}`);
    const pCode = creator('li', `Postal Code: ${userPostCode}`);
    infoPreview.appendChild(name);
    infoPreview.appendChild(email);
    infoPreview.appendChild(phone);
    infoPreview.appendChild(address);
    infoPreview.appendChild(pCode);

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    nameField.value = '';
    emailField.value = '';
    phoneField.value = '';
    addressField.value = '';
    postCodeField.value = '';

    function editInfo() {

      nameField.value = userFullName;
      emailField.value = userEmail;
      phoneField.value = userPhone;
      addressField.value = userAddress;
      postCodeField.value = userPostCode;

      Array.from(infoPreview.querySelectorAll('li')).forEach(li => li.remove());

      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;
    }

    function haveA_NiceFlight() {
      const divBlock = document.getElementById('block');
      Array.from(divBlock.childNodes).forEach(el => el.remove());
      divBlock.appendChild(creator('h3', 'Thank you for your reservation!'));
    }
  }

  function creator(type, text) {
    const element = document.createElement(type);
    element.innerText = text;
    return element;
  }
}
