function add(num){
    const inner = function (currNum) {
        num += currNum;
        return inner;
    };    

    inner.toString = function (){
        return num;
    }

    return inner;
}

console.log(add(1).toString()); // 1
console.log(add(1)(6)(-3).toString()); // 4


/*
let sum = a => b => b ? sum(a+b) : a;
console.log(sum(10)(20)(3)(4)());   // 37
*/