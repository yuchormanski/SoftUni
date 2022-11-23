
function fancyBarcodes(line) {

    let count = Number(line.shift());
    let pattern = /([@][#]{1,})(?<code>[A-Z][A-Za-z0-9]{4,}[A-Z])\1/gm;
    let i = 0;

    while (count) {

        let current = line.shift().match(pattern);
        if (current) {
            let groupExtract = pattern.exec(current);
            let currentBarcode = groupExtract.groups.code;
            let numCollector = '';
            for (let char of currentBarcode) {
                !isNaN(char) ? numCollector += char : null;
            }
            numCollector.length === 0 ? console.log('Product group: 00') : console.log(`Product group: ${numCollector}`);
        }
        else {
            console.log("Invalid barcode");
        }
        count--;
    }
}
// fancyBarcodes([
//     "3",
//     "@#FreshFisH@#",
//     "@###Brea0D@###",
//     "@##Che4s6E@##"]);

fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])

