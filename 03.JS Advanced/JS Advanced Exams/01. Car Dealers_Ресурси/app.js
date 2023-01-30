window.addEventListener("load", solve);

function solve() {

  const brand = document.getElementById('make');
  const model = document.getElementById('model');
  const year = document.getElementById('year');
  const fuel = document.getElementById('fuel');
  const oldPrice = document.getElementById('original-cost');
  const newPrice = document.getElementById('selling-price');
  const publishButton = document.getElementById('publish');
  publishButton.type = 'button'; //change type for task writing

  publishButton.addEventListener('click', preview)

  const table = document.getElementById('table-body');

  function preview() {
    //field validation

    // if (brand.value === ''
    //   || model.value === ''
    //   || year.value === ''
    //   || oldPrice.value === ''
    //   || newPrice.value === ''
    //   || oldPrice.value >= newPrice.value) {
    //   return;
    // };

    let carBrand = brand.value;
    let carModel = model.value;
    let carYear = year.value;
    let carOldPrice = oldPrice.value;
    let carNewPrice = newPrice.value;
    let carFuel = fuel.value;

    const data = [carBrand, carModel, carYear, carFuel, carOldPrice, carNewPrice]

    //create elements
    const tRow = document.createElement('tr');
    tRow.className = 'row'

    for (let el of data) {
      const td = document.createElement('td');
      td.textContent = el;
      tRow.appendChild(td);
    }

    //create buttons
    const td = document.createElement('td');
    const editBtn = document.createElement('button');
    editBtn.className = 'action-btn edit';
    editBtn.textContent = 'Edit';

    const sellBtn = document.createElement('button');
    sellBtn.className = 'action-btn sell';
    sellBtn.textContent = 'Sell';
    td.appendChild(editBtn);
    td.appendChild(sellBtn);
    tRow.appendChild(td);

    table.appendChild(tRow);

    brand.value = '';
    model.value = '';
    year.value = '';
    fuel.value = '';
    oldPrice.value = '';
    newPrice.value = '';
    publishButton.disabled = true;

    editBtn.addEventListener('click', edit);
    sellBtn.addEventListener('click', sell);
  

  function edit(){
    brand.value = carBrand;
    model.value = carModel;
    year.value = carYear;
    fuel.value = carFuel;
    oldPrice.value = carOldPrice;
    newPrice.value = carNewPrice;
    publishButton.disabled = false;
    tRow.remove()

  }
  function sell(){
    console.log('sell');
  }
  }
}
