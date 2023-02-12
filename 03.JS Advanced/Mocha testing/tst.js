const rentCar = require('./index.js');
const { expect, assert } = require('chai');

describe("test renCar", function () {
    describe("searchCar(one array and one string) ", function () {
        it('[], string', function () {
           expect(rentCar.searchCar(['a','b','c'], 'a')).to.equal(`There is ${a.length} car of model a in the catalog!`)
        });
    });

});
