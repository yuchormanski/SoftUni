
    const linkButton = document.getElementById('more');
    const hiddenText = document.getElementById('text');

    linkButton.addEventListener('click', show);


    function show() {
        linkButton.style.display = 'none'
        hiddenText.style.display = 'inline';
    }