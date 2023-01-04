function solve() {

  let input = document.getElementById('input').value.trim();
  let result = document.getElementById('output');
  let sentences = input.split('.').filter(x => x !== '');

  while (sentences.length !== 0) {
    let current = sentences.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = current;
    result.appendChild(p);
  }
}