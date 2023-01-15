function solve() {

  const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']
  const sectionElements = Array.from(document.querySelectorAll('section'));
  const resultElement = document.querySelector('#results');
  let right = 0;
  let finalAnswer = 'You are recognized as top JavaScript fan!';

  for (let i = 0; i < sectionElements.length; i++) {

    const buttons = sectionElements[i].querySelectorAll('p');

    for (let button of buttons) {
      button.addEventListener('click', (e) => {
        let answer = e.currentTarget.textContent
        if (rightAnswers.includes(answer)) {
          right++;
        }

        if (i + 1 < sectionElements.length) {
          sectionElements[i].style.display = 'none';
          sectionElements[i + 1].style.display = 'block';
        } else {
          sectionElements[i].style.display = 'none';
          resultElement.style.display = 'block';

          if (right < sectionElements.length) {
            finalAnswer = `You have ${right} right answers`
          }
          resultElement.querySelector('h1').textContent = finalAnswer;
        }
      });
    }
  }
}


