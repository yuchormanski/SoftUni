/* Merry has a guinea pig named Puppy, that she loves very much. Every month she goes to the nearest 
pet store and buys him everything he needs – food, hay, and cover.
On the first three lines, you will receive the quantity of food, hay, and cover, which Merry buys 
for a month (30 days). On the fourth line, you will receive the guinea pig's weight.

Every day Puppy eats 300 gr of food. Every second day Merry first feeds the pet, then gives it a 
certain amount of hay equal to 5% of the rest of the food. On every third day, 
Merry puts Puppy cover with a quantity of 1/3 of its weight.
Calculate whether the quantity of food, hay, and cover, will be enough for a month.
If Merry runs out of food, hay, or cover, stop the program!
Input
•	On the first line – quantity food in kilograms - a floating-point number in the range [0.0 – 10000.0]
•	On the second line – quantity hay in kilograms - a floating-point number in the range [0.0 – 10000.0]
•	On the third line – quantity cover in kilograms - a floating-point number in the range [0.0 – 10000.0]
•	On the fourth line – guinea's weight in kilograms - a floating-point number in the range [0.0 – 10000.0]
Output
•	If the food, the hay, and the cover are enough, print:
o	"Everything is fine! Puppy is happy! Food: {excessFood}, Hay: {excessHay}, Cover: {excessCover}."
•	If one of the things is not enough, print:
o	"Merry must go to the pet store!"
The output values must be formatted to the second decimal place!

Input	                        Output	
(["10", 
"5", 
"5.2", 
"1"])	                        Everything is fine! Puppy is happy! Food: 1.00, Hay: 1.10, Cover: 1.87



(["1", 
"1.5", 
"3", 
"1.5"
])	                            Merry must go to the pet store!

(["9",
"5",
"5.2",
"1"])	                        Merry must go to the pet store!
 */

function guineaPig(foodArray) {
    foodArray = foodArray.map(Number);
    let day;
    let food = foodArray.shift() * 1000;
    let hay = foodArray.shift() * 1000;
    let cover = foodArray.shift() * 1000;
    let weight = foodArray.shift() * 1000;
    for (day = 1; day <= 30; day++) {
        food -= 300;
        if (day % 2 === 0) {
            hay -= (food * 0.05)
        }
        if (day % 3 === 0) {
            cover -= weight / 3;
        }
        if (food <= 0 || hay <= 0 || cover <= 0){
            return console.log("Merry must go to the pet store!");
        }
     }
console.log(`Everything is fine! Puppy is happy! Food: ${(food/1000).toFixed(2)}, Hay: ${(hay/1000).toFixed(2)}, Cover: ${(cover/1000).toFixed(2)}.`);
}
guineaPig(["10", "5", "5.2", "1"])