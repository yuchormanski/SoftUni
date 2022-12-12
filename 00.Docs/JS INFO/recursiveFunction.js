function countDown(baseNumber) {
    console.log(baseNumber);
    let nextNumber = baseNumber - 1;
    // The count down will stop when the next number is zero.
    if (nextNumber > 0) {
      countDown(nextNumber); // function will use the new property from nextNumber
    }
  }
  countDown(3);
  
  // https://javascripttutorial.net/javascript-recursive-function