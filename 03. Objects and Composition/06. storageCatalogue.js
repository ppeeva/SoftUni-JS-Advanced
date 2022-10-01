function createCatalogue(products) {
    const catalogue = {};

    for (let line of products) {
        const tokens = line.split(' : ');
        const name = tokens[0];
        const price = Number(tokens[1]);

        catalogue[name] = price;
    }

    const sortedKeys = Object.keys(catalogue).sort();
    let letter = '0';
    for (let key of sortedKeys) {
        if (key[0] != letter) {
            letter = key[0];
            console.log(letter);
        }
        console.log(`  ${key}: ${catalogue[key]}`);
    }
}

createCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
/*
A
  Anti-Bug Spray: 15
  Apple: 1.25
  Appricot: 20.4
B
  Boiler: 300
D
  Deodorant: 10
F
  Fridge: 1500
T
  T-Shirt: 10
  TV: 1499
*/

console.log('-----');

createCatalogue([
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']);
/*
B
  Banana: 2
  Barrel: 10
P
  Pesho: 0.000001
R
  Rali Car: 2000000
  Raspberry P: 4999
  Rolex: 100000
  Rollon: 10
  Rubic's Cube: 5
*/

