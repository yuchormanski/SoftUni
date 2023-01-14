String.fromCharCode(107); //
x.charCodeAt(); //
[1, 2, 3].push(4); // [1, 2, 3, 4]
[1, 2, 3].pop(); // [1, 2]
[1, 2, 3].shift(); // [2, 3]
[1, 2, 3].unshift(0); // [0, 1, 2, 3]
['a', 'b'].concat('c'); // ['a','b','c']
['a', 'b', 'c'].join('-'); // 'a-b-c'
['a', 'b', 'c'].slice(1); // ['b','c']
['a', 'b', 'c'].splice(1, 1, 'd'); // ['a','d','c'] // .splice(startIndex, elementQty,elementToAdd)
['a', 'b', 'c'].indexOf('b'); // 1
['a', 'b', 'b', 'b', 'c'].lastIndexOf('b'); // 3
['a', 'b', 'c'].includes('c'); // true
['a', 'c', 'B'].sort((a, b) => a.localeCompare(b)); //a,b,c
[3, 5, 6, 8].find((n) => n % 2 === 0); // 6
[3, 5, 6, 8].findIndex((n) => n % 2 === 0); // 2
[3, 5, 6, 8].map((n) => n * 2); // [6, 10, 12, 16]
[3, 5, 6, 8].filter((n) => n % 2 === 0); // [4, 8]
[3, 5, 6, 8].reduce((acc, cur) => acc + cur); // 16
[3, 5, 6, 8].every((x) => x < 9); // true
[3, 5, 6, 8].some((n) => n > 6); // true
[3, 5, 6, 8].reverse(); //[8, 6, 5, 3]
[3, 5, 6, 8].at(-2); // 7
[1, 1, 1, 1].fill(4); // [4, 4, 4, 4]
[3, 6, 5, 8].sort((a, b) => b - a); // [8,6,5,3]
[1, 2, 3, 4, 5, 6].forEach((x) => console.log(x + 1)); // 2,3,4,5,6,7 every on new line
[7, 8, 9, 7, 2, 3, 4, 1, 2] -> let unique = new Set(array); console.log(...unique);
xyz.replace('y', 'Y'); // xYz
xyzxyzxyzxyz.replaceAll('y', 'Y'); // xYzxYzxYzxYz    better use RegExp replace
xyz.split(','); // [x, y, z]
x.repeat(3); // xxx
xyz.includes('y'); // true
xyz.length; // 3
xyz.search('y'); // 1 // .search(element) -> return index
xyz.search('y', 2); // .search(element, startIndex) -> return index
'  xyz '.trim() -> 'xyz' // trimStart(); trimEnd()
'xyz'.startsWith('x'); // true
'xyz'.endsWith('x'); // true
'xyz'.padStart(7, 'x'); // -> xxxxxyz; adds string at the beginning until reached the length; padStart(length,string);
'xyz'.padEnd(7, 'z'); // ->xyzzzzz;
'abcdefghij'.substring(3, 6); //-> def; substring(startIndex - included , endIndex - excluded);
n = '00001001'; parseInt(n, 2); // -> 9
n = 9; n.toString(2); // -> 1001
parseFloat(5.001.toFixed(5)) => 5.001 // remove trailing zeros from string;

