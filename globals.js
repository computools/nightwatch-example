const chromedriver = require('chromedriver');

module.exports = {
    // External before hook is ran at the beginning of the tests run, before creating the Selenium session
    before: function(done) {
        chromedriver.start();
        //more options here
        done();
    },

    // External after hook is ran at the very end of the tests run, after closing the Selenium session
    after: function(done) {
        chromedriver.stop();
        //more options here
        done();
    }
};