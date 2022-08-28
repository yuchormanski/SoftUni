function oldBooks(input){
    let favorite = input[0];
    let i = 1;
    let book = input[i];
    let counter = 0;
    while(book !== "No More Books") {
        if(book === favorite){
            console.log(`You checked ${counter} books and found it.`);
            break;
        }
        counter++;
        book = input[++i];
    }
    if(book !== favorite){
        console.log(`The book you search is not here!\nYou checked ${counter} books.`);
    }
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


