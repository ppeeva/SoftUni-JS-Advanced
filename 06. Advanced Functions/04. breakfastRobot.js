// function solution() {
//     const ingredients = {
//         protein: 0,
//         carbohydrate: 0,
//         fat: 0,
//         flavour: 0
//     };

//     const recipes = {
//         apple: {
//             protein: 0,
//             carbohydrate: 1,
//             fat: 0,
//             flavour: 2
//         },
//         lemonade: {
//             protein: 0,
//             carbohydrate: 10,
//             fat: 0,
//             flavour: 20
//         },
//         burger: {
//             protein: 0,
//             carbohydrate: 5,
//             fat: 7,
//             flavour: 3
//         },
//         eggs: {
//             protein: 5,
//             carbohydrate: 0,
//             fat: 1,
//             flavour: 1
//         },
//         turkey: {
//             protein: 10,
//             carbohydrate: 10,
//             fat: 10,
//             flavour: 10
//         },
//     };

//     function manage(instruction) {
//         const tokens = instruction.split(' ');
//         const command = tokens[0];

//         let result = '';
//         switch (command) {
//             case 'restock':
//                 const microelement = tokens[1];
//                 const qtyRestock = Number(tokens[2]);
//                 ingredients[microelement] += qtyRestock;

//                 result = 'Success';
//                 break;

//             case 'prepare':
//                 const recipe = tokens[1];
//                 const qtyPrepare = Number(tokens[2]);

//                 const neededProtein = recipes[recipe].protein * qtyPrepare;
//                 const neededCarbo = recipes[recipe].carbohydrate * qtyPrepare;
//                 const neededFat = recipes[recipe].fat * qtyPrepare;
//                 const neededFlavour = recipes[recipe].flavour * qtyPrepare;

//                 let missingIngredient = '';
//                 if(ingredients.protein < neededProtein){
//                     missingIngredient = 'protein';
//                 }
//                 else if(ingredients.carbohydrate < neededCarbo){
//                     missingIngredient = 'carbohydrate';
//                 }
//                 else if(ingredients.fat < neededFat){
//                     missingIngredient = 'fat';
//                 }
//                 else if(ingredients.flavour < neededFlavour){
//                     missingIngredient = 'flavour';
//                 }

//                 if(missingIngredient){
//                     result = `Error: not enough ${missingIngredient} in stock`;
//                 }
//                 else {
//                     ingredients.protein -= neededProtein;
//                     ingredients.carbohydrate -= neededCarbo;
//                     ingredients.fat -= neededFat;
//                     ingredients.flavour -= neededFlavour;
//                     result = 'Success';
//                 }
//                 break;

//             case 'report':
//                 result = `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
//                 break;
//         }

//         return result;

//     }

//     return manage;
// }

let manager = solution();

console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("restock flavour 10")); // Success
console.log(manager("prepare apple 1")); // Success
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare burger 1")); // Success
console.log(manager("report")); // protein=0 carbohydrate=4 fat=3 flavour=55

console.log('-----------------');

console.log(manager("prepare turkey 1")); // Error: not enough protein in stock
console.log(manager("restock protein 10")); // Success
console.log(manager("prepare turkey 1")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("prepare turkey 1")); // Error: not enough fat in stock
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare turkey 1")); // Error: not enough flavour in stock
console.log(manager("restock flavour 10")); // Success
console.log(manager("prepare turkey 1")); // Success
console.log(manager("report")); // protein=0 carbohydrate=0 fat=0 flavour=0


function solution() {
    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        },
    };

    const commands = {
        restock,
        prepare,
        report
    };

    function manage(instruction) {
        const [command, param, qty] = instruction.split(' ');
        return commands[command](param, qty);
    }

    function restock(element, qty) {
        ingredients[element] += Number(qty);
        return 'Success';
    }

    function report() {
        return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
    }

    function prepare(recipe, qty) {
        const recipeIngredients = Object.entries(recipes[recipe]);
        recipeIngredients.forEach(x => x[1] *= Number(qty));

        for (let [ingredient, neededQty] of recipeIngredients) {
            if (ingredients[ingredient] < neededQty) {
                return `Error: not enough ${ingredient} in stock`;
            }
        }

        recipeIngredients.forEach(([ingredient, neededQty]) => ingredients[ingredient] -= neededQty);
        return 'Success';
    }

    return manage;
}