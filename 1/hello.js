function hello() {
    console.log("Hello")
}
hello()

function numb() {
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
    console.log(5)
    console.log(6)
    console.log(7)
    console.log(8)
    console.log(9)
    console.log(10)
}
numb()

function name() {
    let name = "Todor";
    let age = 45;
    console.log(name);
    console.log(age);

}
name();
/** */
function massive1 () { /* масиви */
    let arr = ["todor",45,"Sofia"]; /* индекс винаги започва от 0 - Тодор=0, 45=1, София=2 */
    console.table(arr); /* изглед на масива като талица*/
    console.log(arr[0]); /* връща само посочения индекс */
}
massive1()
/** */
function massive2 (input) { /**слага се input за да се зададе, че има вече входни данни */
    let name = input[0]; /* input0 е първата зададена стойност, долу, при извикването на функцията */
    console.log("Hello, "+ name);

}
massive2(["Todor"])


/* */
function massive3 (input) { 
    /* let input = (["Nikolay",45,"Sofia"]); - масива ще работи , но стойностите ще са само зададените, а не динамични */
    let name = input[0];
    let age = input[1];
    let town = input[2];
    console.log(name);
    console.log(age);
    console.log(town);
}
massive3(["Nikolay",45,"Sofia"])  /* стойностите на масива се слагат при извикването на функцията , за да може да са динамични*/


function readText (input) {  /* izwikwane na danni kato tekst */
    let str = input[0]
    console.log(str)
}
readText(["Nikolay"])

function readTex (input) {
    let str = Number(input[0]) /* izwikwane na danni kato chislo */
    console.log(str)
}
readTex(["45"])

function squareArea (input) {
    let a = Number(input[0]); /*  kogato echislo winagi se slaga "Number" */
    let area = a*a;
    console.log(area);
}
squareArea(["5"])

function greetingByName (input) {
    let name = input[0];
    let greet = "Hello, " + name + "!"
    console.log(greet);
}
greetingByName(["Nikolay"]);


function greetingByName (input) {
    let name = input[0];
    console.log("Hello, " + name + "!");   /* конкатенация - събиране(долепяне) на два текста*/
}


greetingByName(["Nikolay"]);

function textAndNumber (input) {
    let age = Number(input[0]);
    let name = input[1];
    console.log("My name is " + name + " and I'm " + age + " years old!");
}
textAndNumber(["45","Nikolay"])

function plusText (input) {
    let age = Number(input[0]);
    console.log(age + 5);
}
plusText(["25"])

// Делене на числа
function divade (input) {
    let a = 25;
    let i = a / 4; //ще се извърши дробно деление = 6.25
    let f = parseInt(a/4.0); //дробната част се изрязва = 6
    let infinity = a / 0; //безкрайност
    console.log(i);
    console.log(f);
    console.log(infinity);
}
divade()


function divade2 () {

    console.log(10 % 2); //модулно деление - връща като отговор остатъка от числовото деление (2 се съдържа 5 пъти в 10 -> няма остатък)
    console.log(10 % 3); //3 се съсдържа 3 пъти в 10 и остава остатък 1
}
divade2()

function newText (input) {     //интерполация
    let firstName = input[0];    //съединяване на текст с плейсхолдер
    let lastName = input[1];
    let age = Number(input[2]);
    let town = input[3];
    let result = `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`
    console.log(result)
}
newText(["Nikolay","Yuchormanski", 45 , "Sofia"])


//4
function inchToCent (input) {
    let cent = Number(input[0]);
    let result = cent * 2.54;
    console.log(result);
}
inchToCent(["5"]);


//7
function archTime (input) {
    let arch = input[0];
    let projects = input[1];
    let workTime =`The architect ${arch} will need ${projects * 3} hours to complete ${projects} project/s.` 
    console.log(workTime);
}
archTime(["Atanas", "4"])


//8
function zooMag (input) {
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let price = (dogFood*2.50) + (catFood*4);
    console.log(`${price} lv.`)
}
zooMag(["5","4"])

function yardGree (input) {
    let yard = Number(input[0]);
    let disc = Number(input[1]);
    let bill = yard * 7.61;
    let fullDisc = bill * disc;
    let billDisc = bill-fullDisc;
    console.log(`The final price is: ${billDisc} lv.`);
    console.log(`The discount is: ${fullDisc} lv.`);
}
yardGree(["550","0.18"])


function yardGreening (input) {
    let yard = Number(input[0]);
    let discPercent = 18/100;
    let fullPrice = yard * 7.61; //full price 4185.50
    let discount = fullPrice * discPercent; // 753.39
    let myBill = fullPrice - discount;
    let bill = `The final price is: ${myBill} lv.`;
    let saveMoney =  `The discount is: ${discount} lv.`;
    console.log(bill);
    console.log(saveMoney);
}
yardGreening(["550"]);