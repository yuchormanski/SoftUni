function solveClasses() {
    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Title: ${this.title}\nContent: ${this.content}`;
        }
    }

    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            super(title, content);
            // this._content = content;
            this.originalResearch = originalResearch;
            this.comments = [];
        }
        set _content(value) {
            if (value.length > 150) throw new Error('Short reports content should be less then 150 symbols.');
            this.content = value;
        }
        // set _originalResearch(obj) {
        //     if (obj.title === undefined || obj.author === undefined) throw new Error('The original research should have author and title.');
        //     this.originalResearch = obj;
        // }
        addComment(comment) {
            this.comments.push(comment);
            return 'The comment is added.'
        }
        toString() {
            const output = [`Original Research: ${this.originalResearch.title} by ${this.originalResearch.author}`];
            output.push(`Title: ${this.title}\nContent: ${this.content}`);
            if (this.comments.length > 0) {
                output.push('Comments:')
                this.comments.forEach(com => output.push(com));
            }
            return output.join('\n');
        }
    }

    class BookReview extends Article {
        constructor(title, content, book) {
            // this.title = title;
            // this.content = content;
            super(title, content);
            this.book = book;
            this.clients = [];
        }
        addClient(clientName, orderDescription) {
            const found = this.clients.find(current => current.clientName === clientName);
            if (found) throw new Error('This client has already ordered this review.');
            this.clients.push({ clientName, orderDescription });
            return `${clientName} has ordered a review for ${this.book.name}`
        }
        toString() {
            const output = [`Title: ${this.title}\nContent: ${this.content}`];
            output.push(`Book: ${this.book.name}`);
            if (this.clients.length > 0) {
                output.push('Orders:')
                this.clients.forEach(com => output.push(`${com.clientName} - ${com.orderDescription}`));
            }
            return output.join('\n');
        }
    }

    return {
        Article,
        ShortReports,
        BookReview
    }
}

let classes = solveClasses();
let lorem = new classes.Article("Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…");
console.log(lorem.toString());
// ------------------------------
let short = new classes.ShortReports("SpaceX and Javascript", "Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?", { title: "Dragon 2", author: "wikipedia.org" });
console.log(short.addComment("Thank god they didn't use java."))
short.addComment("In the end JavaScript's features are executed in C++ — the underlying language.")
console.log(short.toString());
// ------------------------------
let book = new classes.BookReview("The Great Gatsby is so much more than a love story", "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...", { name: "The Great Gatsby", author: "F Scott Fitzgerald" });
console.log(book.addClient("The Guardian", "100 symbols"));
console.log(book.addClient("Goodreads", "30 symbols"));
console.log(book.toString());





// Unexpected error: Incorrect output: expected
// 'The comment is added.\n
// Title: SpaceX and Javascript\n
// Content: Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?\n
// Original Research: Dragon 2 by wikipedia.org\n
// Comments:\n
// Thank god they didn\'t use java.\n
// In the end JavaScript’s features are executed in C++ — the underlying language.'
// to equal
// 'The comment is added.\n
// Title: SpaceX and Javascript\n
// Content: Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?\n
// Comments:\nThank god they didn\'t use java.\n
// In the end JavaScript’s features are executed in C++ — the underlying language.'