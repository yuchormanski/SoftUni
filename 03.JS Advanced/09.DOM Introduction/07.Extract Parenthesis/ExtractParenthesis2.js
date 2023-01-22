function extract(id){
    const text = document.getElementById(id);
    let regex = new RegExp(/(?:\()[A-Za-z\s]+(?:\))/,'g');
    let arr = text.textContent.match(regex);
    let result = [];
    for(let el of arr){
        result.push(el.slice(1,-1))
    }
    return result.join('; ')
}