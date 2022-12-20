function password(input) {
    let i = 2;
    let command = input[i];
    while (i < input.length) {
        command === input[1] ? console.log(`Welcome ${input[0]}!`) : null;
        command = input[++i];
    }
}
password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])

