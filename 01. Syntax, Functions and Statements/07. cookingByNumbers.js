function cook(numStr, ...operations) {
    let num = Number(numStr);

    for (let op of operations) {
        switch (op) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num -= 0.2*num;
                break;
            default:
                break;
        }
        console.log(num);
    }
}

cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');
/*
16
8
4
2
1
*/

cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
/*
3
4
2
6
4.8
*/
