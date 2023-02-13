# JavaScript Methods

### Table of Contents

| No. | Method |
|---- | ---------
|  1  | [array.at()](#array-at-method)
|  5  |           
|  6  |           
|  7  |           
|  8  |           
|  9  |           
|  10 |           
|  24 | [array.push();](#array-push-method)
|  23 | [array.pop();](#array-pop-method)        
|  34 | [array.shift();](#array-shift-method)
|  39  | [String.fromCharCode()](#String-from-char-code) 

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