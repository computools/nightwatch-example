module.exports = {

    '@tags': ['postman'],
    '@disabled': false,

    before : (browser) => {
        const page = browser.page.postmanLearning();

        page
            .navigate()
            .toDocs()
        browser
            .waitForElementVisible('body')
            .assert.titleContains('Introduction | Postman Learning Center', 'Docs section is open')
    },


    'Header UI' : (browser) => {
        const headerLearningSelector = '#gatsby-focus-wrapper > div > header';

        browser
            .assert.visible(headerLearningSelector, 'Header is present')
    },

    'Left Navigation' : (browser) => {
        const leftNavSelector = '#gatsby-focus-wrapper > div > main > div > div > div.col-sm-12.col-md-4.col-lg-3.left-nav > div';

        browser
            .assert.visible(leftNavSelector, 'Left Navigation is present')
    }

};