class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space === 0) throw new Error('Not enough space in the cellar.');
        this.wines.push({ wineName, wineType, price, paid: false });
        this.space--;
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        const found = this.wines.find(obj => obj.wineName === wineName);
        if (!found) throw new Error(`${wineName} is not in the cellar.`);

        if (found.paid === true) throw new Error(`${wineName} has already been paid.`);
        found.paid = true;
        this.bill += Number(price);
        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        const found = this.wines.find(obj => obj.wineName === wineName);
        if (!found) throw new Error(`The wine, you're looking for, is not found.`);
        if (found.paid !== true) throw new Error(`${wineName} need to be paid before open the bottle.`);
        const index = this.wines.indexOf(found);
        this.wines.splice(index, 1);
        this.space++;
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        const result = [];
        let isPayed = '';
        if (wineType === undefined) {
            result.push(`You have space for ${this.space} bottles more.`);
            result.push(`You paid ${this.bill}$ for the wine.`);
            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName))
            this.wines.forEach(wine => {
                if (wine.paid === true) { isPayed = 'Has Paid' }
                else { isPayed = 'Not Paid' }
                result.push(`${wine.wineName} > ${wine.wineType} - ${isPayed}.`);
            });
            return result.join('\n');
        } else {
            const found = this.wines.find(obj => obj.wineType === wineType);
            if (!found) throw new Error(`There is no ${wineType} in the cellar.`);
            if (found.paid === true) { isPayed = 'Has Paid' }
            else { isPayed = 'Not Paid' }
            return `${found.wineName} > ${wineType} - ${isPayed}.`;
        }
    }
}

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
// console.log(selection.cellarRevision('Rose'));

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());
