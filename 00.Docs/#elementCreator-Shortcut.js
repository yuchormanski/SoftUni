function creator(type, attribute, attrValue, textCont) {
    const element = document.createElement(type);
    if (attribute != '') {
        element[attribute] = attrValue;
    }
    if (textCont != '') {
        element.innerText = textCont;
    }
    return element;
}