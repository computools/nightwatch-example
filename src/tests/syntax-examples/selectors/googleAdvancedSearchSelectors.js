module.exports = {

    '@tags': ['google', 'syntax_examples'],
    '@disabled': true,

    'Google advanced search' : (browser) => {
        const mainQuery = 'Postman';
        const mainQueryInputSelector = 'input[name="as_q"]';
        const languageDropdownOpenSelector = '#lr_button';  // --> # means by id
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_ko"]';
        const lastUpdateDropdownOpenSelector = '#as_qdr_button';
        const lastUpdateDropdownValueSelector = '.goog-menuitem[value="y"]';
        const submitButtonSelector = '.jfk-button[type="submit"]'
        const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;

        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .click(languageDropdownOpenSelector)
            .click(languageDropdownValueSelector)
            .click(lastUpdateDropdownOpenSelector)
            .click(lastUpdateDropdownValueSelector)
            .click(submitButtonSelector)
            .assert.urlContains('as_q=Postman', 'Params: search query is correct')
            .assert.urlContains('lr=lang_ko', 'Params: language is - korean')
            .assert.urlContains('as_qdr=y', 'Params: time period is - last year')
            .assert.visible(resultsPageQuerySelector, 'UI: search request - Postman');

        browser.saveScreenshot('tests_output/google.png')
    }
}