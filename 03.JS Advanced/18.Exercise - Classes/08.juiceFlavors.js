function juiceFlavors(input) {
    const data = input.slice();
    const juice = {};
    const bottleJuice = {};

    data.forEach(line => {
        const [fruit, qty] = line.split(' => ');
        if (!juice[fruit]) {
            juice[fruit] = 0;
        }
        juice[fruit] += Number(qty);

        if (juice[fruit] >= 1000) {

            if (!bottleJuice[fruit]) {
                bottleJuice[fruit] = 0;
            }
            bottleJuice[fruit] += parseInt(juice[fruit] / 1000)

            juice[fruit] %= 1000;
        }
    });
    Object.entries(bottleJuice).forEach(bottle => console.log(`${bottle[0]} => ${bottle[1]}`))
}
// juiceFlavors([
//     'Orange => 2010',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549']);

juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)