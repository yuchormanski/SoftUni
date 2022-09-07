function christmasPreparation (input){
    let paper = Number(input[0]);
    let fabric = Number(input[1]);
    let glue = Number(input[2]);
    let discount = Number(input[3]);
    let sum = 0;
    sum = (paper * 5.8 + fabric * 7.2 + glue * 1.2) * ((100 - discount)/100);
    console.log(sum.toFixed(3));
}
christmasPreparation(["7","8","0.5","45"])


/**
 Изпит по "Основи на програмирането"
Задача 1. Коледна подготовка
Коледа наближава, а Дядо Коледа още не е готов с подаръците. Той трябва да поръча материали, 
с които джуджетата да изработят коледните подаръци. Всяка Коледа в магазина,
 в който Дядо Коледа пазарува има намаление, което представлява някакъв процент от 
 цената на материалите (материалите са опаковъчна хартия във вид на ролки, плат 
също във вид на ролки и лепило в литри).От конзолата се въвеждат количеството 
ролки хартия, ролки плат, лепило в литри и намаление в проценти. 
Колко пари ще са необходими на дядо Коледа, за да плати сметката си, 
ако цените на материалите в магазина са следните:
•	Опаковъчна хартия - 5.80 лв. за ролка
•	Плат - 7.20 лв. за ролка
•	Лепило - 1.20 лв. за литър
Вход:
От конзолата се четат 4 числа:
•	Първи ред – брой ролки опаковъчна хартия - цяло число в интервала [0...100]
•	Втори ред – брой ролки плат - цяло число в интервала [0...100]
•	Трети ред –  литри лепило - реално число в интервала [0.00…50.00]
•	Четвърти ред – процент намаление - цяло число в интервала [0...100]
Изход:
Да се отпечата на конзолата реално число – колко пари ще са нужни на Дядо Коледа, за да си плати сметката.
Резултатът да се форматира до третия знак след десетичния разделител. (1.2457 -> 1.246).

(["2","3","2.5","25"])
27.150
---------
(["4","2","5","13"])
37.932
--------
(["7","8","0.5","45"])
54.340
 */