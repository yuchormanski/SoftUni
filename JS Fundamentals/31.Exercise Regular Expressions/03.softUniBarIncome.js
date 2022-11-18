function softUniBarIncome(line) {
    // const pattern = /%(?<name>[A-Z][a-z]+)%<(?<product>[A-Za-z]+)>\|(?<count>\d+)\|(?<price>[\d]+[\.]*[\d]+)/g;
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|%$.]*<(?<product>[\w]+)>[^|%$.]*\|(?<count>\d+)[^|%$.]*\|(?<price>[\d]+[\.]*[\d]+)\$/g;
    let totalIncome = 0;
    let command = line.shift();

    while (command !== 'end of shift') {
        let currentData = pattern.exec(command);
        if (currentData) {
            let currentCustomer = currentData.groups['name'];
            let currentProduct = currentData.groups['product'];
            let currentCount = Number(currentData.groups['count']);
            let currentPrice = Number(currentData.groups['price']);
            let totalCurrentPrice = currentCount * currentPrice;
            console.log(`${currentCustomer}: ${currentProduct} - ${totalCurrentPrice.toFixed(2)}`);
            totalIncome += currentPrice;
        }
        command = line.shift();
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift']);
