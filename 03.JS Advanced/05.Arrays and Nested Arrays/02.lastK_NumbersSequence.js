function lastK_NumbersSequence(n, k) {
    let numArray = [];
    numArray[0] = 1;

    for (let i = 0; i < n - 1; i++) {
        let tempSum = 0;
        tempSum += numArray[i]
        for (let j = 1; j < k; j++) {
            if (numArray[i - j] !== undefined) {
                tempSum += numArray[i - j];
            }
        }
        numArray[i + 1] = tempSum;
    }
    console.log(numArray);
}
lastK_NumbersSequence(6, 3);
// lastK_NumbersSequence(8, 2);