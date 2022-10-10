
function largestCommonEnd(arr1, arr2) {
    let counterL = 0;
    let counterR = 0;
    let left = arr1.length;
    let right = arr2.length;
    for(let i = 0; i < left; i++){
        if(arr1[i] === arr2[i]){
            counterL++;
        }
    }
    for(let j = right; j > 0; j--){
        if(arr1[j] === arr2[j]){
            counterR++;
        }
    }
    if(counterL >= counterR){
        console.log(counterL);
    } else{
        console.log(counterR);
    }
}
largestCommonEnd(['hi', 'php', 'java', 'csharp', 'sql', 'html', 'css', 'js'],
                ['hi', 'php', 'java', 'js', 'softuni', 'nakov', 'java', 'learn'])