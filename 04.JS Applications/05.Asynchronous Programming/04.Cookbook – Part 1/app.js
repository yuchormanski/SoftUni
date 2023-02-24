window.onload = menu();
function menu() {
    const URL = 'http://localhost:3030/jsonstore/cookbook/recipes';  // взимаме връзка към репото
    const main = Array.from(document.getElementsByTagName('main'))[0];  // елемента , в който ще се съхранява информацията
    const removeP = document.querySelector('p');  // елемент , индикиращ зареждане на инфото, ще бъде премахнат

    fetch(URL)
        .then(result => result.json())   // then връща json , парсваме го към стринг
        .then(receptData => {   // полученият резултат - обект
            const currentArr = Object.entries(receptData);  // обръщаме го в масив , за итериране
            currentArr.forEach(el => {  // за всеки елемент 
                let { _id, img, name } = el[1];  // разделяме го на компоненти

                // създаваме необходимите елементи и им закачаме данните от текущия итериран ред на обекта
                const article = creator('article', 'className', 'preview', '');
                const divTitle = creator('div', 'className', 'title', '');
                const h2Name = creator('h2', '', '', name);
                divTitle.appendChild(h2Name);
                article.appendChild(divTitle);
                const divSmall = creator('div', 'className', 'small', '');
                const theImg = creator('img', 'src', img, '');
                divSmall.appendChild(theImg);
                article.appendChild(divSmall);
                main.appendChild(article);
                //край на създаване на елементи

                removeP.remove(); // премахваме индикиращ  зареждане на инфото
                article.addEventListener('click', viewRecept); //закачаме слушател

                function viewRecept() {
                    const infoURL = `http://localhost:3030/jsonstore/cookbook/details/${_id}`;  //взимаме връзк към репото на избрания артикул по id

                    fetch(infoURL)
                        .then(res => res.json())
                        .then(currentData => {
                            main.innerHTML = '';   // изчистваме елемента за визуализация на информацията
                            //създаваме необходимите елементи
                            const article = creator('article', '', '', '');
                            article.appendChild(h2Name);  // h2Name е в кложер
                            const bandDiv = creator('div', 'className', 'band', '');
                            const thumbDiv = creator('div', 'className', 'thumb', '');
                            thumbDiv.appendChild(theImg);  // theImg е в кложер
                            bandDiv.appendChild(thumbDiv);

                            const ingredientsDiv = creator('div', 'className', 'ingredients', '');
                            ingredientsDiv.appendChild(creator('h3', '', '', 'Ingredients:'));
                            const ul = creator('ul', '', '', '');
                            currentData.ingredients.forEach(ing => {     // итерираме по съставките и създаваме елементи с тях
                                ul.appendChild(creator('li', '', '', ing));
                            })
                            ingredientsDiv.appendChild(ul);
                            bandDiv.appendChild(ingredientsDiv);

                            article.appendChild(bandDiv);
                            const descriptionDiv = creator('div', 'className', 'description', '');
                            descriptionDiv.appendChild(creator('h3', '', '', 'Preparation:'));
                            currentData.steps.forEach(step => {    // итерираме по стъпките за приготовление и  създаваме елементи с инфо от тях
                                descriptionDiv.appendChild(creator('p', '', '', step));
                            })
                            article.appendChild(descriptionDiv);
                            main.appendChild(article);
                        });
                }
            })
        });
}


// конструктор на елементи
function creator(elType, elAttribute, attrValue, elementText) {
    const element = document.createElement(elType);
    elAttribute ? element[elAttribute] = attrValue : null;
    elementText ? element.innerText = elementText : null;
    return element;
}