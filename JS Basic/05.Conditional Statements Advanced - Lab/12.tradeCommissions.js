function tradeCommissions(input) {
    let city = input[0];
    let qty = Number(input[1]);

    if (city === 'Sofia') {
        if (qty < 0) {
            console.log('error');
        }
        else if (qty >= 0 && qty <= 500) {
            console.log((qty * 0.05).toFixed(2));
        } else if (qty <= 1000) {
            console.log((qty * 0.07).toFixed(2));
        } else if (qty <= 10000) {
            console.log((qty * 0.08).toFixed(2));
        } else if (qty > 10000) {
            console.log((qty * 0.12).toFixed(2));
        }
    } else if (city === 'Varna') {
        if (qty < 0) {
            console.log('error');
        }
        else if (qty >= 0 && qty <= 500) {
            console.log((qty * 0.045).toFixed(2));
        } else if (qty <= 1000) {
            console.log((qty * 0.075).toFixed(2));
        } else if (qty <= 10000) {
            console.log((qty * 0.10).toFixed(2));
        } else if (qty > 10000) {
            console.log((qty * 0.13).toFixed(2));
        }
    } else if (city === 'Plovdiv') {
        if (qty < 0) {
            console.log('error');
        }
        else if (qty >= 0 && qty <= 500) {
            console.log((qty * 0.055).toFixed(2));
        } else if (qty <= 1000) {
            console.log((qty * 0.08).toFixed(2));
        } else if (qty <= 10000) {
            console.log((qty * 0.12).toFixed(2));
        } else if (qty > 10000) {
            console.log((qty * 0.145).toFixed(2));
        }
    } else {
        console.log('error');
    }
}
tradeCommissions(["Sfia",
    "1500"])
