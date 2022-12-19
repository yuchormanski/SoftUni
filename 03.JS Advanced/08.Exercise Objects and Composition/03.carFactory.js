function carFactory(order) {
    const car = {
        model: order.model,
        engine: engineTuner(),
        carriage: {
            type: order.carriage,
            color: order.color
        },
        wheels: wheelsRoundDown()
    }

    function engineTuner() {
        if (order.power <= 90) {
            return { power: 90, volume: 1800 }
        } else if (order.power <= 120) {
            return { power: 120, volume: 2400 }
        } else if (order.power <= 200) {
            return { power: 200, volume: 3500 }
        }
    }
    function wheelsRoundDown() {
        let current = order.wheelsize;
        let wheelArray = [];
        wheelArray.length = 4;
        if (order.wheelsize % 2 === 0) {
            current = order.wheelsize - 1;
        }
        wheelArray.fill(current);
        return wheelArray;
    };
    return car;
}
carFactory(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    });
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
)