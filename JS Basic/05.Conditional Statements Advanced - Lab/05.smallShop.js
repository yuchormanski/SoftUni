function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let qty = Number(input[2]);
    let price = 0;

    if (city === 'Sofia') {
        if (product === 'coffee') {
            price = qty * 0.5;
        }
        else if (product === 'water') {
            price = qty * 0.8;
        }
        else if (product === 'beer') {
            price = qty * 1.2;
        }
        else if (product === 'sweets') {
            price = qty * 1.45;
        }
        else if (product === 'peanuts') {
            price = qty * 1.6;
        }
    }
    else if (city === 'Plovdiv') {
        if (product === 'coffee') {
            price = qty * 0.4;
        }
        else if (product === 'water') {
            price = qty * 0.7;
        }
        else if (product === 'beer') {
            price = qty * 1.15;
        }
        else if (product === 'sweets') {
            price = qty * 1.3;
        }
        else if (product === 'peanuts') {
            price = qty * 1.5;
        }
    }
    else if (city === 'Varna') {
        if (product === 'coffee') {
            price = qty * 0.45;
        }
        else if (product === 'water') {
            price = qty * 0.7;
        }
        else if (product === 'beer') {
            price = qty * 1.1;
        }
        else if (product === 'sweets') {
            price = qty * 1.35;
        }
        else if (product === 'peanuts') {
            price = qty * 1.55;
        }
    }
    console.log(price);
}
smallShop(["water", "Plovdiv", "2"])

