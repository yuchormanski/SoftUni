class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (!this.possibleArticles.hasOwnProperty(articleModel)) throw new Error('This article model is not included in this gallery!');
        const art = this.listOfArticles.find(art => art.articleName === articleName);
        art ? art.quantity += quantity : this.listOfArticles.push({ articleModel, articleName, quantity });
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    };

    inviteGuest(guestName, personality) {
        let points = 0;
        const person = { Vip: 500, Middle: 250 };
        const guest = this.guests.find(g => g.guestName === guestName);
        if (guest) throw new Error(`${guestName} has already been invited.`);
        person[personality] === undefined ? points = 50 : points = person[personality];
        this.guests.push({ guestName, points, purchaseArticle: 0 })
        return `You have successfully invited ${guestName}!`
    };

    buyArticle(articleModel, articleName, guestName) {
        const art = this.listOfArticles.find(art => art.articleName === articleName);
        if (!art || art.articleModel !== articleModel) throw new Error('This article is not found.');
        if (art.quantity === 0) return `The ${articleName} is not available.`;
        const guest = this.guests.find(g => g.guestName === guestName);
        if (!guest) return `This guest is not invited.`;
        if (guest.points >= this.possibleArticles[articleModel]) {
            guest.points -= this.possibleArticles[articleModel];
            art.quantity--;
            guest.purchaseArticle++;
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
        } else {
            return 'You need to more points to purchase the article.'
        }
    };

    showGalleryInfo(criteria) {
        const result = [];
        if (criteria === 'article') {
            result.push('Articles information:');
            this.listOfArticles.forEach(line => result.push(`${line.articleModel} - ${line.articleName} - ${line.quantity}`));
        } else if (criteria === 'guest') {
            result.push('Guests information:');
            this.guests.forEach(guest => result.push(`${guest.guestName} - ${guest.purchaseArticle}`));
        }
        return result.join('\n');
    }
}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

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

