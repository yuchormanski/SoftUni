function encryptingPassword(input) {
    let data = input.slice();
    let regex = /(.+)>(?<first>[\d]{3})(\|)(?<second>[a-z]{3})\3(?<third>[A-Z]{3})\3(?<fourth>[^<>]{3})<\1/gm
    let count = Number(data.shift());

    while (count > 0) {
        let line = data.shift();
        const valid = regex.exec(line);
        if (valid) {
            let a = valid.groups['first'];
            let b = valid.groups['second'];
            let c = valid.groups['third'];
            let d = valid.groups['fourth'];
            console.log(`Password: ${a + b + c + d}`);
        } else {
            console.log('Try another password!');
        }
        count--;
    }
}
// encryptingPassword([
//     "3",
//     "##>00|no|NO|!!!?<###",
//     "##>123|yes|YES|!!!<##",
//     "$$<111|noo|NOPE|<<>$$"
// ]);

encryptingPassword(["5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"
]);
