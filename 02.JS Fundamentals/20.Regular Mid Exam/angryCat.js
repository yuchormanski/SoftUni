/* The Angry Cat
John is very angry with his owner because he left him alone during the teamwork defenses for the 
Programming Fundamentals Course at SoftUni. It's time for John to get his payback, and he will do 
it by breaking various household items.
Each item has a price rating, a number that describes how valuable that item is for John's owner. 
You will be given an entry point from which John will break the items to his left and then to his right. 
John will never break the item at his entry point.
You must calculate the damage to both his left and right, then print only the higher (bigger) damage to the household.
If both sums are equal, print the left one.

Input / Constrains
• On the first line, you will receive the price ratings, separated by (", "). Each element will be an integer in the range [-2"... 2'"]
On the second line, you will receive the entry point, which will always be between the second and the penultimate element in the array
• On the third line, you will receive the type of items Tom wants to break, which will be one of the following:
"cheap" - items that have a lower price rating than the entry point item
"expensive" - items that have the same price rating, or higher price rating than the entry point item

Output
• A single line containing the sum of price ratings and their position based on the entry point in the following format:
"(position} - (sum of price ratings)"

• Positions can be "Right" or "Left"

([1, 5, 1],1,"cheap")	                                        Left - 1
([5, 10, 12, 5, 4, 20],3,"cheap")	                            Right - 4
([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],7,"expensive")	    Left - 20

 */

function angryCat(items, entryPoint, valuable) {
    let left = items.slice(0, entryPoint);
    let right = items.slice(entryPoint + 1);
    let sumL = 0;
    let sumR = 0;
    let num = items[entryPoint];

    if (valuable === "expensive") {
        sumL = left.filter(n => n >= num);
        sumL.length === 0 ? sumL = 0 : sumL = sumL.reduce((el, x) => el + x);
        sumR = right.filter(n => n >= num);
        sumR.length === 0 ? sumR = 0 : sumR = sumR.reduce((el, x) => el + x);

    } else if (valuable === "cheap") {
        sumL = left.filter(n => n < num);
        sumL.length === 0 ? sumL = 0 : sumL = sumL.reduce((el, x) => el + x);
        sumR = right.filter(n => n < num);
        sumR.length === 0 ? sumR = 0 : sumR = sumR.reduce((el, x) => el + x);
    }
    sumL >= sumR ? console.log(`Left - ${sumL}`) : console.log(`Right - ${sumR}`);
}
angryCat([6, 2, 3, 4, 0, 6, 7, 8], 5, "expensive")
angryCat([6, 2, 3, 4, 0, 6, 7, 3, 5, -8], 5, "cheap")
angryCat([1, 5, 1], 1, "cheap")	                                        //Left - 1
angryCat([5, 10, 12, 5, 4, 20], 3, "cheap")	                           // Right - 4
angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive")	    //Left - 20