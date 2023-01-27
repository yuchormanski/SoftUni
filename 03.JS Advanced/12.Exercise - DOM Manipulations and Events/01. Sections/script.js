/* function create(words) {
   let contentElements = document.getElementById('content'); // get divs holder

   for (let el of words) { // for every string of input ...
      let divEl = document.createElement('div');  //create div to store paragraph
      let paragraphEl = document.createElement('p');  //create paragraph
      paragraphEl.style.display = 'none';  // add paragraph style
      paragraphEl.textContent = el;  // set text to paragraph to current string from input
      divEl.appendChild(paragraphEl); //append paragraph to created div
      contentElements.appendChild(divEl); // append created div to divs holder
   }

   let reveal = function (e) {
      // e.target.querySelector('p').style.display = 'block';  //change style on target paragraph
      // OR
      e.target.firstChild.style.display ='block';
   }

   contentElements.addEventListener('click', reveal);
} */

//create(['Section 1', 'Section 2', 'Section 3', 'Section 4'])
function create(words) {

   const content = document.getElementById('content');
   words.forEach(x => {
      const divEl = document.createElement('div');
      const pEl = document.createElement('p');
      pEl.textContent = x;
      pEl.style.display = 'none';
      divEl.appendChild(pEl);
      content.appendChild(divEl);
   });

   content.addEventListener('click', showText);

   function showText(event){
      event.target.querySelector('p').style.display ='block';
   }
}