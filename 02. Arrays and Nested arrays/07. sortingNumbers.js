function sortNumbers(arr) {
    arr.sort((a, b) => a - b);

    const result = [];
    let takeSmallest = true;
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        if (takeSmallest) {
            result.push(arr.shift());
        }
        else {
            result.push(arr.pop());
        }
        takeSmallest = !takeSmallest;
    }

    return result;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]

