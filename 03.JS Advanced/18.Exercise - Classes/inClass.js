//rectangle

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

// -----------------

//dataClass

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

// ------

//3.	Tickets
function ticketDesc(stringArr, crit) {
    const allTickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    stringArr.forEach(line => {
        let [destination, price, status] = line.split('|');
        allTickets.push(new Ticket(destination, price, status));
    });
    return allTickets.sort((a,b) => {
        if(crit === 'price'){
            return a[crit] - b[crit];
        }else{
            console.log(a[crit])
            console.log(b[crit])
            return a[crit].localeCompare(b[crit]);
        }
    })

}
console.log(ticketDesc(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));

//----- 

// sortedLIst





