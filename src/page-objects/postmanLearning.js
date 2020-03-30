module.exports = {

    url: 'https://learning.postman.com/',
    elements: {
        navGettingStarted : '#navbarSupportedContent > div:nth-child(2) > a',
        navDocs: '#navbarSupportedContent > div:nth-child(5) > a',
    },

    commands: [{
        toGettingStarted() {
            return this
                .click('@navGettingStarted');
        },
        toDocs() {
            return this
                .click('@navDocs')
        }
    }]


};