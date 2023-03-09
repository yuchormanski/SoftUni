const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

// const host = 'http://localhost:59481'; // Application host (NOT service host - that can be anything)

// const DEBUG = false;
// const slowMo = 500;

const mockData = {
    "d953e5fb-a585-4d6b-92d3-ee90697398a0": {
        "author": "J.K.Rowling",
        "title": "Harry Potter and the Philosopher's Stone"
    },
    "d953e5fb-a585-4d6b-92d3-ee90697398a1": {
        "author": "Svetlin Nakov",
        "title": "C# Fundamentals"
    }
}


let browser;
let context;
let page;

const host = 'http://localhost:59481/';
describe('Tests', async function () {
    this.timeout(6000);

    before(async () => {
        browser = await chromium.launch({ headless: false, slowMo: 1000 });
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage()
    });

    afterEach(async () => {
        await page.close();
    });




    it('worksTest', async () => {
        await new Promise(r => setTimeout(r, 2000))
        expect(1).to.equal(1)
    })

    it('load all books', async () => {


        
        await page.route('**/jsonstore/collections/books', (route, request) => {

            route.fulfill({

                body: JSON.stringify( mockData ),
                status: 200,
                headers: {
                    "Access-Control-Allow-Origin": '*',
                    "Content-Type": 'application/json'
                }
            })
        })

        //navigate to page
        await page.goto(host);
        // await page.screenshot({ path: 'page.png' });

        //find and click load button
        await page.click('text = load all books');
        await page.waitForSelector('text = Harry Potter');
        const rowData = await page.$$eval('tbody tr', rows => rows.map(r => r.textContent))
        // console.log(rowData);
        //check that books are displayed

        expect(rowData[0]).to.contains('Harry Potter')
        expect(rowData[0]).to.contains('Rowling')
        expect(rowData[1]).to.contains('C# Fundamentals')
        expect(rowData[1]).to.contains('Nakov')

    });

});