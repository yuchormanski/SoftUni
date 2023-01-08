function focused() {
    let boxSelection = document.querySelectorAll('div input');

    // let func = function(e){
    //     e.currentTarget.parentNode.className = 'focused';
    // }

    // for (let el of boxSelection) {
    //     el.addEventListener('mouseover', func);
    //     el.addEventListener('mouseout', (e) => {
    //         e.currentTarget.parentNode.classList.remove('focused');
    //     });
    // }

    for (let el of boxSelection) {
        el.addEventListener('focus', (e) =>{
            e.target.parentNode.className = 'focused';
        })
        el.addEventListener('blur', (e) =>{
            e.target.parentNode.classList.remove('focused');
        })
    }
}