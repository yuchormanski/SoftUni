function getArticleGenerator(articles) {
    // TODO
    let arrCopy = Array.from(articles);
    const div = document.getElementById('content');

    return () => {
        if(!arrCopy.length){
            return;
        }
        let current = arrCopy.shift();
        div.innerHTML += `<article>${current}</article>`

    }
    div.appendChild(line)
}
