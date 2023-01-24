function filterEmployee(jsonString, criteria) {
    const data = JSON.parse(jsonString);
    let filterCrit = criteria.split('-')[1];

    let counter = 0;

    let filterFunc = () =>{
        if (this.gender === filterCrit) {
            console.log(`${this.first_name}`);
        }
    }
    for (let obj of data) {
        obj.filterFunc
    }

}
filterEmployee(`[{
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
    'gender-Female')