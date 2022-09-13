function readFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

const fullName = readFullName("John", "Smith");
console.log(fullName);


function swapElements(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        swap(arr, i, arr.length - 1 - i);
    }
    console.log(arr.join(' '));
    function swap(elements, i, j) {
        let temp = elements[i];
        elements[i] = elements[j];
        elements[j] = temp;
    }
}
swapElements([1, 2, 3, 4, 5])


function solve() {
    let increment = x => x + 1;
    console.log(increment(5));  // 6
}
solve()

function solve2() {
    let increment = function (x) {
        return x + 1;
    }
    console.log(increment(5));
}
solve2()

function solve3() {
    let sum = (a, b) => a + b;
    console.log(sum(5, 6));  // 11
}
solve3()

/* function solve4(a, b, operator) {
    switch (operator) {
      case 'multiply':
        multiply(a, b);
        break;
      //TODO: other cases
    }
    function multiply(a, b) {
        let sum = a * b;
    console.log(sum);
  }
}
solve4(2,3,"multiply") */





