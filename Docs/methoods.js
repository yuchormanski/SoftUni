String.fromCharCode(107); //
x.charCodeAt(); //
[1, 2, 3].push(4); // [1, 2, 3, 4]
[1, 2, 3].pop(); // [1, 2]
[1, 2, 3].shift(); // [2, 3]
[1, 2, 3].unshift(0); // [0, 1, 2, 3]
['a', 'b'].concat('c'); // ['a','b','c']
['a', 'b', 'c'].join('-'); // 'a-b-c'
['a', 'b', 'c'].slice(1); // ['b','c']
['a', 'b', 'c'].splice(1, 1, 'd'); // ['b','c','d'] // .splice(startIndex, elementQty,elementToAdd)
['a', 'b', 'c'].indexOf('b'); // 1
['a', 'b', 'c'].includes('c'); // true
['a', 'b', 'c'].sort() //a,b,c
[3, 5, 6, 8].find((n) => n % 2 === 0); // 6
[3, 5, 6, 8].findIndex((n) => n % 2 === 0); // 2
[3, 5, 6, 8].map((n) => n * 2); // [6, 10, 12, 16]
[3, 5, 6, 8].filter((n) => n % 2 === 0); // [4, 8]
[3, 5, 6, 8].reduce((acc, cur) => acc + cur); // 16
[3, 5, 6, 8].every((x) => x < 6); // true
[3, 5, 6, 8].some((n) => n > 6); // true
[3, 5, 6, 8].reverse(); //[8, 6, 5, 3]
[3, 5, 6, 8].at(-2); // 7
[3, 6, 5, 8].sort(function (a, b) { return b - a }); // [8,6,5,3]
xyz.replace('y', 'Y'); // xYz
xyz.split(','); // [x, y, z]
x.repeat(3); // xxx
xyz.includes('y'); // true
xyz.length; // 3
xyz.search('y'); // 1 // .search(element) -> return index
xyz.search('y',2); // .search(element, startIndex) -> return index
