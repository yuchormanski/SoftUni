class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ');
    }
}
const person = new Person('John', 'Smith');

console.log(person.fullName);

console.log(person.lastName);

person.firstName = 'Pesho';

console.log(person.fullName);