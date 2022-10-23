/*
Write a program that will help Kevin not to buy unnecessary phones. You will receive a list of phones separated by
", " (comma and space). After that, until you receive "End", you will receive different commands, each on a new
line. The commands are:
"Add - (phone}":
Add the given phone to the storage.if the phone already exists, you should skip this line.
"Remove - (phone]"
• Remove the phone from the storage if it exists.
Otherwise, ignore the command.
"Bonus phone - (oldPhone}: (newPhone)":
If the old phone exists, add the new phone after the old one.
Otherwise, ignore the command,
"Last - (phone}"
If the given phone exists, you should change its position and put it last in your storage.
Otherwise, ignore the command.
Input
On the first line - list of phones separated by ", " (comma and space)
On the next lines - commands until you receive "End"
Output
After receiving the "End" command, print the phones in your storage, separated by ", " (comma and space).


•	The possible commands are:
o	"Add - {phone}"
o	"Remove - {phone}"
o	"Bonus phone - {oldPhone}:{newPhone}"
o	"Last - {phone}"
o	"End" */

function phoneShop(listOfPhones) {
    let inStore = listOfPhones.shift().split(', ');
    for (let el of listOfPhones) {
        let [command, phone] = el.split(' - ');
        // o	"Add - {phone}"
        if (command === 'Add') {
            if (!inStore.includes(phone)) {
                inStore.push(phone);
            }
        }
        // o	"Remove - {phone}"
        else if (command === 'Remove') {
            if (inStore.includes(phone)) {
                let index = inStore.indexOf(phone);
                inStore.splice(index, 1);
            }
        }
        // o	"Bonus phone - {oldPhone}:{newPhone}"
        else if (command === 'Bonus phone') {
            let interval = phone.replace(':',' ')
            let [oldPhone, newPhone] = interval.split(' ');
            if (inStore.includes(oldPhone)) {
                let index = inStore.indexOf(oldPhone);
                inStore.splice(index + 1, 0, newPhone);
            }
        }
        // o	"Last - {phone}"
        else if(command === 'Last'){
            if (inStore.includes(phone)) {
                let index = inStore.indexOf(phone);
                let toBeLast = inStore.splice(index, 1).join();
                inStore.push(toBeLast);
            }
        }
        // o	"End"
        else if(command === 'End'){
            console.log(inStore.join(', '));
            return;
        }
    }
}
phoneShop(["SamsungA50, MotorolaG5, IphoneSE",    "Add - Iphone10",    "Remove - IphoneSE",    "End"])
phoneShop(["HuaweiP20, XiaomiNote","Remove - Samsung","Bonus phone - XiaomiNote:Iphone5","End"])
phoneShop(["SamsungA50, MotorolaG5, HuaweiP10","Last - SamsungA50","Add - MotorolaG5","End"])


