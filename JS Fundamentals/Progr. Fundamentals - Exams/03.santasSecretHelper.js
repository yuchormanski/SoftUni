/* Santa’s Secret Helper
After the successful second Christmas, Santa needs to gather information about the behavior of 
children to plan the presents for next Christmas. He has a secret helper, who is sending him 
encrypted information. Your task is to decrypt it and create a list of the children who have been good. 
You will receive an integer, which represents a key and afterwards some messages, which you 
must decode by subtracting the key from the value of each character. After the decryption, 
to be considered a valid match, a message should:
-	Have a name, which starts after '@' and contains only letters from the Latin alphabet
-	Have a behavior type - "G"(good) or "N"(naughty) and must be surrounded by "!" (exclamation mark).
The order in the message should be: child’s name -> child’s behavior. They can be separated 
from the others by any character except: '@', '-', '!', ':' and '>'. 
You will be receiving message until you are given the “end” command. Afterwards, print the 
names of the children, who will receive a present, each on a new line. 
Input / Constraints
    •	The first line holds n – the number which you have to subtract from the characters – integer in range [1…100];
    •	On the next lines, you will be receiving encrypted messages.
Output
Print the names of the children, each on a new line */


function santasSecretHelper(input) {
    let data = input.slice();
    let key = Number(data.shift());
    let decrypted = [];

    let encrypted = data.shift();
    while (encrypted !== 'end') {
        let temp = '';
        for (const char of encrypted) {
            let current = (char.charCodeAt() - key);
            temp += String.fromCharCode(current);
        }
        decrypted.push(temp);
        encrypted = data.shift();
    }

    let pattern = /@(?<name>[A-Za-z]+)([^@\-!\:\>]+)!G!/;
    let kid = decrypted.shift();
    while (kid) {
        if (currentData = pattern.exec(kid)) {
            console.log(currentData.groups['name']);
        }
        kid = decrypted.shift();
    }
}
// santasSecretHelper([
//     '3',
//     'CNdwhamigyenumje$J$',
//     'CEreelh-nmguuejn$J$',
//     'CVwdq&gnmjkvng$Q$',
//     'end'
// ]);

santasSecretHelper([
    '4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
    'DReh}e=<4lhzj1%K%',
    'end'
]);

// santasSecretHelper([
//     '3',
//     "N}eideidmk$'(mnyenmCNlpamnin$J$",
//     'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
//     'ppqmkkkmnolmnnCEhq/vkievk$Q$',
//     'yyegiivoguCYdohqwlqh/kguimhk$J$',
//     'end'
// ]);