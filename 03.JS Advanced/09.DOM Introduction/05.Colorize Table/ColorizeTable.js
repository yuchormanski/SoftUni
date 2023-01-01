function colorize() {
    // let row = document.querySelectorAll('tr');
    // for (let i = 0; i < row.length; i++) {
    //     i % 2 !== 0 ? row[i].style.background = "Teal" : null;
    // }

    // let i = 0;
    // for (let el of row) {
    //     i++ % 2 !== 0 ? el.style.background = "Teal" : null;
    // }

    let row = document.querySelectorAll('tr:nth-of-type(2n) td');
    row.forEach(x => x.style.backgroundColor = 'teal');

}