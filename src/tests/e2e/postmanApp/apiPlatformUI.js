module.exports = {

    '@tags': ['postman'],
    '@disabled': false,

    before : (browser) => {
        const page = browser.page.postmanApp();

        page
            .navigate()
        browser
            .waitForElementVisible('body')
            .assert.titleContains('Postman', 'Home Page is open')
    },

        'API Platform - Open From Navigation' : (browser) => {
            const page = browser.page.postmanApp();

            page
                .navApiPlatform()
            browser
                .waitForElementVisible('body')
                .assert.titleContains('The Postman API Platform', 'API Platform page is open')

            browser.saveScreenshot('tests_output/postmanApp/scr/apiPlatform.png')

        },


        'API Platform - Assert UI Elements' : (browser) => {
            const apiPlatformPageH1TitleSelector = 'body > section.v5_section.v5_background__deep-space-blue.v5_starfield-large-and-small > div > div > div > h1';
            const apiPlatformPageSubtitleSelector = 'body > section.v5_section.v5_background__deep-space-blue.v5_starfield-large-and-small > div > div > div > p';

            browser
                .assert.visible(apiPlatformPageH1TitleSelector, 'Title is present')
                .assert.containsText(apiPlatformPageH1TitleSelector, 'The Postman API Platform', 'Title text is correct')
                .assert.visible(apiPlatformPageSubtitleSelector, 'Subtitle is present')
                .assert.containsText(apiPlatformPageSubtitleSelector, 'Postman is a collaboration platform for API development. Postman\'s features simplify each step of building an API and streamline collaboration so you can create better APIs—faster.', 'Subtitle text is correct')
        }

    }

