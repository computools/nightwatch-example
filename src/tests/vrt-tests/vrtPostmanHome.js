module.exports = {

    '@tags': ['vrt', 'syntax_examples', 'postman'],
    '@disabled': false,

    before : (browser) => {

        browser
            .url('https://www.getpostman.com/')
            .resizeWindow(1920, 1080)
    },

        'Content Section - The Collaboration Platform for API Development': (browser) => {
            const sectionSelector = 'body > section:nth-child(5)';

            browser
                .waitForElementVisible(sectionSelector)
                .assert.visible(sectionSelector, 'Section is visible')
                .pause(1000)
                .assert.screenshotIdenticalToBaseline(sectionSelector, 'section-collaboration_platform');
        },

        'Content Section - What is Postman': (browser) => {
            const sectionSelector = 'body > section.v5_section.v5_background__dark-blue-gradient';

            browser
                .waitForElementVisible(sectionSelector)
                .assert.visible(sectionSelector, 'Section is visible')
                .pause(1000)
                .assert.screenshotIdenticalToBaseline(sectionSelector, 'section-what_is_postman');
        },

        'Content Section - Use Cases': (browser) => {
            const sectionSelector = 'body > section:nth-child(7)';

            browser
                .moveToElement(sectionSelector, 10,10)
                .waitForElementVisible(sectionSelector)
                .assert.visible(sectionSelector, 'Section is visible')
                .pause(1000)
                .assert.screenshotIdenticalToBaseline(sectionSelector, 'section-use_cases');
        },

        'Content Section - Case Studies': (browser) => {
            const sectionSelector = 'body > section.v5_section.v5_background__white.v5_wave__lighter-blue';

            browser
                .moveToElement(sectionSelector, 10,10)
                .waitForElementVisible(sectionSelector)
                .assert.visible(sectionSelector, 'Section is visible')
                .pause(1000)
                .assert.screenshotIdenticalToBaseline(sectionSelector, 'section-case_studies');
        },

        'Content Section - Why Postman': (browser) => {
            const sectionSelector = 'body > section.v5_section.v5_background__night-sky.text-center';

            browser
                .moveToElement(sectionSelector, 10,10)
                .waitForElementVisible(sectionSelector)
                .assert.visible(sectionSelector, 'Section is visible')
                .pause(1000)
                .assert.screenshotIdenticalToBaseline(sectionSelector, 'section-why_postman');
        },

        'Content Section - Postman Galaxy Tour': (browser) => {
            const sectionSelector = 'body > section.v5_section.v5_background__deep-space-blue.pb-xl-3';

            browser
                .moveToElement(sectionSelector, 10,10)
                .waitForElementVisible(sectionSelector)
                .assert.visible(sectionSelector, 'Section is visible')
                .pause(1000)
                .assert.screenshotIdenticalToBaseline(sectionSelector, 'section-postman_galaxy_tour');
        },

        'Content Section - Postman API Network': (browser) => {
            const sectionSelector = 'body > section:nth-child(11)';

            browser
                .moveToElement(sectionSelector, 10,10)
                .waitForElementVisible(sectionSelector)
                .assert.visible(sectionSelector, 'Section is visible')
                .pause(1000)
                .assert.screenshotIdenticalToBaseline(sectionSelector, 'section-postman_api_network');
        },

        'Content Section - Join Our Community': (browser) => {
            const sectionSelector = 'body > section:nth-child(12)';

            browser
                .moveToElement(sectionSelector, 10,10)
                .waitForElementVisible(sectionSelector)
                .assert.visible(sectionSelector, 'Section is visible')
                .pause(1000)
                .assert.screenshotIdenticalToBaseline(sectionSelector, 'section-join_our_community');
        },

        'Content Section - Whats Happening': (browser) => {
            const sectionSelector = 'body > section.v5_section.v5_background__lighter-blue';

            browser
                .moveToElement(sectionSelector, 10,10)
                .waitForElementVisible(sectionSelector)
                .assert.visible(sectionSelector, 'Section is visible')
                .pause(1000)
                .assert.screenshotIdenticalToBaseline(sectionSelector, 'section-whats_happening');
        }
};
