function wordTracker(input) {
    let words = {};
    let searched = input.shift().split(' ');

    for(let word of searched){
        words[word] = 0;
    }
    
    for(let el of input){
        if(searched.includes(el)){
            words[el]++;
        }
    }

    let sorted = Object.entries(words).sort((a,b) => b[1] - a[1]);
    for(let line of sorted){
        console.log(`${line[0]} - ${line[1]}`);
    }
}
wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 
    'have', 'to', 'count', 'the', 
    'occurrences', 'of', 'the', 'words', 
    'this', 'and', 'sentence', 'because', 
    'this', 'is', 'your', 'task'
    ])