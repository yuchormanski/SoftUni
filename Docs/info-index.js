function sumDigits(numArr, strArr, x, xyz) {
    //let aa = xyz.replace('y', 'Y'); console.log(aa);                     // replace y with Y
    //let ab = xyz.split(''); console.log(ab);                             // split string to chars
    //let ac = strArr.join(''); console.log(ac);                           // join the array ['a''b''c']
    //let ad = numArr.reverse(); console.log(ad);                          // reverse the array order
    //let ae = x.repeat(3); console.log(ae);                               //a.repeat(x) - repeat 'a' x times
    //let ag = xyz.includes('y'); console.log(ag);                         //STRING.includes('') - true or false => xyz.includes('x') - true
    //let af = xyz.length; console.log(af);                                //string.length - Number string length
    //let ah = xyz.slice(0,2); console.log(ah);                            //ABCDEFG.slice(0, 4) -изрязва част от стринга по зададен стринг индекс диапазон => ABCD; ABCDEFG.slice(1, 4) => BCD
    //let lastElement = numArr.slice(-1); console.log(lastElement);        //Providing one index value returns the element at that position & a negative index value calculates the index from the end of the array.
    //let ai = strArr.shift(); console.log(ai);                            //let first = array.shift() - премахва първия елемент от масива и го запазва във first 
    //let aj = numArr.pop(); console.log(aj);                              //let last = array.pop() -премахва последния елемент от масива и го запазва във last. If the array is empty, undefined is returned and the array is not modified.
    //let ak = strArr.splice(1, 1); console.log(strArr);                   //method adds and/or removes array elements. - https://www.w3schools.com/jsref/jsref_splice.asp
    //let ak = strArr.splice(1, 0, 'd'); console.log(strArr);
    //strArr.push(x); console.log(strArr);                                 //array.push('x') - добавя х накрая на съществуващ array [a,b,c] => [a,b,c,x];
                //може са се добавят повече от един елемент. str.push(x,y,'abc','ala-bala')
    //numArr.unshift(xyz);console.log(numArr);                             //array.unshift('x') - добавя х в началото на съществуващ array [a,b,c] => [х,a,b,c];
    //let al = xyz.search('y'); console.log(al);                           // търси зададения елемент в стринга и връща индекса му
    //let al = xyz.search('y',2); console.log(al);                         // търси зададения елемент в стринга и връща индекса му, като започва от зададената позиция
    //console.log(xyz.indexOf('y',2));                                     // връща индекса на първия търсен елемент от стринга , като започва от зададената позиция(ако не се включи стартира от 0)
    //numArr.sort(function (a, b) { return b - a }); console.log(numArr);  //сортиране на масив числа от голямо към малко
    //numArr.sort(function (a, b) { return a - b }); console.log(numArr);  //сортиране на масив числа от малко към голямо
    //str.sort(); console.log(str);                                        //сортиране на масив стринг от а към я

}
sumDigits([1, 2, 3,], ['a', 'b', 'c'], 'x', 'xyz')