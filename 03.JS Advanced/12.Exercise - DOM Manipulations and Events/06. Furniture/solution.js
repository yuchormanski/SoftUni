function solve() {

  const mainArea = document.getElementById('exercise');

  const textElements = Array.from(mainArea.querySelectorAll('textarea'));
  const inputElement = textElements[0];
  const outputElement = textElements[1];

  const buttons = Array.from(mainArea.querySelectorAll('button'));
  const generateButton = buttons[0];
  generateButton.addEventListener('click', generate);
  const buyButton = buttons[1];
  buyButton.addEventListener('click', buy);

  const tableBody = document.querySelector('tbody');

  function generate() {
    let dataJSON = JSON.parse(inputElement.value)

    for (let el of dataJSON) {

      let addTableRow = document.createElement('tr');

      let addDataImg = document.createElement('td');
      let dataImg = document.createElement('img');
      dataImg.setAttribute('src', '');
      dataImg.src = el.img;
      addDataImg.appendChild(dataImg);

      let addDataItem = document.createElement('td');
      let itemP = document.createElement('p');
      itemP.textContent = el.name;
      addDataItem.appendChild(itemP);

      let addDataPrice = document.createElement('td');
      let priceP = document.createElement('p');
      priceP.textContent = el.price;
      addDataPrice.appendChild(priceP);

      let addDataDecFac = document.createElement('td');
      let dacFacP = document.createElement('p');
      dacFacP.textContent = el.decFactor;
      addDataDecFac.appendChild(dacFacP);

      let addDataCheckbox = document.createElement('td');
      let dataCheckBox = document.createElement('input');
      dataCheckBox.setAttribute('type', 'checkbox');
      addDataCheckbox.appendChild(dataCheckBox);

      addTableRow.append(addDataImg, addDataItem, addDataPrice, addDataDecFac, addDataCheckbox);
      tableBody.appendChild(addTableRow);
    }
  }

  function buy() {
    let totalPrice = 0;
    let dFactor = [];
    const outputArray = [];
    let rows = Array.from(tableBody.querySelectorAll('tr'));

    for (let currentRow of rows) {
      const inputCheck = currentRow.querySelector('input');
      if (inputCheck.checked) {
        let item = currentRow.children[1].textContent;
        outputArray.push(item);
        totalPrice += Number(currentRow.children[2].textContent);
        dFactor.push(Number(currentRow.children[3].textContent) * 100 / 100);
      }
    }
    let averageDecFactor = dFactor.reduce((a, b) => (a + b) / dFactor.length);
    outputElement.textContent = `Bought furniture: ${outputArray.join(', ')}\nTotal price: ${totalPrice}\nAverage decoration factor: ${averageDecFactor}`;
  }
}

/*
[
    {
        "img":"https://www.ikea.com/PIAimages/0447583_PE597395_S5.JPG",
        "name": "Sofa",
        "price": "259",
        "decFactor":"0.4"

    },
    {
        "img":"https://www.stylespafurniture.com/wp-content/uploads/2020/03/Cove_3_Door_Wardrobe_1.jpg",
        "name": "Wardrobe",
        "price": "120",
        "decFactor":"1.2"
    }
]

*/