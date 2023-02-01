function solve() {
    //TODO
    const hireWorkerBtn = document.getElementById('add-worker');
    hireWorkerBtn.addEventListener('click', workProcess);
    const tableBody = document.getElementById('tbody');
    const salarySum = document.getElementById('sum');
    let totalSalary = 0;


    function workProcess(e) {

        e.preventDefault();

        //TODO : validation

        const worker = {
            firstName: document.getElementById('fname'),
            lastName: document.getElementById('lname'),
            email: document.getElementById('email'),
            birthDate: document.getElementById('birth'),
            position: document.getElementById('position'),
            salary: document.getElementById('salary')
        }
        //(type, className, text)
        const tr = createElement('tr', '', '');
        tr.appendChild(createElement('td', '', `${worker.firstName.value}`))
        tr.appendChild(createElement('td', '', `${worker.lastName.value}`))
        tr.appendChild(createElement('td', '', `${worker.email.value}`))
        tr.appendChild(createElement('td', '', `${worker.birthDate.value}`))
        tr.appendChild(createElement('td', '', `${worker.position.value}`))
        tr.appendChild(createElement('td', '', `${worker.salary.value}`))
        const fired = createElement('button', 'fired', 'Fired');
        const edit = createElement('button', 'edit', 'Edit');
        const buttonTd = createElement('td', '', '');
        buttonTd.appendChild(fired);
        buttonTd.appendChild(edit)
        tr.appendChild(buttonTd);
        tableBody.appendChild(tr);

        fired.addEventListener('click', workerFired);
        edit.addEventListener('click', workerEdit);

        totalSalary += Number(worker.salary.value);
        salarySum.innerText = totalSalary.toFixed(2);

        Object.values(worker).forEach(w => w.value = '');

        function workerEdit(e) {
            const data = Array.from(e.target.parentElement.parentElement.children);
            worker.firstName = data[0].innerText;
            worker.lastName = data[1].innerText;
            worker.email = data[1].innerText;
            worker.birthDate = data[1].innerText;
            worker.position = data[1].innerText;
            worker.salary = data[5].innerText;
        }

        function workerFired(e) {
            let currentSum = e.target.parentElement.parentElement.children[5].innerText
            totalSalary -= Number(currentSum);
            salarySum.innerText = totalSalary.toFixed(2);
            tr.remove();
        }

    }

    function createElement(type, className, text) {
        const element = document.createElement(type);
        if (className) {
            element.className = className;
        }
        if (text) {
            element.innerText = text;
        }
        return element;
    }
}
solve()