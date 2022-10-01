function addRemove(commands) {
    const result = [];
    let num = 1;

    commands.forEach(x => {
        if(x == 'add'){
            result.push(num);
        }
        else if(x == 'remove'){
            result.pop(num);
        }
        num++;
    });

    if(result.length == 0){
        console.log('Empty');
    }
    else {
        console.log(result.join('\n'));
    }
}

addRemove(['add', 'add', 'add', 'add']);
/*
1
2
3
4
*/

addRemove(['add', 'add', 'remove', 'add', 'add']);
/*
1
4
5
*/

addRemove(['remove', 'remove', 'remove']);
// Empty
