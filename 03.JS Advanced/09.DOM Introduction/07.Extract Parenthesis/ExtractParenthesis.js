function extract(content) {
    let text = document.getElementById(content).textContent;
    let regex = /(?:\()(?<word>[A-Za-z\s]+)(?:\))/gm;
    let all = [];
    let res = regex.exec(text);
    while(res !== null){
        all.push(res.groups['word']);
        res = regex.exec(text);
    }
    let result = all.join('; ')
    return result;
}
