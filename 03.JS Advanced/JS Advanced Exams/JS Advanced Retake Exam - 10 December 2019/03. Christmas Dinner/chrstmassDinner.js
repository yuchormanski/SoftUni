class ChristmasDinner {
    constructor(b) {
        this._budget = b;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set _budget(value) {
        if (value < 0) throw new Error('The budget cannot be a negative number');
        this.budget = value;
    }

    shopping(stockArray) {
        let [product, price] = stockArray;
        price = Number(price);
        if (price > this.budget) throw new Error('Not enough money to buy this product');
        this.budget -= price;
        this.products.push(product);
        return `You have successfully bought ${product}!`;
    }

    recipes(recipe) {
        const { recipeName, productsList } = recipe;
        if (productsList.every(p => this.products.includes(p))) {
            this.dishes.push({ recipeName, productsList });
            return `${recipeName} has been successfully cooked!`;
        }
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());




//https://github.com/Sineastra/JS-Advanced-January-2021/blob/master/10%20Exams/03%20Retake%20Exam%20-%2010.12.2019/03.%20Christmas%20Dinner/christmasDinner.js
