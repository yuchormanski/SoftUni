class List {
    constructor() {
        this.collection = [];
        this.size = this.collection.length;
    }
    add(n) {
        n = Number(n);
        this.collection.push(n);
        this.collection.sort((a, b) => a - b);
        this.size = this.collection.length;
    }
    remove(n) {
        n = Number(n);
        if (n < 0 || n >= this.collection.length) {
            // if (!this.collection[n]) {
            throw new Error('Invalid index');
        }
        this.collection.splice(n, 1);
        this.size = this.collection.length;

    }
    get(n) {
        n = Number(n);
        if (n < 0 || n >= this.collection.length) {
            // if (!this.collection[n]) {
            throw new Error('Invalid index');
        }
        return this.collection[n];
    }
}

let list = new List();
list.add(5);
list.add(3);
// list.remove(1);

console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
