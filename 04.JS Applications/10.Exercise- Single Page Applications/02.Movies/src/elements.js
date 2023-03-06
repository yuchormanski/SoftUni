// createElement("button", "Delete", 'parentElement', {
//     class: "delete",
//     id: 'id',
//     alt: 'something'
//   })

export function createElement(type, text, parent, attr) {
    const element = document.createElement(type);  // създаваме елемент
    text ? element.innerText = text : null;        // ако има текст го закачаме
    parent? parent.appendChild(element):null;                   // закачаме елемента към родител
    if (Object.keys(attr).length > 0) {            // проверяваме дали има атрибути
        for (let attribute of Object.keys(attr)) {   // итерираме по ключовете, 
            element.setAttribute(attribute,attr[attribute]);       // закачаме ги и им присвояваме стойност
        }
    }
    return parent;
}