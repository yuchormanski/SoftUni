function objectFactory(library, orders) {

  //create array to store the objects
  let result = [];

  //iterate orders array 
  //Every line is separate object
  for (let line of orders) {
    //create empty object
    const products = {};

    //taking properties from template object
    for (let name in line.template) {
      //create property in products
      products[name] = line.template[name];
    }

    ///taking value from template key'parts'
    let parts = line.parts;

    for (let part of parts) {
      // add part value from library object according to part name
      products[part] = library[part];
    }
    //store the object
    result.push(products)
  }
  return result;
}



// input data
const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};


const orders = [
  {
    template: { name: 'ACME Printer' },
    parts: ['print']
  },
  {
    template: { name: 'Initech Scanner' },
    parts: ['scan']
  },
  {
    template: { name: 'ComTron Copier' },
    parts: ['scan', 'print']
  },
  {
    template: { name: 'BoomBox Stereo' },
    parts: ['play']
  }
];
const products = objectFactory(library, orders);
console.log(products);

products[2].scan()


