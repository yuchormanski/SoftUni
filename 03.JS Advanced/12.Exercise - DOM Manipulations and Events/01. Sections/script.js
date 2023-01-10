function create(words) {
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
}