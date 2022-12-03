/* Santa’s New List
Santa needs to start creating his new list for the next Christmas. Your job is to help him receive and keep 
the incoming information. He will receive information about the names of the children, the type of present 
they want (toy, candy, clothing) and the wanted amount in the following format:
{childName}->{typeOfToy}->{amount}
You can receive a command “Remove->{childName}”. In this case, you need to exclude the child from the new 
list with good children, but don’t change the information about the type of present he or she wanted and
the wanted amount. Santa has already gotten the presents, so he might give them to another very good child. 
When you receive the “END” command, you need to process it and print it, ordered descending by the total 
amount of presents for a child and then by their names. The format is given bellow. 
Input 
Until you receive "END" command you will be receiving information about the wanted presents in the following format:
 "{childName}->{typeOfPresent}->{amount}".
You can receive a command to remove a child from the list -> "Remove->{childName}"
Output
•	Print the presents for each child, ordered descending by the total amount and then by their name, in the following format: 
Children:
{childName} -> {points}
•	After that print type of present and the total count for it in the following format:
Presents:
{type} –> {count}
Constraints
•	The count of presents will always be a valid integer in the range [0-100]; */


function santasNewList(input) {
    let list = input.slice();
    let line = list.shift();
    const kids = {};
    const presents = {};
    collecting();

    function collecting() {
        while (line !== 'END') {
            let [name, ...stuff] = line.split('->');
            if (name !== 'Remove') {

                // create kids Object
                if (!kids[name]) {
                    kids[name] = Number(stuff[1]);
                }
                // add count to current kid presents
                else {
                    kids[name] += Number(stuff[1]);
                }
                //create presents Object
                if (!presents[stuff[0]]) {
                    presents[stuff[0]] = Number(stuff[1]);
                }
                //add count to current property
                else {
                    presents[stuff[0]] += Number(stuff[1]);
                }
            } else if (name === 'Remove') {
                //IF this kid exist
                if (kids[stuff[0]]) {
                    //remove "BAD" kid from the list 
                    delete kids[stuff[0]];
                }
            }
            line = list.shift();
        }
    }

    // sort kids Object by count of the presents and then by name alphabetically
    let sortedKids = Object.entries(kids).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    console.log('Children:');
    //iterate and print sorted kids and their presents count
    for (const [kid, count] of sortedKids) {
        console.log(`${kid} -> ${count}`);
    }
    console.log('Presents:');
    //iterate over the all presents name and their count  
    for (const [key, value] of Object.entries(presents)) {
        console.log(`${key} -> ${value}`);
    }
}
// santasNewList([
//     'Sammy->Candy->12',
//     'Annie->Candy->12',
//     'Dannie->Candy->12', 'END'
// ]);

// santasNewList([
//     'Marty->Toys->5',
//     'Sam->Candy->20',
//     'Leo->Candy->10',
//     'Leo->Toys->1',
//     'Katy->Clothes->4',
//     'Bobbie->Clothes->6',
//     'Tanya->Phone->1',
//     'Nasko->Tablet->3',
//     'END'
//   ]);

santasNewList([
    'Teddy->Clothes->8',
    'Johny->Toys->10',
    'Freddie->Candy->30',
    'Johny->Candy->20',
    'Carrie->Phone->1',
    'Carrie->Tablet->1',
    'Carrie->Candy->10',
    'Teddy->Toys->5',
    'Remove->Teddy',
    'END'
]);