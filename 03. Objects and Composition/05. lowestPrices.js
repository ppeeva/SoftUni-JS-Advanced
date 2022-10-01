function findLowest(prices) {
    const products = {};

    for (let line of prices) {
        const tokens = line.split(' | ');

        const town = tokens[0];
        const product = tokens[1];
        const price = Number(tokens[2]);

        if (!products.hasOwnProperty(product)) {
            products[product] = [];
        }

        products[product].push({ town, price });
    }

    for (let prod in products) {
        products[prod].sort((a, b) => a.price - b.price);
        const lowestPrice = products[prod][0].price;
        const inTown = products[prod][0].town;
        console.log(`${prod} -> ${lowestPrice} (${inTown})`);
    }
}

findLowest([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
/*
Sample Product -> 1000 (Sample Town)
Orange -> 2 (Sample Town)
Peach -> 1 (Sample Town)
Burger -> 10 (New York)
*/


