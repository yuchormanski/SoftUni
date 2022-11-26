/* СофтУни организира Великденско парти. Всеки член на екипа тегли листче с номер от голяма купа. 
Печели всеки, който е изтеглил просто число. Твоята задача е да напишеш програма, която изписва 
всички печеливши числа в даден диапазон, както и общият брой на раздадените награди. 

Вход
•	На първият ред получаваме числото N – стартовото число от диапазона.
•	На вторият ред получаваме числото M – последното число от диапазона.
Изход
•	На първият ред от изхода трябва да се отпечатат всички прости числа, разделени със спейс
•	На вторият ред от изхода трябва да се отпечата колко награди са раздадени (колко прости числа са открити в зададения диапазон): 
"The total number of prime numbers between {старт на диапазона} to {край на диапазона} is {брой прости числа}"

Ограничения
•	Числото N е цяло число в интервала [1…10 000];
•	Числото M е цяло число в интервала [1…10 000];
Числото N винаги ще е по-малко от числото M! */

function easterPrize(input) {
    let data = input.slice();
    let start = Number(data.shift());
    let end = Number(data.shift());
    let collector = [];
    let isPrime = true;
    start === 1 ? start = 2 : null;

    for (let n = start; n <= end; n++) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime === true) {
            collector.push(n);
        }else{
            isPrime = true;
        }
    }
    console.log(collector.join(' '));
    console.log(`The total number of prime numbers between ${start} to ${end} is ${collector.length}`);
}
easterPrize(['4', '36']);