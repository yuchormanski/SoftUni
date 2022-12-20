
function winningTicket(input) {
    const withoutCommas = input.replace(/,/g, '');
    const noWhiteSpace = /([\S]+)/gi;
    const validRegex = /(.{20})/gi;
    // const winning = /([@|#|\$|\^]{6,10})/gi;
    const winning = /([@]{6,10}|[#]{6,10}|[\$]{6,10}|[\^]{6,10})/gi

    let toArray = withoutCommas.match(noWhiteSpace);

    for (let line of toArray) {
        if (!line.match(validRegex)) {
            console.log('invalid ticket');
        } else {
            let current = line.match(winning);
            if (current === null) {
                console.log(`ticket "${line}" - no match`);
            } else if (current[0] === current[1]) {
                let length = current[0].length;
                let symbol = current[0].slice(0, 1);
                if (length <= 9) {
                    console.log(`ticket "${line}" - ${length}${symbol}`);
                } else if (length === 10) {
                    console.log(`ticket "${line}" - ${length}${symbol} Jackpot!`);
                }
            }
        }
    }
}
// winningTicket('Cash$$$$$$Ca$$$$$$sh');
winningTicket('$$$$$$$$$$$$');
// winningTicket('Cash$$$$##Ca$$$$##sh');
// winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , Cash$$$$##Ca$$$$##sh, th@@@@@@eemo@@@@@@ey ');
// winningTicket('validticketnomatch:( ');