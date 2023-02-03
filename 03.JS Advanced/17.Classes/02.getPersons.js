function getPersons(input) {
    const personArray = [];
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }

    for (let el of input) {
        let [fName, lName, age, email] = el.split(', ');
        let person = new Person(fName, lName, age, email);
        personArray.push(person);
    }

    return personArray;
}


console.log(getPersons(['Anna, Simpson, 22, anna@yahoo.com', 'Stephan, Johnson, 25']));