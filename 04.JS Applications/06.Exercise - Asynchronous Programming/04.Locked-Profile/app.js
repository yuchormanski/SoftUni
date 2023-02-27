function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const main = document.querySelector('#main');
    const inputElements = document.querySelectorAll('input');
    const profileBlock = document.querySelector('.profile');
    const hiddenPart = document.querySelector('.user1Username');
    hiddenPart.style.display = 'none';
    main.innerHTML = '';


    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const profiles = Object.values(data);
            const [radioLock, radioUnlock, userName, _email, _age] = Array.from(inputElements);
            profiles.forEach((person, i) => {
                let { _id, age, email, username } = person;
                userName.value = username;
                _email.value = email;
                _age.value = age;
                radioLock.checked = true;
                const currentDiv = profileBlock.cloneNode(true);
                currentDiv.addEventListener('click', showMore);
                main.appendChild(currentDiv);
            });

            function showMore(e) {
                if (e.target.tagName === 'BUTTON') {
                    if (!e.target.parentElement.children[2].checked) {
                        let hidden = e.target.parentElement.children[9];
                        if (hidden.style.display === 'block') {
                            hidden.style.display = 'none';
                            e.target.innerText = 'Show more'
                        } else {
                            hidden.style.display = 'block';
                            e.target.innerText = 'Hide it'
                        }
                    }
                }
            }
        })
        .catch(err => console.error(err))
}