function evenPositionElements(input) {
    let data = input.slice();
    //filter method offers index option
    let result = data.filter((x, i) => (i % 2 === 0));
    console.log(result.join(' '));
}
evenPositionElements(['20', '30', '40', '50', '60']);