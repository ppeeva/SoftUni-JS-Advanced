function printArr(arr, delimiter) {
    console.log(arr.join(delimiter));
}

printArr(['One', 'Two', 'Three', 'Four', 'Five'], '-');
// One-Two-Three-Four-Five

printArr(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');
// How about no?_I_will_not_do_it!
