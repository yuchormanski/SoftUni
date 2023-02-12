# JavaScript Methods

### Table of Contents

| No. | Method |
|---- | ---------
|  1  | [String.fromCharCode()](#String-from-char-code) 
|  2  | [array.push();](#array-push-method)
|  3  | [array.pop();](#array-pop-method)        
|  4  | [array.shift();](#array-shift-method)
|  5  |           |
|  6  |           |
|  7  |           |
|  8  |           |
|  9  |           |
|  10 |           |


1. ### String from char code

Return string letter corresponding on the ASCII code number

```javascript

   function solve(){
      let n = 107;
      console.log(String.fromCharCode(n))
   }

   // expect k
```
**[⬆ Back to Top](#table-of-contents)**

2. ### Array push method

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

3. ### Array pop method

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

4. ### Array shift method

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