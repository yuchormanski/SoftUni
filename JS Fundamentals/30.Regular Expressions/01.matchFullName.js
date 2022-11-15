// Write a JavaScript function to match full names from a list of names and print them on the console.

function matchFullName(line) {
    let names = [];
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    
    while ((validName = pattern.exec(line)) !== null) {
        names.push(validName[0]);
    }
    console.log(names.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");