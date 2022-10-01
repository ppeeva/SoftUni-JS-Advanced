function isMagical(matrix) {
    let sum = 0;
    let isMagical = true;

    for (let i = 0; i < matrix.length; i++) {
        let rowSum = 0;
        let colSum = 0;
        
        for (let j = 0; j < matrix.length; j++) {
            rowSum += matrix[i][j];
            colSum += matrix[j][i];
        }

        if(i == 0){
            sum = rowSum;
        }
        
        if(rowSum != sum || colSum != sum){
            isMagical = false;
            console.log(isMagical);
            return;
        }

        rowSum = 0;
        colSum = 0;
    }

    console.log(isMagical);
}

isMagical([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
// true

isMagical([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);
// false

isMagical([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);
// true
