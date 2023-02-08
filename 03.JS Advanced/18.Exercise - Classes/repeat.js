class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calcArea() {
        return this.width * this.height;
    }
}
// let rect = new Rectangle(4, 5, 'Red');
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());


//02. Data Class

class Request {
    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}
let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
// console.log(myData);

//03. Tickets

function ticketsData(destInput, criteria) {
    class Ticket {
        constructor(destination, price, crit) {
            this.destination = destination;
            this.price = price;
            this.crit = crit;
        }
    }
    const result = [];

    for (let line of destInput) {
        let [destination, price, stat] = line.split('|');
        price = Number(price);
        result.push(new Ticket(destination, price, stat))
    }
    return result.sort((a, b) => {
        if (criteria === 'price') {
            return a[criteria] - b[criteria];
        } else {
            return a[criteria].localeCompare(b[criteria]);
        }
    })
}
// console.log(ticketsData([
//     'Philadelphia|94.20|available',
//     'New York City|97.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'price'));

// -------

// 04. Sorted List

class List {
    constructor() {
        this.result = [];
        this.size = this.result.length;
    }
    add(n) {
        this.result.push(n)
        this.size = this.result.length;
        return this.result.sort((a, b) => a - b);
    }
    remove(index) {
        if (index < 0 || index >= this.result.length) {
            throw new Error('Invalid index')
        }
        this.result.splice(index, 1);
        this.size = this.result.length;
    }
    get(index) {
        return this.result[index];
    }
}
// let list = new List();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1)); 
// list.remove(1);
// console.log(list.get(1));

// 05. length limit

class Stringer {
    constructor(str, lengthProp) {
        this.innerString = str;
        this.innerLength = Number(lengthProp);
    }
    increase(length) {
        return this.innerLength += Number(length);
    }

    decrease(length) {
        if ((this.innerLength - length) < 0) {
            return this.innerLength = 0;
        }
        return this.innerLength -= Number(length);
    }
    toString() {
        if (this.innerString.length > this.innerLength) {
            return `${this.innerString.slice(0, this.innerLength)}...`;
        } else {
            return this.innerString;
        }
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test


