function comments(input) {
    let data = input.slice();
    let users = [];
    let articles = {};

    for (let line of data) {
        if (line.includes('user')) {
            let user = line.split(' ')[1];
            if (!users.includes(user)) {
                users.push(user);
            }
        } else if (line.includes('article')) {
            let article = line.split(' ')[1];
            if (!articles[article]) {
                articles[article] = [];
            }
        } else if (line.includes('posts')) {
            let current = line.split(' posts on ');
            let user = current.shift();
            current = current.join('').split(': ');
            let article = current.shift();
            current = current.join('').split(', ');
            let title = current[0];
            let content = current[1];
            if (users.includes(user) && articles[article]) {
                articles[article].push([user, title, content]);
            }
        }
    }

    let sorted = Object.entries(articles).sort((a, b) => b[1].length - a[1].length);
    for (let el of sorted) {
        let currentSort = el[1].sort((a, b) => a[0].localeCompare(b[0]));
        console.log(`Comments on ${el[0]}`);
        for(let part of currentSort){
            let [user,title,content] = [...part];
            console.log(`--- From user ${user}: ${title} - ${content}`);
        }
    }
}
comments([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);