function sortBy(arr) {
    arr.sort((a, b) => {
        if(a.length == b.length){
            return a.localeCompare(b);
        }
        else {
            return a.length - b.length;
        }
    });

    console.log(arr.join('\n'));
}

sortBy(['alpha','beta','gamma']);
/*
beta
alpha
gamma
*/

sortBy(['Isacc', 'Theodor','Jack', 'Harrison', 'George']);
/*
Jack
Isacc
George
Theodor
Harrison
*/

sortBy(['test', 'Deny','omen', 'Default']);
/*
Deny
omen
test
Default
*/ 
