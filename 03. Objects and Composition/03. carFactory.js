function makeCar(requirements) {
    const car = { model: requirements.model };

    if (requirements.power <= 90) {
        car.engine = { power: 90, volume: 1800 };
    }
    else if (requirements.power <= 120) {
        car.engine = { power: 120, volume: 2400 };
    }
    else {
        car.engine = { power: 200, volume: 3500 };
    }

    car.carriage = {
        type: requirements.carriage,
        color: requirements.color
    };

    const wheelSize = requirements.wheelsize % 2 == 0 ? requirements.wheelsize - 1 : requirements.wheelsize;
    car.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

    return car;
}

console.log(makeCar({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 }));
/*
{
  model: 'VW Golf II',
  engine: { power: 90, volume: 1800 },
  carriage: { type: 'hatchback', color: 'blue' },
  wheels: [ 13, 13, 13, 13 ]
}
*/

console.log(makeCar({ model: 'Opel Vectra', power: 110, color: 'grey', carriage: 'coupe', wheelsize: 17 }));
/*
{
  model: 'Opel Vectra',
  engine: { power: 120, volume: 2400 },
  carriage: { type: 'coupe', color: 'grey' },
  wheels: [ 17, 17, 17, 17 ]
}
*/

