function solve(arr, sortOrder) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];
    for (let line of arr) {
        const [destination, price, status] = line.split('|');
        tickets.push(new Ticket(destination, Number(price), status));
    }

    if (sortOrder == 'destination') {
        tickets.sort((a, b) => a.destination.localeCompare(b.destination));
    }
    else if (sortOrder == 'price') {
        tickets.sort((a, b) => a.price - b.price);
    }
    else {
        tickets.sort((a, b) => a.status.localeCompare(b.status));
    }

    return tickets;
}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));
/*
[
  Ticket { destination: 'Boston', price: 126.2, status: 'departed' },
  Ticket {
    destination: 'New York City',
    price: 95.99,
    status: 'available'
  },
  Ticket { destination: 'New York City', price: 95.99, status: 'sold' },
  Ticket {
    destination: 'Philadelphia',
    price: 94.2,
    status: 'available'
  }
]
*/

console.log('----------');

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'));
/*
 [
  Ticket {
    destination: 'Philadelphia',
    price: 94.2,
    status: 'available'
  },
  Ticket {
    destination: 'New York City',
    price: 95.99,
    status: 'available'
  },
  Ticket { destination: 'Boston', price: 126.2, status: 'departed' },
  Ticket { destination: 'New York City', price: 95.99, status: 'sold' }
]
*/