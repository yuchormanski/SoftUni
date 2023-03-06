
// element type, element attribute - if amy, attribute value- if attribute, element text - if any

function creator(elType, elAttribute, attrValue, elementText) {
  const element = document.createElement(elType);
  if (elAttribute != '') {
    element[elAttribute] = attrValue;
  }
  if (elementText != '') {
    element.innerText = elementText;
  }
  return element;
}


//---------------------------------------------



function creator(elType, elAttribute, attrValue, elementText) {
  const element = document.createElement(elType);
  elAttribute ? element[elAttribute] = attrValue : null;
  elementText ? element.innerText = elementText : null;
  return element;
}



// -------------------------------

createElement("button", "Delete", 'parentElement', {
  class: "delete",
  id: 'id',
  alt: 'something'
})

function createElement(type, text, parent, attr) {
  const element = document.createElement(type);  // създаваме елемент
  text ? element.innerText = text : null;        // ако има текст го закачаме
  parent.appendChild(element);                   // закачаме елемента към родител
  if (Object.keys(attr).length > 0) {            // проверяваме дали има атрибути
    for (let attribute of Object.keys(attr)) {   // итерираме по ключовете, 
      element.attribute = attr[attribute];       // закачаме ги и им присвояваме стойност
    }
  }
}


