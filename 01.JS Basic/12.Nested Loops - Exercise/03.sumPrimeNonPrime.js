function sumPrimeNonPrime(input) {
    let index = 0;
    let current = Number(input[index]);
    let primeSum = 0;
    let nonPrimeSum = 0;
    let isPrime = true;

    while (current !== "stop") {
        current = Number(input[index]);
        for (let i = 2; i < current; i++) {
            if (current % i === 0) {
                nonPrimeSum += current;
                isPrime = false;
                break;
            }
        }
        if (current < 0) {
            console.log(`Number is negative.`);
            index++;
            current = input[index];
        } else {
            if (isPrime) {
                primeSum += current;
                index++
                current = input[index];
            } else {
                index++
                current = input[index];
                isPrime = true;
            }
        }
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
sumPrimeNonPrime(["3","9","0","7","19","4","stop"])


