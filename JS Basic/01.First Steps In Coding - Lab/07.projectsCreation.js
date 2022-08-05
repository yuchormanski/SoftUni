function projectsCreation(input){
    let name = input[0];
    let project = Number(input[1]);
    console.log(`The architect ${name} will need ${project * 3} hours to complete ${project} project/s.`);
}
projectsCreation(["George ","4 "])