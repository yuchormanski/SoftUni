class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity) {

        if (!this.possibleArticles[articleModel.toLowerCase()]) {
            throw new Error('This article model is not included in this gallery!');
        };
        if (this.listOfArticles.length === 0) {
            articleModel = articleModel.toLowerCase()
            this.listOfArticles.push({ articleModel, articleName, quantity });
        } else {
            for (let arr of this.listOfArticles) {
                if (arr.articleName === articleName) {
                    arr.quantity += quantity;
                    break;
                } else {
                    articleModel = articleModel.toLowerCase()
                    this.listOfArticles.push({ articleModel, articleName, quantity });
                }
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
        // let found = this.listOfArticles.filter(name => {
        //     (name.articleName === articleName && name.articleModel === articleModel)
        // });
        // let foundModel = this.listOfArticles.filter(art => art.articleModel === articleModel);

        if (found.length === 0) {
            throw new Error(`This article is not found.`);
        }
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
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));


