function coins(input) {
    let sum = Number(input[0]) * 100;
    sum = Math.floor(sum)
    let counter = 0;
    while (sum > 0) {
        sum >= 200 ? (sum -= 200, counter++) :
            sum >= 100 ? (sum -= 100, counter++) :
                sum >= 50 ? (sum -= 50, counter++) :
                    sum >= 20 ? (sum -= 20, counter++) :
                        sum >= 10 ? (sum -= 10, counter++) :
                            sum >= 5 ? (sum -= 5, counter++) :
                                sum >= 2 ? (sum -= 2, counter++) :
                                    sum >= 1 ? (sum -= 1, counter++) : null;
    }
    console.log(counter);
}
coins(["0.56"])