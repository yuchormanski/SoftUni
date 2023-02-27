window.onload = solution()


function solution() {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const extraURL = 'http://localhost:3030/jsonstore/advanced/articles/details/';
    const main = document.getElementById('main');

    fetch(url)
        .then(result => result.json())
        .then(data => {
            data.forEach(el => {
                const { _id, title } = el;
                const divAcc = creator('div', 'className', 'accordion', '');
                const divHead = creator('div', 'className', 'head', '');

                divHead.appendChild(creator('span', '', '', title));
                const moreBtn = creator('button', 'className', 'button', 'More');
                moreBtn.id = _id;
                divHead.appendChild(moreBtn);
                moreBtn.addEventListener('click', showMore);
                divAcc.appendChild(divHead);

                const extraDiv = creator('div', 'className', 'extra', '');
                const pContent = creator('p', '', '', '');

                fetch(`${extraURL}${_id}`)
                    .then(res => res.json())
                    .then(current => {
                        const { _id, title, content } = current;
                        pContent.innerText = content;
                    })
                    .catch(err => console.log(err));


                extraDiv.appendChild(pContent);
                divAcc.appendChild(extraDiv);
                main.appendChild(divAcc);

                function showMore() {
                    if (moreBtn.textContent === 'More') {
                        extraDiv.style.display = 'block';
                        moreBtn.textContent = 'Less'
                    } else {
                        extraDiv.style.display = 'none';
                        moreBtn.textContent = 'More'
                    }
                }
            });
        })
        .catch(error => console.log(error));

    function creator(elType, elAttribute, attrValue, elementText) {
        const element = document.createElement(elType);
        elAttribute ? element[elAttribute] = attrValue : null;
        elementText ? element.innerText = elementText : null;
        return element;
    }
}