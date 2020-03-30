module.exports = {

    '@tags': ['google', 'syntax_examples'],
    '@disabled': true,

    'Google advanced search' : (browser) => {
        const mainQuery = 'JavaScript';
        const page = browser.page.googleAdvancedSearch();
        const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;

        page
            .navigate() //reference to navigate page object, means 'go to url'
            .setQuery(mainQuery) //reference to setQuery page object, means that 'set value for search request'
            .selectFilter('@languageDropdown', 'lang_ru')  //reference to selectFilter page object, means 'open language dropdown and set value'
            .selectFilter('@lastUpdateDropdown', 'm') //reference to selectFilter page object, means 'open update date dropdown and set value'
            .search(); //reference to .search page object, means 'click on search button'
        browser
            .assert.urlContains('as_q=JavaScript', 'Params: search query is correct')
            .assert.urlContains('lr=lang_ru', 'Params: language is - korean')
            .assert.urlContains('as_qdr=m', 'Params: time period is - last month')
            .assert.visible(resultsPageQuerySelector, 'UI: search request - JavaScript');

        browser.saveScreenshot('tests_output/google.png');
    }
};