function add(a) {
    function inner(n) {
        a += n;
        return inner;
    }
    inner.toString = () => {
        return a;
    };
    return inner;
}
console.log(add(1)(6)(-3))
//CURRY