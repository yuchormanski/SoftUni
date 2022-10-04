/* 5.	Cats
Write a function that receives array of strings in the following format '{cat name} {age}'.
Create a Cat class that receives in the constructor the name and the age parsed from the input. 
It should also have a method named "meow" that will print "{cat name}, age {age} says Meow" on the console.
For each of the strings provided, you must create a cat object and invoke the .meow () method.
Examples
Input	                                Output
['Mellow 2', 'Tom 5']	                Mellow, age 2 says Meow
                                        Tom, age 5 says Meow

['Candy 1', 'Poppy 3', 'Nyx 2']	        Candy, age 1 says Meow
                                        Poppy, age 3 says Meow
                                        Nyx, age 2 says Meow
Hints
•	Create a Cat class with properties and methods described above
•	Parse the input data
•	Create all objects using the class constructor and the parsed input data, store them in an array
•	Loop through the array using for…of a cycle and invoke .meow() method
 */

function cats(catArray){
    // TODO: Create the Cat class

	let cats = [];
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
          }
    };
	for (let i = 0; i < catArray.length; i++) {
        	   let catData = catArray[i].split(' ');
            cats.push(new Cat(catData[0], catData[1]));
     }
	// TODO: Iterate through cats[] and invoke .meow()
        //using for…of loop

}

cats(['Mellow 2', 'Tom 5'])