function graduation(input){
    let name = input[0];
    let i = 1;
    let command = Number(input[i]);
    let cut = 0;
    let total = 0;
    let isOut = false;
    while(i < input.length){
        
        if(command >= 4){
            total += command;
            command = Number(input[++i]);
        } else {
            cut++;
            total += command;
            command = Number(input[++i]);
        }
        if(cut > 1){
            console.log(`${name} has been excluded at ${i-2} grade`);
            isOut = true;
            break;
        }
    }
    if(!isOut){
        console.log(`${name} graduated. Average grade: ${(total / i).toFixed(2)}`);
    }
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
