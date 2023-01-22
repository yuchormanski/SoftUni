function editElement(ref, match, replacer) {
    while(ref.textContent.indexOf(match) !== -1){
        ref.textContent=  ref.textContent.replace(match,replacer)
    }
}