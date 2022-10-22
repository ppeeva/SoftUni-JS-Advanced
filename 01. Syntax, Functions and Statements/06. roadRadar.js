function checkSpeed(speed, area) {
    let maxSpeed = 0;

    switch (area) {
        case 'motorway':
            maxSpeed = 130;
            break;
        case 'interstate':
            maxSpeed = 90;
            break;
        case 'city':
            maxSpeed = 50;
            break;
        case 'residential':
            maxSpeed = 20;
            break;
        default:
            break;
    }

    if (speed <= maxSpeed) {
        console.log(`Driving ${speed} km/h in a ${maxSpeed} zone`);
    }
    else {
        const diff = speed - maxSpeed;
        const status = diff <= 20
            ? 'speeding'
            : diff <= 40
                ? 'excessive speeding'
                : 'reckless driving';
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
    }
}

checkSpeed(40, 'city');
// Driving 40 km/h in a 50 zone

checkSpeed(21, 'residential');
// The speed is 1 km/h faster than the allowed speed of 20 - speeding

checkSpeed(120, 'interstate');
// The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding

checkSpeed(200, 'motorway');
// The speed is 70 km/h faster than the allowed speed of 130 - reckless driving
