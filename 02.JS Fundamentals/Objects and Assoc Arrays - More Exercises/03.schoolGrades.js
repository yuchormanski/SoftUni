/* School Grades
In this problem you have to arrange all students by grade. You as the secretary of the school principal 
will process students and store them into a school register before the new school year to hit. 
Аs a draft you have a list of all the students from last year but mixed. Кeep in mind that if a 
student has a lesser grade than 3 he does not go into the next class. As result of your work, you have to 
print the entire school register sorted in Ascending order by grade already filled with all the students from last year in format:

"{nextGrade} Grade
List of student: {All students in that grade}
Average annual grade from last year: {average annual grade on the entire class from last year}
And empty row {console.log}"

Input
The input will be array, with strings, each containing a student's name, last year's grade, and an annual grade. */


function schoolGrades(input) {
    let data = input.slice();
    // take only name, grade and score
    const regex = /\: (?<name>[A-Za-z]+), Grade\: (?<grade>[\d]+), Graduated with an average score\: (?<average>[\d][\.]{1}[\d]*)/;
    let schoolArray = [];

    //create school Object
    const school = {};

    let line = data.shift();
    while (line) {
        let student = regex.exec(line);
        let name = student.groups['name'];
        let grade = Number(student.groups['grade']);
        let average = Number(student.groups['average']);
        //next grade for current student if pass
        let nextGrade = grade + 1
        // IF student score is greater than 3 - pass to next grade
        if (average >= 3) {
            //IF next grade didn't exist -  create
            if (!school[nextGrade]) {
                school[nextGrade] = [];
            }
            // put student to next grade with last year average score
            school[nextGrade].push(name, average);
        }
        line = data.shift();
    }
    //sort object by grades a-b
    let sortedGrade = Object.keys(school).sort((a, b) => a - b);

    //iterate iver grades 
    for (const grade of sortedGrade) {
        console.log(`${grade} Grade`);
        let currentClass = school[grade];
        let names = [];
        let grades = [];
        while (currentClass.length !== 0) {
            //collect names of students
            names.push(currentClass.shift());
            // collect students score for average calculation
            grades.push(currentClass.shift());
        }
        // calculate average score for current grade
        let averageGrade = (grades.reduce((grade, x) => grade + x) / grades.length);
        //print names
        console.log(`List of students: ${names.join(', ')}`);
        //print average score
        console.log(`Average annual grade from last year: ${averageGrade.toFixed(2)}\n`);
    }
}
schoolGrades([
    'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
    'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
    'Student name: George, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
    'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
    'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
    'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
    'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
    'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
    'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
    'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
    'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00'
]);