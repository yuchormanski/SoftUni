function solve() {
    //TODO
    const tBody = document.getElementById('tbody');
    const totalSum = document.getElementById('sum');
    const firstNameInput = document.getElementById('fname');
    const lastNameInput = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const birthInput = document.getElementById('birth');
    const positionInput = document.getElementById('position');
    const salaryInput = document.getElementById('salary');
    const addWorkerBtn = document.getElementById('add-worker');
    addWorkerBtn.addEventListener('click', hireWorker);
    let total = 0;

    function hireWorker(e) {
        e.preventDefault()
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const email = emailInput.value;
        const birth = birthInput.value;
        const position = positionInput.value;
        const salary = Number(salaryInput.value);

        if (firstName == ''
            || lastName == ''
            || email == ''
            || birth == ''
            || position == ''
            || salary == '') return

        const tr = creator('tr', '', '', '');
        tr.appendChild(creator('td', '', '', firstName));
        tr.appendChild(creator('td', '', '', lastName));
        tr.appendChild(creator('td', '', '', email));
        tr.appendChild(creator('td', '', '', birth));
        tr.appendChild(creator('td', '', '', position));
        tr.appendChild(creator('td', '', '', salary));
        const tdButtons = creator('td', '', '', '');
        const firedBtn = creator('button', 'class', 'fired', 'Fired');
        const editBtn = creator('button', 'class', 'edit', 'Edit');
        tdButtons.appendChild(firedBtn);
        tdButtons.appendChild(editBtn);
        tr.appendChild(tdButtons);
        tBody.appendChild(tr);

        firedBtn.addEventListener('click', fired);
        editBtn.addEventListener('click', backToInput);
        
        
        firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        birthInput.value = '';
        positionInput.value = '';
        salaryInput.value = '';
        total += salary;
        totalSum.innerText = total.toFixed(2);


        function backToInput() {
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            emailInput.value = email;
            birthInput.value = birth;
            positionInput.value = position;
            salaryInput.value = salary;
            total -= salary;
            totalSum.innerText = total.toFixed(2);
            tr.remove();
        }

        function fired() {
            total = Number(totalSum.innerText);
            total -= salary;
            totalSum.innerText = total.toFixed(2);
            tr.remove();
        }
    }

    function creator(type, attribute, attrType, text) {
        const element = document.createElement(type);
        if (attrType) {
            element[attribute] = attrType;
        }
        if (text) {
            element.innerText = text;
        }
        return element
    }
}
solve()