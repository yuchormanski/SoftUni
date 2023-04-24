const mongoose = require('mongoose');
const dogSchema = new mongoose.Schema({
    //описват се типа на полетата
    name: String,
    age: Number,
    breed: String,
    color: String,
    weight: Number,
});
const Dog = mongoose.model('Dog', dogSchema);

async function findEntryById(id){
    const dog = await Dog.findById(id);
    console.log(dog);
}

module.exports = findEntryById;