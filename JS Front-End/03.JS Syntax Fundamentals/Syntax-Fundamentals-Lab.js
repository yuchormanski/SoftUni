function multBy2(n) {
    console.log(n * 2);
}
// multBy2(3)

function studentInformation(name, age, grade) {
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}
// studentInformation('Pesho', 23, 8)

function excellentGrade(grade) {
    let res;
    grade >= 5.5 ? res = 'Excellent' : res = 'Not excellent';
    console.log(res);
}
// excellentGrade(5.5)

function monthPrinter(inputMonth) {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log(month[inputMonth - 1]);
}
// monthPrinter(2)

function movieList(data) {
    const movies = [];
    data.forEach(x => {
        if (x.includes('addMovie')) {
            let movieName = x.split('addMovie ')[1];
            movies.push({ name: movieName })
        }
        else if (x.includes('directedBy')) {
            let [movieName, director] = x.split(' directedBy ');
            const found = movies.find(n => n.name === movieName);
            if (found) {
                found.director = director;
            }
        }
        else if (x.includes('onDate')) {
            let [movieName, date] = x.split(' onDate ');
            const found = movies.find(n => n.name === movieName);
            if (found) {
                found.date = date;
            }
        }
    })
    movies.forEach(movie => console.log(JSON.stringify(movie)));
    
}
movieList(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
)