function solve() {

  const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']
  let right = 0;
  let wrong = 0;
  const sectionElements = Array.from(document.querySelectorAll('section'));

  for (let i = 0; i < sectionElements.length; i++) {
   
    const buttons = sectionElements[i].querySelectorAll('p');

    for (let button of buttons) {
      button.addEventListener('click', (e) =>{
        let answer = e.currentTarget.textContent
        if(rightAnswers.includes(answer)){
          right++;
        }else{
          wrong++;
        }
        sectionElements[i].style.display = 'none';
        sectionElements[i+1].style.display ='block';
        console.log(sectionElements[i]);
         console.log(right, wrong);
      })
    }
    
  }

}


