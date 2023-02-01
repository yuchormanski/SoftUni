function solve() {
    //TODO
    const hireWorkerBtn = document.getElementById('add-worker');
    hireWorkerBtn.addEventListener('click', workProcess);
    const tableBody = document.getElementById('tbody');
    const salarySum = document.getElementById('sum');
    let totalSalary = 0;

    function workProcess(e) {

        e.preventDefault();

        const worker = {
            firstName: document.getElementById('fname'),
            lastName: document.getElementById('lname'),
            email: document.getElementById('email'),
            birthDate: document.getElementById('birth'),
            position: document.getElementById('position'),
            salary: document.getElementById('salary')
        }
        if (worker.firstName.value === '' ||
            worker.lastName.value === '' ||
            worker.email.value === '' ||
            worker.birthDate.value === '' ||
            worker.position.value === '' ||
            worker.salary.value === '') {
            return;
        }

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
            worker.firstName.value = data[0].innerText;
            worker.lastName.value = data[1].innerText;
            worker.email.value = data[2].innerText;
            worker.birthDate.value = data[3].innerText;
            worker.position.value = data[4].innerText;
            worker.salary.value = data[5].innerText;
            totalSalary -= Number(data[5].innerText);
            salarySum.innerText = totalSalary.toFixed(2);
            tr.remove();
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