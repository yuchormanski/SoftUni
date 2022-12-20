function primeNumberChecker(n) {
    let isPrime = true;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
    isPrime === true ? console.log(true) : console.log(false);
}
primeNumberChecker(35)
