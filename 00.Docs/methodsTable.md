# JavaScript Methods

### Table of Contents

| No. | Method |
|---- | ---------
|  1  | [.at()](#array-at-method)
|  2  | [.charAt()](#string-charat-method)
|  3  | [.charCodeAt()](#string-charcodeat-method)
|  4  | [.concat()](#array-concat-method)
|  5  | [.endsWith()](#string-endswith-method)
|  6  | [.every()](#array-every-method)
|  7  | [.fill()](#array-fill-method)
|  8  | [.filter()](#array-filter-method)
|  9  | [.find()](#array-find-method)
|  10 | [.findIndex()](#array-findindex-method)
|  11 | [.forEach()](#array-foreach-method)
|  12 | [.includes()](#array-includes-method)
|  13 | [.indexOf()](#array-indexOf-method)
|  14 | [.join()](#array-join-method)
|  15 | [.lastIndexOf()](#array-lastindexof-method)
|  16 | [.length](#array-length-method)
|  17 | [.map()](#array-map-method)
|  18 | [Number](#array-number-method)
|  19 | [.padEnd()](#array-padend-method)
|  20 | [.padStart()](#array-padstart-method)

|  24 | [.push();](#array-push-method)
|  23 | [.pop();](#array-pop-method)        
|  34 | [.shift();](#array-shift-method)
|  39 | [String.fromCharCode()](#String-from-char-code) 

1. ### Array at() method

Return element at that index from the array. Allowing positive and negative integers.
Negative integers count back from the last item in the array.

```javascript

   // with positive integer
   function solve(){
      const arr = [1, 2, 3, 4]
      let num arr.at(2);
      return num;
   }

   // expect num = 3;

   //with negative integer
      function solve(){
      const arr = [1, 2, 3, 4]
      let num arr.at(-3);
      return num;
   }

   // expect num = 2;
```
**[⬆ Back to Top](#table-of-contents)**

2. ### String charAt() method

Returns element in given index from string.

```javascript

   function solve(){
      const str = 'sample'; 
      const index = 2;
      let letter = str.charAt(index);
      return letter;
   }

   // expect arr = m
```
**[⬆ Back to Top](#table-of-contents)**

3. ### String charAt() method

The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index. 

```javascript

   function solve(){
      const str = 'sample'; 
      const index = 2;
      let letter = str.charCodeAt(index);
      return letter;
   }

   // expect arr = 109
```
**[⬆ Back to Top](#table-of-contents)**

4. ### Array concat() method

The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. 

```javascript

   function solve(){
      const arr1 = [1,2,3]; 
      const arr2 = ['a','b','c'];
      const arr3 = arr1.concat(arr2);
      return arr3;
   }

   // expect arr3 = [1, 2, 3, 'a','b','c']
```
**[⬆ Back to Top](#table-of-contents)**

5. ### String endsWith() method

The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

```javascript

   function solve(){

    const str = 'sample';
    console.log(str.endsWith('e'));
    // Expected output: true
 }

   // expect arr3 = [1, 2, 3, 'a','b','c']
```
**[⬆ Back to Top](#table-of-contents)**

6. ### Array every() method

The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.  

```javascript

function solve(){
    const num = 1;
    const str = 'a';
    const arr1 = [1, 1, 2]; 
    const arr2 = ['a', 'a', 'a'];
    
    console.log(arr1.every(element => element === num));
    // Expected output: false
    console.log(arr2.every(element => element === str)); 
    // Expected output: true
 }

```
**[⬆ Back to Top](#table-of-contents)**

7. ### Array fill() method

The fill() method changes all elements in an array to a static value, from a start index (default 0) 
to an end index (default array.length). It returns the modified array. 

```javascript

function solve(){

   const arr = [1, 2, 3, 4];
   const arr2 = [1, 3, 2, 5, 6];
    // Fill with 0 from position 2 until position 4;
   console.log(arr.fill(0, 2, 4));
   // Expected output: Array [1, 2, 0, 0]

   console.log(arr2.fill(4))
   // Expected output: arr2 [4, 4, 4, 4, 4]


 }

```
**[⬆ Back to Top](#table-of-contents)**

23. ### Array pop method

Removes last element from the array

```javascript

   function solve(){
      const arr = [1, 2, 3, 4]
      arr.pop();
      return arr;
   }

   // expect arr = [1, 2, 3]
```
**[⬆ Back to Top](#table-of-contents)**

24. ### Array push method

Put the element in the array in the end

```javascript

   function solve(){
      let n = 4;
      const arr = [1, 2, 3]
      arr.push(n);
      return arr;
   }

   // expect arr = [1, 2, 3, 4]
```
**[⬆ Back to Top](#table-of-contents)**


32. ### Array shift method

Removes first element from the array

```javascript

   function solve(){
      const arr = [1, 2, 3, 4]
      let x = arr.shift();
      return `${arr}; ${x}`;
   }

   // expect [2, 3, 4]; 1
```
**[⬆ Back to Top](#table-of-contents)**

39. ### String from char code

Return string letter corresponding on the ASCII code number

```javascript

   function solve(){
      let n = 107;
      console.log(String.fromCharCode(n))
   }

   // expect k
```
**[⬆ Back to Top](#table-of-contents)**



at
charAt
charCodeAt
concat
endsWith
every
fill
filter
find
findIndex
forEach
includes
indexOf
join
lastIndexOf
length
map
Number
padEnd
padStart
parseFloat
parsInt
pop
push
reduce
repeat
replace
replaceAll
reverce
search
Set
shift
slice
some
sort
splice
split
startsWith
String.fromCharCode
substring
toString
trim
trimEnd
trimStart
unshift