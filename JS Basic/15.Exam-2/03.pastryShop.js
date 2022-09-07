function pastryShop(input) {
    let product = input[0];
    let qty = Number(input[1]);
    let daysLeft = Number(input[2]);
    let price = 0;
    if (daysLeft <= 15) {
        product === 'Cake' ? price = qty * 24 :
            product === 'Souffle' ? price = qty * 6.66 :
                product === 'Baklava' ? price = qty * 12.6 : null;
    } else if (daysLeft > 15 && daysLeft <= 24) {
        product === 'Cake' ? price = qty * 28.7 :
            product === 'Souffle' ? price = qty * 9.8 :
                product === 'Baklava' ? price = qty * 16.98 : null;
    }
    if (daysLeft <= 22) {
        price <= 200 ? price *= 0.85 : price *= 0.75;
        daysLeft <= 15 ? price *= 0.9 : null;
    }
    console.log(price.toFixed(2));
}
pastryShop(["Cake", "5", "12"])

/**
 Задача 3. Сладкарница
С наближаването на коледните и новогодишни празници сладкарница започва записване на поръчки
 за изработка на сладкиши, като предлага следния ценоразпис и отстъпки според датата
  на която е направена поръчката. 

                    Торта 	        Суфле	        Баклава
До 15 декември	    24 лв./бр.	    6.66 лв./бр.	12.60 лв./бр.
След 15 декември	28.70 лв./бр.	9.80 лв./бр.	16.98 лв./бр.


До 22 декември включително съществуват следните отстъпки, които се прилагат в следния ред: 
•	При поръчка от 100 лв. до 200 лв. -> 15% отстъпка
•	При поръчка над 200 лв. -> 25% отстъпка
•	До 15 декември включително -> 10% допълнителна отстъпка от крайната цена

Вход
От конзолата се четат 3 реда:
1.	Сладкиш - текст - "Cake", "Souffle" или "Baklava"
2.	Брой на поръчаните сладкиши - цяло число в интервала [1 … 10000]
3.	Ден от месец декември преди Коледа - цяло число в интервала [1 … 24]

Изход
На конзолата се отпечатва 1 ред:
•	Цената, която трябва да се заплати, форматирана до втория знак след десетичната запетая
Примерен вход и изход

(["Cake","10","15"])
162.00

(["Souffle","20","24"])
196.00

(["Baklava","50","1"])
425.25

(["Cake","5","12"])
91.80

 */