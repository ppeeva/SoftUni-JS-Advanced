function getArgsInfo(...args) {
    const types = [];

    [...args].forEach(x => processArgument(x));
    types.sort((a, b) => b.count - a.count);
    types.forEach(x => console.log(`${x.type} = ${x.count}`));

    function processArgument(arg) {
        console.log(`${typeof (arg)}: ${arg}`);

        let found = types.find(x => x.type == typeof (arg));
        if (!found) {
            types.push({
                values: [arg],
                type: typeof (arg),
                count: 1
            });
        }
        else {
            found.values.push(arg);
            found.count++;
        }
    }
}

getArgsInfo('cat', 42, function () { console.log('Hello world!'); });
/*
string: cat
number: 42
function: function () { console.log('Hello world!'); }
string = 1
number = 1
function = 1
*/

console.log('-----------');

getArgsInfo('cat', 42, 'second', 1, 2, function () { let c = 0; }, function () { console.log('Hello world!'); });
/*
string: cat
number: 42
string: second
number: 1
number: 2
function: function() {let c = 0;}
function: function () { console.log('Hello world!'); }
number = 3
string = 2
function = 2
*/

/*
judge also accepts () => {;} 
:)))))
*/