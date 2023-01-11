function lockedProfile() {
    let usersList = document.querySelectorAll('.profile');

    for (let user of usersList) {
        user.children[10].addEventListener('click', showMore);
    }

    function showMore(e) {
        let statusUnlock = e.currentTarget.parentNode.children[4];
        let hiddenDiv = e.currentTarget.parentNode.children[9];

        if (statusUnlock.checked) {
            if (e.currentTarget.textContent == 'Show more') {
                hiddenDiv.style.display = 'block';
                e.currentTarget.textContent = 'Hide it'
            } else {
                hiddenDiv.style.display = 'none';
                e.currentTarget.textContent = 'Show more'
            }
        }
    }
}