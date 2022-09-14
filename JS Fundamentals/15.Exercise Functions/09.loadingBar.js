function loadingBar(num) {
    let [dot, percent, loadBar] = ['.', '%', '']
    let bar = dot.repeat(10).split('');
    for (let i = 1; i <= num / 10; i++) {
        bar.pop();
        bar.unshift(percent);
    }
    loadBar = bar.join('')
    num === 100 ? console.log(`${num}% Complete!\n[${loadBar}]`) :
        console.log(`${num}% [${loadBar}]\nStill loading...`);
}
loadingBar(10)


/* 9. Loading Bar
You will receive a single number between 0 and 100, which is divided with 10 without 
residue (0, 10, 20, 30...). 
Your task is to create a function that visualizes a loading bar depending on the number 
you have received in the input.
Examples
Input	    Output
30	        30% [%%%.......]
            Still loading...
50	        50% [%%%%%.....]
            Still loading...
100	        100% Complete!
            [%%%%%%%%%%]
 */