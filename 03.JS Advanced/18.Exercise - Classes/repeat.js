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
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    const result = [];

    for (let line of destInput) {
        let [destination, price, stat] = line.split('|');
        price = Number(price);
        result.push(new Ticket(destination, price, stat))
    }
    console.log(result);

}
console.log(ticketsData([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));
