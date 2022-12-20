function rectangle() {
    for (let i = 1; i <= 10; i++) {
        let b = "";
        for (let j = 1; j <= 10; j++) {
            b += `*`
        }
        if (i % 2 === 0) {
            console.log(b);
        } else {
            console.log(b);
        }
    }
}
// rectangle()

function printSq(input) {
    let a = Number(input[0])

    for (let j = 1; j <= a; j++) {
        if (j % 2 === 0) {
            console.log(`* `.repeat(a));
        } else {
            console.log(`* `.repeat(a));
        }

    }
}
//printSq(["4"]);

function triangleOfDollars(input) {
    let a = Number(input[0]);
    let b = "";

    for (let j = 1; j <= a; j++) {
        b += `$ `;
        console.log(b);
    }
}
//triangleOfDollars(["5"])

function squareFrame(input) {
    let n = Number(input[0])
    console.log("+" + " " + "- ".repeat(n - 2) + "+");
    for (let i = 1; i <= n - 2; i++) {
        if (i % 2 === 0) {
            console.log("|" + " " + "- ".repeat(n - 2) + "|");
        } else {
            console.log("|" + " " + "- ".repeat(n - 2) + "|");
        }
    }
    console.log("+" + " " + "- ".repeat(n - 2) + "+");
}
squareFrame(["5"])

function rhombusOfStars(input) {
    let n = Number(input[0]);
    let buf = "";

    for (let row = 1; row <= n; row++) {
        for (let col = n; col > row; col--) {
            buf += ` `;
        }
        buf += `*`;
        for (let k = 1; k <= row - 1; k++) {
            buf += ` *`;
        }
        console.log(buf);
        buf = "";
    }
    for (let row = n - 1; row >= 1; row--) {
        for (let col = n; col > row; col--) {
            buf += ` `;
        }
        buf += `*`;
        for (let k = 1; k <= row - 1; k++) {
            buf += ` *`;
        }
        console.log(buf);
        buf = "";
    }
}
//rhombusOfStars(["4"])