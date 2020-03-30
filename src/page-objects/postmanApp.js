module.exports = {

    url: 'https://www.postman.com/',
    elements: {
        navProductSelector: '#navbarSupportedContent > ul.navbar-nav.mr-auto > li:nth-child(1) > a',
        navUseCasesSelector: '#navbarSupportedContent > ul.navbar-nav.mr-auto > li:nth-child(3) > a',
        apiPlatformSubsectionSelector: '#navbarSupportedContent > ul.navbar-nav.mr-auto > li.nav-item.dropdown.show > div > a:nth-child(1)',
        apiClientSubsectionSelector: '#navbarSupportedContent > ul.navbar-nav.mr-auto > li.nav-item.dropdown.show > div > a:nth-child(2)',
        designAndMockSubsectionSelector: '#navbarSupportedContent > ul.navbar-nav.mr-auto > li.nav-item.dropdown.show > div > a:nth-child(3)',
        documentationSubsectionSelector: '#navbarSupportedContent > ul.navbar-nav.mr-auto > li.nav-item.dropdown.show > div > a:nth-child(4)',
        monitorsSubsectionSelector: '#navbarSupportedContent > ul.navbar-nav.mr-auto > li.nav-item.dropdown.show > div > a:nth-child(5)',
        automatedTestingSubsectionSelector: '#navbarSupportedContent > ul.navbar-nav.mr-auto > li.nav-item.dropdown.show > div > a:nth-child(6)',
        versionSubsectionControl: '#navbarSupportedContent > ul.navbar-nav.mr-auto > li.nav-item.dropdown.show > div > a:nth-child(7)',
        workspacesSubsectionSelector: '#navbarSupportedContent > ul.navbar-nav.mr-auto > li.nav-item.dropdown.show > div > a:nth-child(8)',
        interceptorSubsectionSelector: '#navbarSupportedContent > ul.navbar-nav.mr-auto > li.nav-item.dropdown.show > div > a:nth-child(9)',
    },

    commands: [{
        openProductNav() {
            return this
                .click('@navProductSelector');
        },

        openUseCasesNav() {
            return this
                .click('@navUseCasesSelector');
        },

        navApiPlatform() {
            return this
                .openProductNav()
                .click('@apiPlatformSubsectionSelector');
        }

    }]
};

