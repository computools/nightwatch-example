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

        'Home page - Assert UI Elements' : (browser) => {
            const homePageH1TitleSelector = 'body > section:nth-child(5) > div > div.mb-10 > div > div.col-md-12.col-lg-5.v5_xs-mb-4.v5_md-mb-0 > h1';
            const homePageSubtitleSelector = 'body > section:nth-child(5) > div > div.mb-10 > div > div.col-md-12.col-lg-5.v5_xs-mb-4.v5_md-mb-0 > p';
            const downloadAppButtonSelector = 'body > section:nth-child(5) > div > div.mb-10 > div > div.col-md-12.col-lg-5.v5_xs-mb-4.v5_md-mb-0 > div > a';
            const developersCounterSelector = 'body > section:nth-child(5) > div > div.row.text-center > div:nth-child(1) > p.h3.alternative.v5_xs-mb-1';
            const developersSubtitleSelector = 'body > section:nth-child(5) > div > div.row.text-center > div:nth-child(1) > p.subtitle.alternative';
            const companiesCounterSelector = 'body > section:nth-child(5) > div > div.row.text-center > div:nth-child(2) > p.h3.alternative.v5_xs-mb-1';
            const companiesSubtitleSelector = 'body > section:nth-child(5) > div > div.row.text-center > div:nth-child(2) > p.subtitle.alternative';
            const apisCounterSelector = 'body > section:nth-child(5) > div > div.row.text-center > div:nth-child(3) > p.h3.alternative.v5_xs-mb-1';
            const apisSubtitleSelector = 'body > section:nth-child(5) > div > div.row.text-center > div:nth-child(3) > p.subtitle.alternative';
            const homePageH2TitleSelector = 'body > section.v5_section.v5_background__dark-blue-gradient > div > div.row.text-center > div > h2';

            browser
                .assert.visible(homePageH1TitleSelector, 'Title is present')
                .assert.containsText(homePageH1TitleSelector, 'The Collaboration Platform for API Development', 'Has expected text')
                .assert.visible(homePageSubtitleSelector, 'Subtitle is present')
                .assert.containsText(homePageSubtitleSelector, 'Download the free Postman app to get started.', 'Has expected text')
                .assert.visible(downloadAppButtonSelector, 'Download App button is present')
                .assert.containsText(downloadAppButtonSelector, 'Download the App', 'Has expected text')
                .assert.visible(developersCounterSelector, 'Developers counter presents')
                .assert.containsText(developersCounterSelector, '10 million', 'Has expected text')
                .assert.visible(developersSubtitleSelector, 'Developers subtitle is present')
                .assert.containsText(developersSubtitleSelector, 'Developers', 'Has expected text')
                .assert.visible(companiesCounterSelector, 'Companies counter is present')
                .assert.containsText(companiesCounterSelector, '500,000', 'Has expected text')
                .assert.visible(companiesSubtitleSelector, 'Companies subtitle is present')
                .assert.containsText(companiesSubtitleSelector, 'Companies', 'Has expected text')
                .assert.visible(apisCounterSelector, 'APIs counter is present')
                .assert.containsText(apisCounterSelector, '250 million', 'Has expected text')
                .assert.visible(apisSubtitleSelector, 'APIs subtitle is present')
                .assert.containsText(apisSubtitleSelector, 'APIs', 'Has expected text')

            browser
                .assert.visible(homePageH2TitleSelector, 'Title is present')
                .assert.containsText(homePageH2TitleSelector, 'What is Postman?', 'Has expected text')
        }

};