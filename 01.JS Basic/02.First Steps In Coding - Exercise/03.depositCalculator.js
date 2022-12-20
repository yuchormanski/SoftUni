function depositCalculator(input){
    //сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
    let deposit = Number(input[0]);
    let months = Number|(input[1]);
    let interestRate = Number(input[2]);
    let totalSum = deposit + months * ((deposit * (interestRate / 100)) / 12);
    console.log(totalSum);
}
depositCalculator(["200 ","3 ","5.7 "])
