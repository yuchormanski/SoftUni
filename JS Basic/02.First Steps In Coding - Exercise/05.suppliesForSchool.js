function suppliesForSchool(input){
    let pens = Number(input[0]); // x 5.80
    let markers = Number(input[1]); // x 7.20
    let deskLiquid = Number(input[2]); // x 1.20
    let discount = Number(input[3]);
    let pensPrice = pens * 5.80;
    let markersPrice = markers * 7.20;
    let deskLiquidPrice = deskLiquid * 1.20;
    let sum = (pensPrice + markersPrice + deskLiquidPrice) * 0.75;
    console.log(sum);
}
suppliesForSchool (["2 ","3 ","4 ","25 "])