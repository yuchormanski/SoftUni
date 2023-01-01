function sumTable() {
    let totalArray = [];
    let sums = document.querySelectorAll('td');
    for (let el of sums) {
        !isNaN(el.textContent) ? totalArray.push(Number(el.textContent)) : null;
    }
    let last = totalArray.pop();
    let total = totalArray.reduce((x, y) => x + y);
    let result = document.querySelector('#sum');
    result.textContent = total;
};