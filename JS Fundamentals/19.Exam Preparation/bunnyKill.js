
function bunnyKill(input){
    let coo = input.pop().split(',').map(Number);

    for(let r = 0; r < input.length; r++){
        let row = input[r].split(' ').map(Number);
        for (let c = 0; c < row.length; c++){
            let num = Number(input[r][c]);

            if(r === coo[0] && c === coo[1]){ //IF - bomb!

            }
        }
    }

}
bunnyKill([ '10 10 10', 
            '10 10 10', 
            '10 10 10', 
            '0,0'])