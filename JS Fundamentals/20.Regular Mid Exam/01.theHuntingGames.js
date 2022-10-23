/*
01.The-Hunting-Games
A group of friends has decided to participate in a game. The first stage of the game is to gather some supplies. They have a list, and your job is to help them follow it and make the needed calculations.
Write a program that calculates the needed provisions for a quest in the woods.
First, you will receive the days of the adventure, the count of the players, and the group's energy. Afterward, you will receive provisions for a day for one person:
Water
Fooд
The group calculates how many supplies they'd need for the adventure and takes that much water and food.
Every day they chop wood and lose a certain amount of energy. For each of the days, you are going to receive the amount 
of energy lost from chopping wood. The program should end if the energy reaches 0 or less.
Every second day they drink water, which boosts their energy with 5% of their current energy 
and at the same time drops their water supplies by 30% of their current water.
Every third day they eat, which reduces their food supplies (all food they have) by the following amount:
{currentFood} / {countOfPeople] and at the same time raises their group's energy by 10%.
The chopping of wood, the drinking of water, and the eating happen in the order above.
If they have enough energy to finish the quest, print the following message:
"You are ready for the quest. You will be left with - {energyLevel} energy!"
If they run out of energy, print the following message and the food and water they were left with before they ran out of energy:
"You will run out of energy. You will be left with {food} food and (water} water."

Input / Constraints
On the 1* line, you will receive a number N- the days of the adventure - an integer in the range [1...100].
On the 2nd line - the number of players - an integer in the range [1 - 10001.
On the 3rd line - the group's energy - a real number in the range [1 - 50000].
On the 44 line - water per day for one person - a real number [0.00 - 1000.00].
On the 54 line - food per day for one person - a real number [0.00 - 1000.00].
On the nextN lines - one for each of the days- the amount of energy loss- a real number in the range [0.00 - 
The possible outputs are:
    •	"You are ready for the quest. You will be left with - {energyLevel} energy!"
    •	"You will run out of energy. You will be left with {food} food and {water} water."
    Format to second decimal point
 */

function theHuntingGames(inputData) {
    let days = Number(inputData.shift());
    let players = Number(inputData.shift());
    let energy = Number(inputData.shift());
    let waterForOne = Number(inputData.shift());
    let water = days * waterForOne * players;
    let foodForOne = Number(inputData.shift());
    let food = days * foodForOne * players;
    let energyLoss = inputData.map(Number);
    let counter = 1;

    for (let i = 0; i < days; i++) {
        energy -= energyLoss[i];
        if (energy <= 0) {
            console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`);
            return;
        }
        if (counter % 2 === 0) {
            energy *= 1.05;
            water *= 0.7;
        }
        if (counter % 3 === 0) {
            let foodLoss = food / players;
            food -= foodLoss;
            energy *= 1.1;
        }
        counter++;
    }
    console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
}
theHuntingGames(['10', '7', '5035.5','11.3', '7.2', '942.3','500.57', '520.68', '540.87','505.99', '630.3', '784.20','321.21', '456.8', '330',])
theHuntingGames(["12","6","4430","9.8","5.5","620.3","840.2","960.1","220","340","674","365","345.5","212","412.12","258","496"])