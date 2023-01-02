function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let search = document.querySelector('#searchField').value;
      let tableRow = document.querySelectorAll('table.container tbody tr');

      for (let element of tableRow) {
         element.classList.remove('select');
         if (element.textContent.includes(search)) {
            element.className = 'select';
         }
      }
      search = '';
   }
}