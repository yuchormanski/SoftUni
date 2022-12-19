function cookingByNumbers(num, ...data) {
    num = Number(num);

    const funcShelf = {
        //  chop: function chop() { num /= 2 }, // OR
        chop() { num /= 2 }, 
        dice() { num = Math.sqrt(num); },
        spice() { num += 1; },
        bake() { num *= 3; },
        fillet() { num -= num * 0.2; },
    }
    data.forEach(command => { funcShelf[command](), console.log(num) });
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');