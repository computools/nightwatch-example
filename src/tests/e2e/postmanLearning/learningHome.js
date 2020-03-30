module.exports = {

    '@tags': ['postman'],
    '@disabled': false,

    before : (browser) => {
        const page = browser.page.postmanLearning();

        page
            .navigate()
        browser
            .waitForElementVisible('body')
            .assert.titleContains('Home | Postman Learning Center', 'Blog Home is open')
    },


    'Header UI' : (browser) => {
        const headerLearningSelector = '#gatsby-focus-wrapper > div > header';

        browser
            .assert.visible(headerLearningSelector, 'Header is present')
    }

};