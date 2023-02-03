class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}
const p1 = new Person('John', 'Smith', 45, 'lkjlfl@lkzjcv.com')

// console.log(p1.toString());
console.log(p1.toString());