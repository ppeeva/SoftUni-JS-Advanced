function parseTowns(data) {
    const towns = [];

    const headers = data.shift().split('|');
    const name = headers[1].trim();
    const lat = headers[2].trim();
    const long = headers[3].trim();

    for(let line of data){
        const tokens = line.split('|');
        const lineName = tokens[1].trim();
        const lineLat = Number(Number(tokens[2].trim()).toFixed(2));
        const lineLong = Number(Number(tokens[3].trim()).toFixed(2));

        const town = {};
        town[name] = lineName;
        town[lat] = lineLat;
        town[long] = lineLong;

        towns.push(town);
    }

    console.log(JSON.stringify(towns));
}

parseTowns([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);
/*
[{"Town":"Sofia", "Latitude":42.7, "Longitude":23.32 }, {"Town":"Beijing", "Latitude":39.91, "Longitude":116.36 }]
*/

console.log('-----');

parseTowns([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);
/*
[{"Town":"Veliko Turnovo","Latitude":43.08,"Longitude":25.62},{"Town":"Monatevideo","Latitude":34.5,"Longitude":56.11}]
*/

