
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

function creator(elType, elAttribute, attrValue, elementText) {
    const element = document.createElement(elType);
    elAttribute ? element[elAttribute] = attrValue : null;
    elementText ? element.innerText = elementText : null;
    return element;
}