function ticketSorter(tickets, crit) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    const allTickets = [];

    tickets.map((line) => {
        let [dest, price, status] = line.split('|');
        price = Number(price);
        const obj = new Ticket(dest, price, status);
        allTickets.push(obj);
    });

    //ако цритерия е цена  се сортира по стойност, ако не - по азбучен ред
    if (crit === 'price') {
        allTickets.sort((a, b) => a[crit] - b[crit]);
    } else {
        allTickets.sort((a, b) => a[crit].localeCompare(b[crit]));
    }

    return allTickets;
}
console.log(ticketSorter([
    'Philadelphia|94.20|available',
    'New York City|96.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'))