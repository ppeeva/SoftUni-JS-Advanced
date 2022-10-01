function registerHeroes(heroes) {
    const register = [];

    for (let line of heroes) {
        const tokens = line.split(' / ');
        const hero = {
            name: tokens[0],
            level: Number(tokens[1]),
            items: tokens.length > 2 ? tokens[2].split(', ') : []
        }
        register.push(hero);
    }

    return JSON.stringify(register);
}

console.log(registerHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));
// [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]

console.log(registerHeroes(['Jake / 1000 / Gauss, HolidayGrenade']));
// [{"name":"Jake","level":1000,"items":["Gauss","HolidayGrenade"]}]


