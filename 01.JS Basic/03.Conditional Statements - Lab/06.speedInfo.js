function speedInfo(s){
    let speed = Number(s[0]);
    speed <= 10? console.log(`slow`):
    speed <= 50? console.log(`average`):
    speed <= 150? console.log(`fast`):
    speed <= 1000? console.log(`ultra fast`):
    console.log(`extremely fast`);
}
speedInfo(["3500"])