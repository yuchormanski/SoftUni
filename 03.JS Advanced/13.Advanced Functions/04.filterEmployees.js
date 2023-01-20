function filterEmployees(emp, crit) {
    const data = JSON.parse(emp);

    if (emp.includes('all')) {
        return data.map(el => print(el));
    }

    const [criteriaKey, criteria] = crit.split('-');

    let orderNum = 0;


    for (let el of data) {
        if (el[criteriaKey] === criteria) {
            print(el);
        }
    }

    function print(el) {
        console.log(`${orderNum++}. ${el.first_name} ${el.last_name} - ${el.email}`);
    }
}

// filterEmployees(`[{
//     "id": "1",
//     "first_name": "Ardine",
//     "last_name": "Bassam",
//     "email": "abassam0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Jost",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   },  
// {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }]`,
//     'gender-all')

filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
}, 
    {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Johnson",
        "email": "kjost1@forbes.com",
        "gender": "Female"
    }, 
    {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
    },
    {
        "id": "4",
    "first_name": "Evanne",
    "last_name": "Maldina",
    "email": "ev2@hostgator.com",
    "gender": "Male"}]`,
    'all')