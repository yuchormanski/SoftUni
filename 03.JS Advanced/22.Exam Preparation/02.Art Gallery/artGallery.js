class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity) {
        let found = null;
        if (!this.possibleArticles[articleModel.toLowerCase()]) {
            throw new Error('This article model is not included in this gallery!');
        };
        articleModel = articleModel.toLowerCase();

        if (this.listOfArticles.length === 0) {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        } else {
            found = this.listOfArticles.filter(obj => obj.articleName === articleName);
            if (found.length === 0) {
                this.listOfArticles.push({ articleModel, articleName, quantity });
            } else {
                found[0].quantity += quantity;
            }
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {

        const guestPoints = {
            Vip: 500,
            Middle: 250,
            Normal: 50,
        }
        if (this.guests.length === 0) {
            this.guests.push({ guestName, points: guestPoints[personality], purchaseArticle: 0 });
        } else {
            this.guests.forEach(guest => {
                if (guest.guestName === guestName) {
                    throw new Error(`${guestName} has already been invited.`)
                } else {
                    this.guests.push({ guestName, points: guestPoints[personality], purchaseArticle: 0 });
                }
            });
        }
        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        let foundArticle = this.listOfArticles.filter(obj => obj.articleName === articleName);
        if (foundArticle.length === 0 || foundArticle[0].articleModel !== articleModel) {
            throw new Error(`This article is not found.`);
        }
        if (foundArticle[0].quantity === 0) {
            return `The ${articleName} is not available.`;
        }
        let findGuest = this.guests.filter(el => el.guestName === guestName);
        if (findGuest.length === 0) {
            return 'This guest is not invited.'
        }
        if (findGuest[0].points >= this.possibleArticles[articleModel]) {
            findGuest[0].points -= this.possibleArticles[articleModel];
            findGuest[0].purchaseArticle++;
            foundArticle[0].quantity--;
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
        } else {
            return 'You need to more points to purchase the article.';
        }
    }

    showGalleryInfo(criteria) {
        let output = [];
        if (criteria === 'article') {
            output.push(`Articles information:`);
            this.listOfArticles.forEach(art => output.push(`${art.articleModel} - ${art.articleName} - ${art.quantity}`));
        } else if (criteria === 'guest'){
            output.push(`Guests information:`);
            this.guests.forEach(person => output.push(`${person.guestName} - ${person.purchaseArticle}`));
        }
        return output.join(`\n`);
    }
}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));


