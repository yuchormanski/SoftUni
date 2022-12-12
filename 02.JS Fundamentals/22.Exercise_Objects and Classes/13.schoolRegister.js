/* 3.	School Register
In this problem, you have to arrange all students by grade. You as the secretary of the school principal will 
process students and store them into a school register before the new school year hits. As a draft, 
you have a list of all the students from last year but mixed. Keep in mind that if a student has a lower score than 3, 
he does not go into the next class. As a result of your work, you have to print the entire school register 
sorted in ascending order by grade already filled with all the students from last year in the format:
`{nextGrade} Grade
List of students: {All students in that grade}
Average annual score from last year: {average annual score on the entire class from last year}`
And empty row {console.log}
The input will be an array with strings, each containing a student's name, last year's grade, and an annual score. 
The average annual score from last year should be formatted to the second decimal point.
 */

function schoolRegister(studentList) {
    let students = {};
    studentsObj()

    function studentsObj() {
        for (let student of studentList) {
            let current = student.split(', ');
            let studentName = current[0].split(': ').slice(-1).join();
            let grade = Number(current[1].split(': ').slice(-1).join());
            let score = Number(current[2].split(': ').slice(-1).join());

            if (score >= 3) {
                let student = {
                    name: studentName,
                    score: score,
                };
                if (!students.hasOwnProperty(grade)) {
                    students[grade] = [];
                }
                students[grade].push(student);
            }
        }
    }

    //sort keys in object a-b
    let studentsSort = Object.keys(students).sort((a, b) => a - b);

    // start from min grade
    for (let el of studentsSort) {
        let average = 0;
        let counter = 0;
        let nameList = [];
        //check if current person object is in same grade
        for (let obj in students) {
            if (obj === el) {
                for (let studentObj of students[obj]) {
                    let personalScore = studentObj.score;
                    average += personalScore;
                    counter++;
                    nameList.push(studentObj.name)
                }
            } else {
                continue;
            }
            console.log(`${Number(el) + 1} Grade\nList of students: ${nameList.join(', ')}\nAverage annual score from last year: ${(average / counter).toFixed(2)}`);
            console.log();
            break;
        }
    }
}
// schoolRegister([
//     "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//     "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
// ])

schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
])