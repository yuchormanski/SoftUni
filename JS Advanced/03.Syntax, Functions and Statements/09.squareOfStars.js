function squareOfStars(n){
    let star = '* ';
    for(let i = 0; i < n; i++){
        console.log(star.repeat(n).trim());
    }
}
squareOfStars(5)