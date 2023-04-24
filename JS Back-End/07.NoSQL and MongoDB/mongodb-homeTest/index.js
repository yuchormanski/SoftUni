const mongoose = require('mongoose');

// създаваме схема на модела
const dogSchema = new mongoose.Schema({
    //описват се типа на полетата
    name: String,
    age: Number,
    breed: String,
    color: String,
    weight: Number,
});
const Dog = mongoose.model('Dog', dogSchema);

// connecting to database
async function main() { 
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://127.0.0.1:27017/dogBreed');
    console.log('Database Connected');

    //четене на цялата база данни
    // await readDog();

    //търсене в базата на запис по подаден критерий
    // await readOne({weight: 10}); //задаване на критерий за търсене под формата на обект

    // търсене на всички пълни съвпадения
    // await findAllByCriteria({color:'brown'});

    await findEntryById('6443963f2176a2e5d645e710');

    // създаване на запис в базата данни
    // await saveDog('Getsby', 6, 'Labrador Retriever', 'brown', 35)
}
main()






//четене на цялата база данни
async function readDog() {
    const dogs = await Dog.find();
    console.log(dogs);
}

// създаване на запис в базата данни
async function saveDog(name, age, breed, color, weight) {

    //v.1
    // const dog = new Dog({
    //     name,
    //     age,
    //     breed,
    //     color,
    //     weight,
    // })
    // await dog.save();

    //v.2
    await Dog.create({
        name,
        age,
        breed,
        color,
        weight,
    })
}

async function readOne(criteria){
    const dog = await Dog.findOne(criteria);
    console.log(dog);
}

async function findAllByCriteria(criteria){
    const allDogs = await Dog.find(criteria);
    console.log(allDogs);
}

async function findEntryById(id){
    const dog = await Dog.findById(id);
    console.log(dog);
}