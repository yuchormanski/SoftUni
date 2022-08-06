function passwordGuess(input){
    let pass = input[0]
    pass === 's3cr3t!P@ssw0rd'? console.log(`Welcome`): console.log(`Wrong password!`);;
}
passwordGuess(["s3cr3t!P@ssw0rd"])