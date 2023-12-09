const arr = [111, 222, 3333, 444, 555, 666, 777, 888, 999, 1000];
const newArr = [];
let block = "";
const chunkSize = 2;
for (let i = 0; i < arr.length; i += chunkSize) {
  const chunk = arr.slice(i, i + chunkSize);
  newArr.push(chunk);
}
console.log(newArr);
