function addAndRemoveElements(inputData) {
    let base = 1;
    const result = [];
    inputData.forEach(el => {(el === 'add' ? result.push(base) : result.pop(), base++)});
    result.length !== 0 ? console.log(result.join('\n')) : console.log('Empty')
}
addAndRemoveElements([
    'add',
    'add',
    'add',
    'add']);
console.log('--------------');
addAndRemoveElements([
    'add',
    'add',
    'remove',
    'add',
    'add']);
console.log('--------------');
addAndRemoveElements([
    'remove',
    'remove',
    'remove']);