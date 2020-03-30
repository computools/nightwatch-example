module.exports = {

    '@tags': ['google', 'syntax_examples'], //tags for a test suite, can be used for running specific group of suits
    '@disabled': true, // This will prevent the test module from running.

    before : (browser) => {
        console.log('Warming up');
    }, //will be performed before all test suit

    after : (browser) => {
        console.log('Closing down');
    }, //will be performed after all test suit

    beforeEach : (browser) => {
        console.log('Starting next test');
    }, //will be performed before each test case

    afterEach : (browser) => {
        console.log('Finished');
    }, //will be performed after each test case


        'Open Google' : (browser) => {
            browser
                .url('http://www.google.com')
                .assert.urlContains('google')
                .assert.title('Google')
        },

        'Search via Google' : (browser) => {
            browser
                .url('http://www.google.com')
                .setValue('input[type=text]', ['Nightwatch', browser.Keys.ENTER])
                .pause(1000)
                .assert.containsText('#main', 'Nightwatch')
                .end();
        }
};