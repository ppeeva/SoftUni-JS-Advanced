function sortNames(arr) {
    arr.sort((a, b) => a.localeCompare(b));

    arr.forEach((val, idx) => {
        console.log(`${idx+1}.${val}`);
    });
}

sortNames(["John", "Bob", "Christina", "Ema"]);
/*
1.Bob
2.Christina
3.Ema
4.John
*/

