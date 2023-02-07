function createPerson(firstName, lastName) {
    const result = {
        firstName,
        lastName,
    };
Object.defineProperty(result, 'fullName' , {
    enumerable: true,
    configurable: true,
    get(){
        return `${result.firstName} ${result.lastName}`
    },
    set(value){
        [result.firstName, result.lastName] = value.split(' ');
    }
});

    return result;
}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
