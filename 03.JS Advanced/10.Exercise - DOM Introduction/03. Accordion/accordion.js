function toggle() {
    // let actionButton = document.querySelector('.button');
    // OR
    let actionButton = document.getElementsByClassName('button')[0];
    let moreElement = document.querySelector('#extra');
    
    if (actionButton.textContent === 'More') {
        moreElement.style.display = 'block';
        actionButton.textContent = 'Less';
    } else {
        moreElement.style.display = 'none';
        actionButton.textContent = 'More';
    }
}