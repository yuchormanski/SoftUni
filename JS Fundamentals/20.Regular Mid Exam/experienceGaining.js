/* Experience Gaining
Write a program that helps a player figure how many battles he will need to play in a battle video game to 
unlock the next tank in the line.
On the first line, you will receive the amount of experience needed to unlock the tank. On the second line, 
you will receive the count of battles. On the following lines, you will receive the experience the player can gain in every battle.
Calculate if he can unlock the tank. Keep in mind that he gets 15% more experience for every third battle 
and 10% less for every fifth battle, and 5% more experience on every fifteenth. You also need to stop the 
program as soon as he collects the needed experience.
Format the output as shown below.

Input
On the first line, you will receive the needed experience amount - a real number in the range[0.0...400000.0].
On the second line, you will receive the count of battles - an integer number in the range[0...500].
On the following lines, you will receive the experience earned per battle - a real number in the range[10.0...5000.0].
Output
• If he managed to gather the experience:
"Player successfully collected his needed experience for {battleCount} battles."
• If he was not able to do it:
"Player was not able to collect the needed experience, {neededExperience} more needed."
NOTE: Format the needed experience to the second decimal place.
Examples:
Input

([500,5,50,100,200,100,201)                         Output

                                                    Player was not able to collect the needed experience, 2.00 more needed.


Input

([400,5,50,100,200,100,201)                         Output

                                                    Player successfully collected his needed experience for 4 battles.

 */