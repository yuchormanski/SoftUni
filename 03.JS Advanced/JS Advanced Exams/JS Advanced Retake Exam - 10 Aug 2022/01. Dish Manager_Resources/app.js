window.addEventListener("load", solve);

function solve() {
  //TODO ....
  const dishButton = document.getElementById('form-btn');
  const inProgressElement = document.getElementById('in-progress');
  const finishedElement = document.getElementById('finished');
  const clearButton = document.getElementById('clear-btn');
  dishButton.addEventListener('click', inProgress);


  const dishInProgress = document.getElementById('progress-count');
  let dishCount = Number(dishInProgress.innerText);

  function inProgress(e) {
    e.preventDefault();

    const dish = {
      firstName: document.getElementById('first-name'),
      lastName: document.getElementById('last-name'),
      age: document.getElementById('age'),
      gender: document.getElementById('genderSelect'),
      description: document.getElementById('task'),
    }
    if (dish.firstName.value === '' ||
      dish.lastName.value === '' ||
      dish.age.value === '' ||
      dish.description.value === '') {
      return;
    }

    const fName = dish.firstName.value;
    const lName = dish.lastName.value;
    const personAge = dish.age.value;
    const personGender = dish.gender.value;
    const desc = dish.description.value;

    const li = elConstructor('li', 'each-line', '');
    const article = elConstructor('article', '', '');
    article.appendChild(elConstructor('h4', '', `${dish.firstName.value} ${dish.lastName.value}`));
    article.appendChild(elConstructor('p', '', `${dish.gender.value}, ${dish.age.value}`));
    article.appendChild(elConstructor('p', '', `Dish description: ${dish.description.value}`));
    li.appendChild(article)
    const editBtn = elConstructor('button', 'edit-btn', 'Edit');
    const completeBtn = elConstructor('button', 'complete-btn', 'Mark as complete');
    li.appendChild(editBtn);
    li.appendChild(completeBtn);
    inProgressElement.appendChild(li);
    dishCount++;
    dishInProgress.innerText = dishCount;

    Object.values(dish).forEach(el => el.value = '');

    editBtn.addEventListener('click', backToEdit);
    completeBtn.addEventListener('click', markComplete);

    function backToEdit() {
      dish.firstName.value = fName;
      dish.lastName.value = lName;
      dish.age.value = personAge;
      dish.gender.value = personGender;
      dish.description.value = desc;
      li.remove();
      dishCount--;
      dishInProgress.innerText = dishCount;
    }

    function markComplete() {
      finishedElement.appendChild(li);
      editBtn.remove();
      completeBtn.remove();
      dishCount--;
      dishInProgress.innerText = dishCount;
    }

    clearButton.addEventListener('click', () => {
      li.remove();
    });
  }

  function elConstructor(type, hasClass, text) {
    const element = document.createElement(type);
    hasClass ? element.className = hasClass : null;
    text ? element.innerText = text : null;
    return element;
  }
}