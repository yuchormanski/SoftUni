// function cookingByNumbers(num, a, b, c, d, e) {
//     num = Number(num);
//     let data = [a, b, c, d, e];

function cookingByNumbers(...data) {
    num = Number(data.shift());

    data.forEach(command => {
        switch (command) {
            case 'chop':
                num /= 2; break;
            case 'dice':
                num = Math.sqrt(num); break;
            case 'spice':
                num += 1; break;
            case 'bake':
                num *= 3; break;
            case 'fillet':
                num -= num * 0.2; break;
        }
        console.log(num);
    });
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
