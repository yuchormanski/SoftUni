class Person {
    constructor(name){
        this.name = name;
    }
    sayHello(){
        console.log(`${this.name} says Hello!`);
    }
}

const peter = new Person('Peter');
const john = new Person('John');

console.log(peter);
console.log(john);

peter.sayHello();
john.sayHello();