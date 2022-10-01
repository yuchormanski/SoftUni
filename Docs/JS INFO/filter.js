/* function filterNum(numArray) {
    // let filteredArray = numArray.filter(  // FILTER all numbers > 4
    //     function(currentNum){
    //         return currentNum > 4;
    //     }
    // )

    // Same as above
    // let filteredArray = numArray.filter(function(n){
    //     return n > 4;
    // });

    // Same as above
    let filteredArray = numArray.filter(n => n > 4);

    console.log(filteredArray);
}
filterNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) */

function filterStr(strArray) {

    // let filteredArray = strArray.filter(function(currentStr){ // IF element of array includes 'f'
    //     return currentStr.includes('f');
    // });
    // console.log(filteredArray);  

    // Same as above
    let filteredArray = strArray.filter(str => str.includes('f'));

    console.log(filteredArray);
}
//filterStr(['abc', 'dfg', 'hij', 'klm', 'opq', 'rst', 'uvw', 'xyz'])

function filterNum(numArray) {
    let sum = 0;
    numArray.sort(currentNum => sum += currentNum )
    console.log(sum);
}
filterNum([1, 2, 3,])