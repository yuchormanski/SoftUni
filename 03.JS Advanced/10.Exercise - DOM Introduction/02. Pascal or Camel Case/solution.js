function solve() {
  let inputText = document.querySelector('#text').value;
  let convention = document.getElementById('naming-convention').value;
  let toArray = inputText.toLowerCase().split(' ');
  let result = [];

  if (convention === 'Camel Case') {
    result.push(toArray.shift());
    toArray.forEach(element => {
      let firstLetter = element.slice(0, 1).toUpperCase();
      let restLetters = element.slice(1);
      let word = firstLetter + restLetters;
      result.push(word);
    });
    result = result.join('');
  } else if (convention === 'Pascal Case') {
    toArray.forEach(element => {
      let firstLetter = element.slice(0, 1).toUpperCase();
      let restLetters = element.slice(1);
      let word = firstLetter + restLetters;
      result.push(word);
    });
    result = result.join('');
  } else {
    result = 'Error!'
  }

  let resultElement = document.getElementById('result');
  resultElement.textContent = result;
}