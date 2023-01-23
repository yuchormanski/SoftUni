function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    const userInput = document.getElementById('searchField');
    const fullTable = Array.from(document.querySelectorAll('tbody tr'));

    function onClick() {

        for (let row of fullTable) {
            row.classList.remove('select');
            if (userInput.value !== '' && row.innerHTML.includes(userInput.value)) {
                row.classList.add('select');
            }
        }
        userInput.value = '';
    }
}