function create(words) {
   let contentElements = document.getElementById('content');

   for (let el of words) {
      let divEl = document.createElement('div');
      let paragraphEl = document.createElement('p');
      paragraphEl.style.display = 'none';
      paragraphEl.textContent = el;
      divEl.appendChild(paragraphEl);
      contentElements.appendChild(divEl);
   }

   let reveal = function (e) {
      // e.target.querySelector('p').style.display = 'block';
      // OR
      e.target.firstChild.style.display ='block';
   }

   contentElements.addEventListener('click', reveal);
}