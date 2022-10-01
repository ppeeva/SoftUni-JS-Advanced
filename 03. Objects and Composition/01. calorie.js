function composeCalories(arr) {
    const obj = {};

    for (let i = 1; i < arr.length; i += 2) {
        obj[arr[i - 1]] = Number(arr[i]);
    }

    console.log(obj);
}

composeCalories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
// { Yoghurt: 48, Rise: 138, Apple: 52 }

composeCalories(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
// { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }

