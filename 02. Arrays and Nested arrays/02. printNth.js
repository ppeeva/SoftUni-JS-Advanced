function printNth(arr, step) {
    const result = arr.filter((x, idx) => idx == 0 || idx  % step == 0);
    return result;
}

console.log(printNth(['5', '20', '31', '4', '20'], 2));
// [ '5', '31', '20' ]

console.log(printNth(['dsa', 'asd', 'test', 'tset'], 2));
// [ 'dsa', 'test' ]

console.log(printNth(['1', '2', '3', '4', '5'], 6));
// [ '1' ]
