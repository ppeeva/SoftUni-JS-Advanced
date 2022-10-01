function extract(arr) {
    const result = [];

    arr.forEach((val, idx, a) => {
        if (idx == 0 || a[idx] >= result[result.length - 1]) {
            result.push(val);
        }
    });

    return result;
}

console.log(extract([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// [ 1, 3, 8, 10, 12, 24 ]

console.log(extract([1, 2, 3, 4]));
// [ 1, 2, 3, 4 ]

console.log(extract([20, 3, 2, 15, 6, 1]));
// [ 20 ]
