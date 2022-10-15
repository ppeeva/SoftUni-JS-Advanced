function getFibonator(){
    let nextToLast = 0;
    let last = 1;

    function getNext(){
        let sum = nextToLast + last;
        nextToLast = last;
        last = sum;
        return nextToLast;
    }

    return getNext;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

/*
// without closure:
function getFibonator(){
    const result = function (){
        let sum = result.nextToLast + result.last;
        result.nextToLast = result.last;
        result.last = sum;

        return result.nextToLast;
    }
    result.nextToLast = 0;
    result.last = 1;

    return result;
}
*/

/*
//with binding context
function getFibonator(){
    return (function (){
        let sum = this.nextToLast + this.last;
        this.nextToLast = this.last;
        this.last = sum;

        return this.nextToLast;
    }).bind({
        nextToLast: 0,
        last: 1

    });
}
*/