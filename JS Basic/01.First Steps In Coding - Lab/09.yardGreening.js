function yardGreening(yard){
    let calc = (yard * 7.61);
    let dic = calc * 0.18;
    console.log(`The final price is: ${calc - dic} lv.`);
    console.log(`The discount is: ${dic} lv.`);
}
yardGreening(["550"])

