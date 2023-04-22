function sumTable() {
    document.getElementById('sum').textContent == '' ?
        document.getElementById('sum').textContent =
        Array.from(document.querySelectorAll('td'))
            .filter(x => (!isNaN(x.textContent) && x.textContent != ''))
            .map(x => Number(x.textContent))
            .reduce((a, x) => a + x) : null;
}