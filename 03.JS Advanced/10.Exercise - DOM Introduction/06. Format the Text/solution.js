function solve() {

  let input = document.getElementById('input').value.trim();
  let result = document.getElementById('output');
  let sentences = input.split('. ');
  let buffer = ``;
  let temp = [];

  while (sentences.length !== 0) {

    for (let i = 0; i < 3 && sentences.length > 0; i++) {

      let current = sentences.shift();
      if (!current.endsWith('.')) {
        temp.push(`${current}.`);
      } else {
        temp.push(`${current}`);
      }
    }
    buffer+=(`<p>${temp.join(' ')}</p>`);
    temp = [];
  };
  result.innerHTML = buffer;
}