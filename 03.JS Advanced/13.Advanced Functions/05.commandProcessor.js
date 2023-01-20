function commandProcessor() {

    let str = '';

    function append(input) {
        return str += `${input}`
    }
    function removeStart(input) {
        return str = str.slice(Number(input));
    }
    function removeEnd(input) {
        return str = str.slice(0,Number(-input));
    }
    function print(){
        console.log(str);
    }

    const obj = {
        append,
        removeStart,
        removeEnd,
        print
    }
    return obj;
}

let firstZeroTest = commandProcessor();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
