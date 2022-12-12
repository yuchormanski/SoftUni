function bonusScore(n) {
    let bonus = 0;
    n <= 100? bonus = 5:n <= 1000? bonus = n * 0.2:n > 1000? bonus = n * 0.10: null;
    n % 2 === 0 ? bonus += 1 :n % 10 === 5 ? bonus += 2 : null;  
    console.log(bonus);
    console.log(Number(n) + bonus);
}
bonusScore(["2703"])