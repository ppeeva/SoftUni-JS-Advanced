class Stringer {
    constructor(str, length) {
        this.innerString = str;
        this.innerLength = length;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
        this.innerLength = this.innerLength < 0 ? 0 : this.innerLength;
    }

    toString() {
        let substring = this.innerString.length > this.innerLength 
        ? this.innerString.substring(0, this.innerLength) + '...' 
        : this.innerString;

        return substring;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test

