window.addEventListener("load", solve);

function solve() {

  const publishButton = document.getElementById('publish');
  const tableBody = document.getElementById('table-body');
  const profitTotal = document.getElementById('profit');
  const sellElementUl = document.getElementById('cars-list');


  publishButton.addEventListener('click', toTable);


  function toTable(e) {
    e.preventDefault();

    const car = {
      make: document.getElementById('make'),
      model: document.getElementById('model'),
      year: document.getElementById('year'),
      fuel: document.getElementById('fuel'),
      originalCost: document.getElementById('original-cost'),
      sellingPrice: document.getElementById('selling-price')
    }
    if (car.make.value === '' ||
      car.model.value === '' ||
      car.year.value === '' ||
      car.fuel.value === '' ||
      car.originalCost.value === '' ||
      car.sellingPrice.value === '' ||
      car.originalCost.value > car.sellingPrice.value) {
      return;
    }

    let currentProfit = 0;

    const tr = factory('tr', ['row'], '');
    tr.appendChild(factory('td', '', `${car.make.value}`));
    tr.appendChild(factory('td', '', `${car.model.value}`));
    tr.appendChild(factory('td', '', `${car.year.value}`));
    tr.appendChild(factory('td', '', `${car.fuel.value}`));
    tr.appendChild(factory('td', '', `${car.originalCost.value}`));
    tr.appendChild(factory('td', '', `${car.sellingPrice.value}`));

    const tdBtn = factory('td', '', '');
    const editBtn = factory('button', ['action-btn', 'edit'], 'Edit');
    const sellBtn = factory('button', ['action-btn', 'sell'], 'Sell');
    tdBtn.appendChild(editBtn);
    tdBtn.appendChild(sellBtn);
    tr.appendChild(tdBtn);
    tableBody.appendChild(tr);

    editBtn.addEventListener('click', editOffer);
    sellBtn.addEventListener('click', sellCar);

    Object.values(car).forEach(el => el.value = '');

    function editOffer(e) {
      const currentParent = e.target.parentElement.parentElement;
      const tdData = Array.from(currentParent.querySelectorAll('td'));
      car.make.value = tdData[0].innerText;
      car.model.value = tdData[1].innerText;
      car.year.value = tdData[2].innerText;
      car.fuel.value = tdData[3].innerText;
      car.originalCost.value = tdData[4].innerText;
      car.sellingPrice.value = tdData[5].innerText;
      tr.remove();
    }

    function sellCar(e) {
      const currentParent = e.target.parentElement.parentElement;
      const tdData = Array.from(currentParent.querySelectorAll('td'));
      tr.remove();

      currentProfit = (tdData[5].innerText * 1) - (tdData[4].innerText * 1);
      console.log(currentProfit);
      const li = factory('li', ['each-list'], '');
      li.appendChild(factory('span', '', `${tdData[0].innerText} ${tdData[1].innerText}`))
      li.appendChild(factory('span', '', `${tdData[2].innerText}`))
      li.appendChild(factory('span', '', currentProfit))
      sellElementUl.appendChild(li);
      let currentTotal = Number(profitTotal.innerText) + currentProfit;
      profitTotal.innerText = currentTotal.toFixed(2);
    }

    function factory(type, className, text) {
      const element = document.createElement(type);
      if (className) {
        element.classList.add(...className);
      }
      if (text) {
        element.innerText = text;
      }
      return element;
    }
  }
}
