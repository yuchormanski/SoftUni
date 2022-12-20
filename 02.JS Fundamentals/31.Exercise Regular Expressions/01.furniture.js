
function furniture(input) {

    let totalMoney = 0;
    const pattern = /[>]{2}(?<name>[A-Za-z]+)[<]{2}(?<price>[\d]+[\.]*[\d]+)!(?<quantity>[\d]+)/g;
    let index = 0;
    console.log('Bought furniture: ');

    while (input[index] !== 'Purchase') {
        let productRow = input[index];
        let valid = pattern.exec(productRow);

        while (valid !== null) {
            const productName = valid.groups['name'];
            console.log(productName);
            const productPrice = valid.groups['price'];
            const productQty = valid.groups['quantity'];

            totalMoney += productPrice * productQty;
            valid = pattern.exec(productRow);
        }

        index++;
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}
furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);