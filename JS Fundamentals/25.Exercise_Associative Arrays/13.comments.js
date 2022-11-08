/* 3.	Comments
Write a function that stores information about users and their comments on a website. 
You have to store the users, the comments as an object with title and content, 
and the article that the comment is about. The user can only comment, when he is on the list of users 
and the article is in the list of articles. The input comes as an array of strings. 
The strings will be in the format:

"user {username}" – add the user to the list of users
"article {article name}" – add the article to the article list
"{username} posts on {article name}: {comment title}, {comment content}" – save the info

At the end sort the articles by a count of comments and print the users with their 
comments ordered by usernames in ascending.

Output
Print the result in the following format:
"Comments on {article1 name}
--- From user {username1}: {comment title} - {comment content}
--- From user {username2}: …
Comments on {article2 name}
…"
 */
function comments(information) {
    let users = [];
    let articles = [];
    let comments = {};
    collectingInformation();

    function collectingInformation() {
        for (let line of information) {
            //split on user
            if (line.includes('user ')) {
                let user = line.split('user ')[1];
                users.push(user);
            }
            //split on article
            else if (line.includes('article ')) {
                let article = line.split('article ')[1];
                articles.push(article);
            }
            //split on posts
            else if (line.includes(' posts on ')) {
                //find name
                let commenter = line.split(' posts on ')[0];
                let articleLine = line.split(' ');
                // commented article
                let theArticle = articleLine[3].split(':')[0];
                // IF user and article exist
                if (users.includes(commenter) && articles.includes(theArticle)) {
                    let comment = articleLine.slice(4).join(' ');
                    //creating object entry
                    if (!comments[theArticle]) {
                        comments[theArticle] = {};
                    }
                    comments[theArticle][commenter] = comment;
                }
            }
        }
    }

    //sorting and printing
    let info = [];
    for (let [article, theComment] of Object.entries(comments)) {
        let currentInfo = [];
        currentInfo.push(article);
        let counter = Object.values(theComment).length;
        currentInfo.push(counter);
        info.push(currentInfo);
    }
    let sortedComments = info.sort((a, b) => b[1] - a[1]);

    for (let [article, count] of sortedComments) {
        console.log(`Comments on ${article}`);
        let sortedUsers = Object.keys(comments[article]).sort((a, b) => a.localeCompare(b));
        for (let commenter of sortedUsers) {
            let [title, content] = comments[article][commenter].split(', ');
            console.log(`--- From user ${commenter}: ${title} - ${content}`);
        }
    }
}
// comments([
//     'user aUser123',
//     'someUser posts on someArticle: NoTitle, stupidComment',
//     'article Books',
//     'article Movies',
//     'article Shopping',
//     'user someUser',
//     'user uSeR4',
//     'user lastUser',
//     'uSeR4 posts on Books: I like books, I do really like them',
//     'uSeR4 posts on Movies: I also like movies, I really do',
//     'someUser posts on Shopping: title, I go shopping every day',
//     'someUser posts on Movies: Like, I also like movies very much'
// ])

comments([
    'user Mark',
    'Mark posts on someArticle: NoTitle, stupidComment',
    'article Bobby',
    'article Steven',
    'user Liam',
    'user Henry',
    'Mark posts on Bobby: Is, I do really like them',
    'Mark posts on Steven: title, Run',
    'someUser posts on Movies: Like'
])

