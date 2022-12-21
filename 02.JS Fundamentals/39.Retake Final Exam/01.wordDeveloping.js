//Starts with empty string
// The possible commands are: 
// "End" - end
// "Add {substring}" - add given substring to end on string
// "Upgrade {char}" - replace all occurrence with ASCII + 1
// "Print" - print result
// "Index {char}" find all indexes on given char
// "Remove {substring}" - remove substring from string
// the input will always be valid


function wordDeveloping(input) {
    let data = input.slice();
    let text = '';
    let func = {
        Add(arg) { return text += arg },
        Upgrade(char) { return text = text.replace(new RegExp(char, 'g'), String.fromCharCode(char.charCodeAt() + 1)) },
        Print() { console.log(text) },
        Index(x) { let z = text.split('').map((a, i) => a === x ? i : '').filter(a => a).join(' '); z.length > 0 ? console.log(z) : console.log('None'); },
        Remove(ocu) { text = text.split(ocu).join('') },
    }
    data.forEach(line => {
        let [command, arg] = line.split(' ')
        if (command === 'End') return;
        func[command](arg);
    });
}
// wordDeveloping([
//     "Add University",
//     "Print",
//     "Upgrade n",
//     "Print",
//     "Index i",
//     "Remove sity",
//     "Print",
//     "End"]);

wordDeveloping([
    "Add HelloWorld",
    "Upgrade e",
    "Print",
    "Index b",
    "Remove rl",
    "Print",
    "End"]);