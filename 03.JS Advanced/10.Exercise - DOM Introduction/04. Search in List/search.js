function search() {
   let listItems = document.querySelectorAll('#towns li');
   let searchElement = document.querySelector('#searchText').value;
   let resultDiv = document.querySelector('#result');


   for(let el of listItems){
      el.style.textDecoration = 'none';
      el.style.fontWeight = 'normal';
   };

   let matchCounter = 0;

   for (let el of listItems) {
      if (el.textContent.includes(searchElement)) {
         el.style.textDecoration = 'underline';
         el.style.fontWeight = 'bold';
         matchCounter++;
      }
   }
   resultDiv.textContent = `${matchCounter} matches found`;
}