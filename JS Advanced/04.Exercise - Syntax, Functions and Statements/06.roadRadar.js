function roadRadar(speed, area) {
    let limit;
    if (area === 'residential') {
        limit = 20;
        speedRules(limit);
    } else if (area === 'city') {
        limit = 50;
        speedRules(limit);
    } else if (area === 'interstate') {
        limit = 90;
        speedRules(limit);
    } else if (area === 'motorway') {
        limit = 130;
        speedRules(limit);
    }

    function speedRules() {
        if (speed <= limit) {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        } else if (speed <= limit + 20) {
            console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - speeding`);
        } else if (speed <= limit + 40) {
            console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - excessive speeding`);
        } else {
            console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - reckless driving`);
        }
    }
}
// roadRadar(40, 'city');
// roadRadar(21, 'residential');
// roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
