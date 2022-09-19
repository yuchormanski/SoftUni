(function() {
  const myArray = [];

  (function initializeArray() {
    const values = document.querySelectorAll('.value');

    values.forEach((elRef, i) => {
      const randomNum = Math.ceil(Math.random() * 20);
      myArray.push(randomNum);
      
      elRef.textContent = myArray[i];
    });
  })();

  const arrayContainer = document.getElementById('array-container');
  const arrayBlocks = document.getElementsByClassName('block');

  // Btn refs
  const indexOfBtn = document.getElementById('btn-index-of');
  const includesBtn = document.getElementById('btn-includes');
  const pushBtn = document.getElementById('btn-push');
  const unshiftBtn = document.getElementById('btn-unshift');
  const popBtn = document.getElementById('btn-pop');
  const shiftBtn = document.getElementById('btn-shift');
  const sliceBtn = document.getElementById('btn-slice');
  const removeCountBtn = document.getElementById('btn-remove');
  const insertAtBtn = document.getElementById('btn-insert-at');

  // Input refs
  const indexOfInput = document.getElementById('input-index-of');
  const includesInput = document.getElementById('input-includes');
  const pushInput = document.getElementById('input-push');
  const unshiftInput = document.getElementById('input-unshift');
  const sliceStartInput = document.getElementById('input-slice-start');
  const sliceEndInput = document.getElementById('input-slice-end');
  const removeStartInput = document.getElementById('input-remove-start');
  const removeCountInput = document.getElementById('input-remove-count');
  const insertStartInput = document.getElementById('input-insert-start');
  const insertValueInput = document.getElementById('input-insert-value');

  (function attachEventListeners() {
    indexOfBtn.addEventListener('click', indexOfHandler);
    includesBtn.addEventListener('click', includesHandler);
    pushBtn.addEventListener('click', pushHandler);
    unshiftBtn.addEventListener('click', unshiftHandler);
    popBtn.addEventListener('click', popHandler);
    shiftBtn.addEventListener('click', shiftHandler);
    sliceBtn.addEventListener('click', sliceHandler);
    removeCountBtn.addEventListener('click', removeCountHandler);
    insertAtBtn.addEventListener('click', insertAtHandler);
  })();

  function indexOfHandler() {
    let num = Number(indexOfInput.value);
    let index = myArray.indexOf(num);

    alert(`The index of ${num} is ${index}!`);
  }

  function includesHandler() {
    let num = Number(includesInput.value);
    let isIncluded = myArray.includes(num);

    alert(`The number ${num} is ${isIncluded ? 'included' : 'not included'}`);
  }

  function pushHandler() {
    if (myArray.length === 10) {
      alert('Cannot add more than 10 elements');
      return;
    }

    let num = Number(pushInput.value);
    myArray.push(num);

    pushNumToContainer(num);
  }

  function unshiftHandler() {
    if (myArray.length === 10) {
      alert('Cannot add more than 10 elements');
      return;
    }

    let num = Number(unshiftInput.value);
    myArray.unshift(num);
    unshiftArrayContainer(num);
  }

  function popHandler() {
    if (myArray.length === 0) {
      alert('Cannot remove any more elements');
      return;
    }

    myArray.pop();
    arrayBlocks.item(arrayBlocks.length - 1).remove();
  }

  function shiftHandler() {
    if (myArray.length === 0) {
      alert('Cannot remove any more elements');
      return;
    }

    myArray.shift();
    arrayBlocks.item(0).remove();
  }

  function sliceHandler() {
    if (myArray.length === 0) {
      alert('Cannot slice on empty array');
      return;
    }

    let startIndex = Number(sliceStartInput.value);
    let endIndex = Number(sliceEndInput.value);

    if (endIndex) {
      if (endIndex > startIndex) {
        let sliced = myArray.slice(startIndex, endIndex);
        alert(`The returned portion is ${sliced.join(' ')}`);
      } else {
        alert('The end index must be larger than the start index');
      }
    } else {
      let sliced = myArray.slice(startIndex);
      alert(`The returned portion is ${sliced.join(' ')}`);
    }
  }

  function removeCountHandler() {
    if (myArray.length === 0) {
      alert('Cannot remove from an empty array');
      return;
    }

    let startIndex = Number(removeStartInput.value);
    let count = Number(removeCountInput.value);

    if (startIndex < 0 || startIndex >= myArray.length) {
      alert('The start index must be in range');
    }

    if (count < 1) {
      alert('The count must be atleast one');
      return;
    }

    myArray.splice(startIndex, count);
    let deleteCount = Math.min(arrayBlocks.length, count);

    while(deleteCount > 0) {
      arrayBlocks.item(startIndex).remove();
      deleteCount--;
    }
  }

  function insertAtHandler() {
    if (myArray.length === 10) {
      alert('Cannot add more than 10 elements');
      return;
    }

    let insertIndex = Number(insertStartInput.value);
    let value = Number(insertValueInput.value);

    if (insertIndex < 0 || insertIndex >= myArray.length) {
      alert('Insert index is not in range');
      return;
    }

    myArray.splice(insertIndex, 0, value);
    insertAtArrayContainer(insertIndex, value);
  }

  function pushNumToContainer(num) {
    let div = document.createElement('div');
    div.className = 'block';
    let span = document.createElement('span');
    span.className = 'value';
    span.textContent = num;

    div.appendChild(span);
    arrayContainer.appendChild(div);
  }

  function unshiftArrayContainer(num) {
    let div = document.createElement('div');
    div.className = 'block';
    let span = document.createElement('span');
    span.className = 'value';
    span.textContent = num;
    div.appendChild(span);

    let firstNumDiv = arrayBlocks.item(0);
    arrayContainer.insertBefore(div, firstNumDiv);
  }

  function insertAtArrayContainer(index, num) {
    let div = document.createElement('div');
    div.className = 'block';
    let span = document.createElement('span');
    span.className = 'value';
    span.textContent = num;
    div.appendChild(span);

    arrayContainer.insertBefore(div, arrayBlocks.item(index));
  }

})();