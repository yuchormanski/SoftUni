function extractText() {
    const ulId = document.getElementById('items').children;
    const elementArray = Array.from(ulId);
    const textArea = document.getElementById('result');
    let output = [];
    for (let li of elementArray) {
        output.push(li.textContent);
    }
    textArea.textContent = output.join('\n')
}