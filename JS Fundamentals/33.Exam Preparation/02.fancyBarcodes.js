function fancyBarcodes(data) {
    let pattern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/g;
    let count = Number(data.shift());

    while (count > 0) {
        let current = data.shift();
        let check = current.match(pattern);
        if (check) {
            let groupNum = (check[0].match(/(\d)/g));
            if(groupNum !== null){
                groupNum = groupNum.join('')
            }else{
                groupNum = '00';
            }
            console.log(`Product group: ${groupNum}`);
        } else {
            console.log(`Invalid barcode`);
        }
        count--;
    }
}
fancyBarcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])



    // let groupNum = Number((check[0].match(/(\d)/g)).join(''));
    // if (groupNum > 0) {
    //     console.log(`Product group: ${groupNum}`);
    // } else if (groupNum === 0) {
    //     console.log(`Product group: 0`);
    // }