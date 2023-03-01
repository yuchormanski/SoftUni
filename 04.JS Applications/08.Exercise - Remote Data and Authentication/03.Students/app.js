getStudents()
addStudent()
async function getStudents() {
    const tableBody = document.getElementById('results');
    const url = 'http://localhost:3030/jsonstore/collections/students';
    const respond = await fetch(url);
    const data = await respond.json();

    Object.values(data).forEach((student, i) => {
        const { firstName, lastName, facultyNumber, grade, _id } = student;
        const tr = creator('tr', 'id', _id, '');
        tr.style.color = '#234465';
        if (i % 2 !== 0) {
            tr.style.backgroundColor = '#234465';
            tr.style.color = 'white';
        }
        tr.appendChild(creator('td', '', '', firstName));
        tr.appendChild(creator('td', '', '', lastName));
        tr.appendChild(creator('td', '', '', facultyNumber));
        tr.appendChild(creator('td', '', '', grade.toFixed(2)));
        tableBody.appendChild(tr);
    });
}

function addStudent() {
    document.querySelector('#submit').addEventListener('click', addToDB);
}

async function addToDB(e) {
    e.preventDefault();
    const url = 'http://localhost:3030/jsonstore/collections/students';
    const tableBody = document.getElementById('results');
    const form = document.querySelectorAll('.inputs input');
    const formForm = document.querySelector('form');
    const student = {
        firstName: form[0].value,
        lastName: form[1].value,
        facultyNumber: form[2].value,
        grade: Number(form[3].value)
    }
    try {
        if (student.firstName == ''
            || student.lastName == ''
            || student.facultyNumber == ''
            || student.grade == '') {
            const error = 'All fields must be filled!';
            throw error;
        }
        if(isNaN(student.facultyNumber) || student.grade === NaN){
            const error = 'Faculty Number and Grade must be numbers!';
            throw error;
        }


        const options = {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(student)
        }
        const response = await fetch(url, options);
        const data = await response.json();
    }
    catch (error) {
        console.log(error);
    }
    formForm.reset();
    tableBody.innerHTML = '';
    getStudents()
}


function creator(elType, elAttribute, attrValue, elementText) {
    const element = document.createElement(elType);
    elAttribute ? element[elAttribute] = attrValue : null;
    elementText ? element.innerText = elementText : null;
    return element;
}