function emp(arr, searchCriteria) {
    const data = JSON.parse(arr)
    let [gender, criteria] = searchCriteria.split('-');
    let counter = 0;

    if (criteria === 'all') {
        print();
    } else {
        data.filter(obj => obj[gender] === criteria).forEach(obj => print(obj));
    }

    function print(obj) {
        console.log(`${counter++}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);
    }
}
emp(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female');
