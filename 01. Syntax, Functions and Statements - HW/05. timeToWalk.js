function calcTime(steps, footprintLen, speed) {
    const distanceInMeters = steps * footprintLen;
    const speedConverted = speed*1000/3600; //km/h => 1000/3600 => m/s
    const timeInSec = distanceInMeters / speedConverted;
    const breaks = distanceInMeters / 500 | 0;
    const totalTime = timeInSec + breaks * 60;

    const hours = totalTime / 3600 | 0;
    const minutes = totalTime / 60 | 0;
    const seconds = Math.round(totalTime % 60);

    console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
}

calcTime(4000, 0.60, 5);
// 00:32:48

calcTime(2564, 0.70, 5.5);
// 00:22:35

/*
целочислено делене:
a / b | 0
5 / 2 | 0 = 2
5 / 2 = 2.5
*/