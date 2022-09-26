function getPreviousDay(num) {
    const numStr = num.toString();
    const char = numStr.charAt(0);
    let sum = Number(char);
    let areTheSame = true;

    for(let i = 1; i < numStr.length; i++){
        if(numStr[i] != char){
            areTheSame = false;
        }
        sum += Number(numStr[i]);
    }    
    
    console.log(areTheSame);
    console.log(sum);
}

getPreviousDay(2222222);
/*
true
14
*/

getPreviousDay(1234);
/*
false
10
*/