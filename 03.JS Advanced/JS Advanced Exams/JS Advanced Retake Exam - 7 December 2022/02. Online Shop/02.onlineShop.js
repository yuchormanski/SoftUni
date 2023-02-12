class OnlineShop {
	
    constructor(warehouseSpace){
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales =[];
    }
    loadingStore(product, quantity, spaceRequired){
        if(this.warehouseSpace < spaceRequired){
            throw new Error('Not enough space in the warehouse.');
        }
            this.products.push({product, quantity});
            this.warehouseSpace -= spaceRequired;
            return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity){
        const found = this.products.find(el => el.product === product);
        if(found === undefined){
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        if(minimalQuantity <= 0){
            throw new Error('The quantity cannot be zero or negative.');
        }
        if (minimalQuantity <= found.quantity){
            return `You have enough from product ${product}.`;
        } else {
            let current = found.quantity
            found.quantity = minimalQuantity
            return `You added ${minimalQuantity - current} more from the ${product} products.`;
        }

        

    }

    
    sellProduct(product) {
        const found = this.products.find(el => el.product === product);
        if(found === undefined){
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        found.quantity--;
        this.sales.push({product, quantity: 1});
        return `The ${product} has been successfully sold.`;
    }

    revision(){
        if(this.sales.length === 0){
            throw new Error('There are no sales today!');
        }
        const saleProducts = this.sales.reduce((acc, x) => acc.quantity + x.quantity);

        const produtsInWarhouse = [`You sold ${saleProducts} products today!`];

        produtsInWarhouse.push('Products in the warehouse:');
        
        this.products.forEach(p => produtsInWarhouse.push(`${p.product}-${p.quantity} more left`));
        return produtsInWarhouse.join('\n');
    }
}

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.quantityCheck('TV', 40,));

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('keyboard'));
 
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());

