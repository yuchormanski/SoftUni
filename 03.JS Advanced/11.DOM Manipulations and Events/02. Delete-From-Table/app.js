function deleteByEmail() {
    let emailInputElement = document.querySelector('input[name="email"]');
    let emailCellElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let resultElement = document.getElementById('result');

    let emailElements = Array.from(emailCellElements);
    let targetEmail = emailElements.find(x => x.textContent === emailInputElement.value);
    if (targetEmail) {
        targetEmail.parentNode.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }

    // for (let el of emailCellElements) {
    //     if (el.textContent === emailInputElement.value) {
    //         el.parentNode.remove();
    //         resultElement.textContent = 'Deleted.';
    //         break;
    //     } else {
    //         resultElement.textContent = 'Not found.';
    //     }
    // }
}

    // targetEmail.parentNode.removeChild(targetEmail); //old way
    // targetEmail.remove(); // remove just element