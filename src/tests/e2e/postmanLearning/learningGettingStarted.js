module.exports = {

    '@tags': ['postman'],
    '@disabled': false,

    before : (browser) => {
        const page = browser.page.postmanLearning();

        page
            .navigate()
            .toGettingStarted()
        browser
            .waitForElementVisible('body')
            .assert.titleContains('Getting Started | Postman Learning Center', 'Getting Started section is open')
    },


    'Header UI' : (browser) => {
        const headerLearningSelector = '#gatsby-focus-wrapper > div > header';

        browser
            .assert.visible(headerLearningSelector, 'Header is present')
    },

    'Steps Tabs' : (browser) => {
        const firstStepSelector = '#react-tabs-0';
        const secondStepSelector = '#react-tabs-3';
        const thirdStepSelector = '#react-tabs-5';
        const firstStepVideoSelector = '#react-tabs-1 > div > video';
        const secondStepVideoSelector = '#react-tabs-3 > div > video';
        const thirdStepVideoSelector = '#react-tabs-5 > div > video'

        browser
            .assert.visible(firstStepSelector, 'First step is present')
            .assert.containsText(firstStepSelector, 'Choose your verb', 'Has expected text')
            .assert.visible(firstStepVideoSelector, 'Video is present')
            .assert.attributeEquals(firstStepVideoSelector, 'src', 'https://learning.postman.com/static/choose-verb-034e8c681fb8959bece8b4f0773c3b14.mp4', 'Has expected video')

        browser
            .click('#react-tabs-2')
            .assert.visible(secondStepSelector, 'Second step is present')
            .assert.containsText(secondStepSelector, 'Enter a URL', 'Has expected text')
            .assert.visible(secondStepVideoSelector, 'Video is present')
            .assert.attributeEquals(secondStepVideoSelector, 'src', 'https://learning.postman.com/static/enter-url-f54990c79611fc6f8292f417027d937e.mp4', 'Has expected video')

        browser
            .click('#react-tabs-4')
            .assert.visible(thirdStepSelector, 'Third step is present')
            .assert.containsText(thirdStepSelector, 'Send a request', 'Has expected text')
            .assert.visible(thirdStepVideoSelector, 'Video is resent')
            .assert.attributeEquals(thirdStepVideoSelector, 'src', 'https://learning.postman.com/static/send-5aad3fd6de4cfa33c2bf7d8b5483d5f7.mp4', 'Has expected video')

    }

};