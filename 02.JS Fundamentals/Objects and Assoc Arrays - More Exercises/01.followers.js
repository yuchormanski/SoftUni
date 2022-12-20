/* 1.	Followers
You need to write a function that allows users in a website to follow one another. In order for users 
to be able to follow one another, they have to be registered in the website. There are four more possible input strings:
    - "Welcome, {user}" – if the user is not registered, you need to register him
    - "{user} followed {another user}" – the first user starts following the other one, only if both of them exist.
When you finish reading the input, print the results as follows:
    "Total users registered: {total users}"
    "1. {first user}: {following} following, {followers} followers"
    "*  {follower one}"
    "*  {follower two}"
    "2. {second user}: {following} following, {followers} followers"
    "3. {second user}: {following} following, {followers} followers"
Users must be sorted by count of followers in descending, then by username in descending. 
For the user with most followers, print their names ordered alphabetically.
Input
The input will come as an array of strings.
Output
Print the result as described above.
Constraints
•	There will be no invalid input.
•	There will be no situation where two users have equal amount of followers and equal amount of followings
•	The subscribers will be strings. */


function followers(list) {
    let users = {};
    let currentUser = list.shift();

    while (currentUser !== 'Statistics') {

        if (currentUser.includes('Welcome')) {
            let [greating, name] = currentUser.split(', ');
            if (!users[name]) {
                users[name] = {
                    following: 0,
                    followed: 0,
                    followers: [],
                }
            }
        } else if (currentUser.includes('followed')) {
            // fr -> follower; fd -> followed
            let line = currentUser.split(' ');
            let frUser = line[0];
            let fdUser = line[2];

            //IF both of them exist
            if (users[frUser] && users[fdUser] && users[frUser] !== users[fdUser]) {

                //IF user is not followed already by the same follower
                if (!users[fdUser].followers.includes(frUser)) {
                    users[fdUser].followers.push(frUser);
                    users[frUser].following++;
                    users[fdUser].followed++;
                }
            }
        }

        currentUser = list.shift();
    }//end while
    let followed = [];

    //get names and followers count and followingCount of followers
    for (let name in users) {
        let count = users[name].followed;
        let fCount = users[name].following;
        followed.push([name, count, fCount]);
    }
    //sort object by count of followers and then by name alphabetically
    let followedSort = followed.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    console.log(`Total users registered: ${Object.keys(users).length}`);
    let counter = 1;
    // get user with top count of followers
    let firstUser = followedSort.shift();
    console.log(`${counter}. ${firstUser[0]} : ${users[firstUser[0]].following} following, ${users[firstUser[0]].followed} followers`);
    //print followers of the first user
    let followersSort = users[firstUser[0]].followers.sort((a, b) => a.localeCompare(b));
    followersSort.forEach(name => console.log(`*  ${name}`));

    //sort the rest user by count of followings then by followed count (there is difference between task and judge output)
    // let secondary = followed.sort((a, b) => b[1] - a[1] || a[2] - b[2]);
    let secondary = followed.sort((a, b) => b[2] - a[2] || b[0].localeCompare(a[0]));


    for (let [name, followed, following] of secondary) {
        counter++;
        console.log(`${counter}. ${name} : ${following} following, ${followed} followers`);
    }
}
// followers([
//     'Welcome, EmilConrad',
//     'Welcome, VenomTheDoctor',
//     'Welcome, Saffrona',
//     'Saffrona followed EmilConrad',
//     'Saffrona followed VenomTheDoctor',
//     'EmilConrad followed VenomTheDoctor',
//     'VenomTheDoctor followed VenomTheDoctor',
//     'Saffrona followed EmilConrad',
//     'EmilConrad followed Saffrona',
//     'VenomTheDoctor followed Saffrona',
//     'Statistics'
// ]);

followers([
    'Welcome, JennaMarbles',
    'JennaMarbles followed Zoella',
    'Welcome, AmazingPhil',
    'JennaMarbles followed AmazingPhil',
    'Welcome, Zoella',
    'JennaMarbles followed Zoella',
    'Zoella followed AmazingPhil',
    'Christy followed Zoella',
    'Zoella followed Christy',
    'Welcome, JacksGap',
    'JacksGap followed JennaMarbles',
    'Welcome, PewDiePie',
    'Welcome, Zoella',
    'Statistics'
]);