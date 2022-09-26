function areTheSameDigits(num1, num2) {
    if(num2 == 0){
        console.log(num1);
        return;
    }    

    areTheSameDigits(num2, num1 % num2);
}

areTheSameDigits(15, 5);
// 5

areTheSameDigits(2154, 458);
// 2


/* 
Euclidean algorithm
A more efficient method is the Euclidean algorithm, a variant in which the difference of the two numbers a and b is replaced 
by the remainder of the Euclidean division (also called division with remainder) of a by b.
Denoting this remainder as a mod b, the algorithm replaces (a, b) by (b, a mod b) repeatedly until the pair is (d, 0), 
where d is the greatest common divisor.

For example, to compute gcd(48,18), the computation is as follows:
gcd(48,18) -> 
gcd(18,48 mod 18) = gcd(18,12)
gcd(12,18 mod 12) = gcd(12,6)
gcd(6,12 mod 6) = gcd(6,0)

This again gives gcd(48, 18) = 6.
*/