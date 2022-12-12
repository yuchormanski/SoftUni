function messagesManager(input) {
    let data = input.slice();
    let capacity = Number(data.shift());
    let users = {};
    let current = data.shift();

    while (current !== 'Statistics') {
        let line = current.split('=');

        if (line[0] === 'Add') {
            let name = line[1];
            let sent = Number(line[2]);
            let received = Number(line[3]);

            if (!users[name]) {
                users[name] = {
                    sent: sent,
                    received: received
                }
            } else {
                current = data.shift();
                continue;
            }
        } else if (line[0] === 'Message') {
            let sender = line[1];
            let receiver = line[2];
            if (users[sender] && users[receiver]) {
                users[sender].sent += 1;
                users[receiver].received += 1;
            }

            if ((users[sender].sent + users[sender].received) >= capacity) {
                console.log(`${sender} reached the capacity!`);
                delete users[sender];
            }

            if ((users[receiver].received + users[receiver].sent) >= capacity) {
                console.log(`${receiver} reached the capacity!`);
                delete users[receiver];
            }
        } else if (line[0] === 'Empty') {
            let name = line[1];
            if (users[name]) {
                delete users[name];
            } else if (name === 'All') {
                users = {};
            }
        }
        current = data.shift();
    }
    let usersCount = Object.keys(users).length;
    console.log(`Users count: ${usersCount}`);
    if (usersCount !== 0) {
        for (const [user, sent] of Object.entries(users)) {
            let total = users[user].sent + users[user].received;
            console.log(`${user} - ${total}`);
        }
    }
}
// messagesManager([
//     "10",
//     "Add=Berg=9=0",
//     "Add=Berg=9=0",
//     "Add=Kevin=0=0",
//     "Message=Berg=Kevin",
//     "Add=Mark=5=4",
//     "Statistics"
// ]);

// messagesManager([
//     "20",
//     "Add=Mark=3=9",
//     "Add=Berry=5=5",
//     "Add=Clark=4=0",
//     "Empty=Berry",
//     "Add=Blake=9=3",
//     "Add=Michael=3=9",
//     "Add=Amy=9=9",
//     "Message=Blake=Amy",
//     "Message=Michael=Amy",
//     "Statistics"
// ]);

messagesManager([
    "12",
    "Add=Bonnie=3=5",
    "Add=Johny=4=4",
    "Empty=All",
    "Add=Bonnie=3=3",
    "Statistics"
]);


