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

        'Header - Logo' : (browser) => {
            const logoImgSelector = 'img[alt="Postman"]';
            const logoLinkSelector = 'body > nav > a';

            browser
                .assert.visible(logoImgSelector, 'Logo is present')
                .verify.attributeEquals(logoLinkSelector, 'href', 'https://www.postman.com/', 'Logo has expected link')

            browser.saveScreenshot('tests_output/postmanApp/scr/headerLogo.png')
        },

        'Header - Navigation Elements' : (browser) => {
            const page = browser.page.postmanApp();
            const navBarContent = 'div#navbarSupportedContent.navbar-collapse.collapse.overlay';
            const navProductSelector = '#navbarSupportedContent > ul.navbar-nav.mr-auto > li:nth-child(1) > a';
            const navProductDropdownMenuOpen = '#navbarSupportedContent > ul.navbar-nav.mr-auto > li.nav-item.dropdown.show > div';
            const navCollaborationSelector = '#navbarSupportedContent > ul.navbar-nav.mr-auto > li:nth-child(2) > a';
            const navUseCasesSelector = '#navbarSupportedContent > ul.navbar-nav.mr-auto > li:nth-child(3) > a';
            const navCasesDropdownMenuOpen = '#navbarSupportedContent > ul.navbar-nav.mr-auto > li.nav-item.dropdown.show > div';
            const navPricingSelector = '#navbarSupportedContent > ul.navbar-nav.mr-auto > li:nth-child(4) > a';
            const navEnterpriseSelector = '#navbarSupportedContent > ul.navbar-nav.mr-auto > li:nth-child(5) > a';
            const navExploreSelector = '#navbarSupportedContent > ul.navbar-nav.mr-auto > li:nth-child(6) > a';
            const navLearningCenterSelector = '#navbarSupportedContent > ul.navbar-nav.ml-auto > li.secondary-nav-item.lc-link.d-sm-block > a';
            const dashboardButtonSelector = '#navbarSupportedContent > ul.navbar-nav.ml-auto > li.secondary-nav-item.secondary-nav-buttons > a.v5_btn.v5_btn__primary.v5_btn__small.hide-if-signedin.pingdom-transactional-check__sign-in-button.ml-auto';

            browser
                .assert.visible(navBarContent, 'Navigation bar is present')
                .saveScreenshot('tests_output/postmanApp/scr/headerNavigationElements.png')

            browser
                .assert.visible(navProductSelector, 'Product section is present')
                .assert.containsText(navProductSelector, 'Product', 'Has expected text')
                .verify.attributeEquals(navProductSelector, 'href', 'https://www.postman.com/#', 'Has expected link')
            page
                .openProductNav()
            browser
                .assert.visible (navProductDropdownMenuOpen, 'Product dropdown is present')
                .saveScreenshot('tests_output/postmanApp/scr/headerNavProductDropdown.png')

            browser
                .assert.visible(navCollaborationSelector, 'How Collaboration Works section is present')
                .assert.containsText(navCollaborationSelector, 'How Collaboration Works', 'Has expected text')
                .verify.attributeEquals(navCollaborationSelector, 'href', 'https://www.postman.com/how-api-collaboration-works', 'Has expected link')

            browser
                .assert.visible(navUseCasesSelector, 'Use Cases section is present')
                .assert.containsText(navUseCasesSelector, 'Use Cases', 'Has expected text')
                .verify.attributeEquals(navUseCasesSelector, 'href', 'https://www.postman.com/#', 'Has expected link')
            page
                .openUseCasesNav()
            browser
                .assert.visible(navCasesDropdownMenuOpen, 'Use Cases dropdown is present')
                .saveScreenshot('tests_output/postmanApp/scr/headerNavCasesDropdown.png')

            browser
                .assert.visible(navPricingSelector, "Pricing section is present")
                .assert.containsText(navPricingSelector, 'Pricing', 'Has expected text')
                .verify.attributeEquals(navPricingSelector, 'href', 'https://www.postman.com/pricing', 'Has expected link')

            browser
                .assert.visible(navEnterpriseSelector, 'Enterprise section is present')
                .assert.containsText(navEnterpriseSelector, 'Enterprise', 'Has expected text')
                .verify.attributeEquals(navEnterpriseSelector, 'href', 'https://www.postman.com/postman-enterprise', 'Has expected link')

            browser
                .assert.visible(navExploreSelector, 'Explore section is present')
                .assert.containsText(navExploreSelector, 'Explore', 'Has expected text')
                .verify.attributeEquals(navExploreSelector, 'href', 'https://explore.postman.com/', 'Has expected link')

            browser
                .assert.visible(navLearningCenterSelector, 'Learning Center section is present')
                .assert.containsText(navLearningCenterSelector, 'Learning Center', 'Has expected text')
                .verify.attributeEquals(navLearningCenterSelector, 'href', 'https://learning.postman.com/', 'Has expected link')

            browser
                .assert.visible(dashboardButtonSelector, 'Sign In button is present')
                .assert.containsText(dashboardButtonSelector, 'Sign In', 'Has expected text')
                .verify.attributeEquals(dashboardButtonSelector, 'href', 'https://identity.getpostman.com/login', 'Has expected link')
        },

        'Header - Product Section Items': (browser) => {
            const page = browser.page.postmanApp();
            const apiPlatformSubsectionSelector = '#navbarSupportedContent > ul.navbar-nav.mr-auto > li.nav-item.dropdown.show > div > a:nth-child(1)';
            const apiClientSubsectionSelector = '#navbarSupportedContent > ul.navbar-nav.mr-auto > li.nav-item.dropdown.show > div > a:nth-child(2)';
            const designAndMockSubsectionSelector = '#navbarSupportedContent > ul.navbar-nav.mr-auto > li.nav-item.dropdown.show > div > a:nth-child(3)';
            const documentationSubsectionSelector = '#navbarSupportedContent > ul.navbar-nav.mr-auto > li.nav-item.dropdown.show > div > a:nth-child(4)';
            const monitorsSubsectionSelector = '#navbarSupportedContent > ul.navbar-nav.mr-auto > li.nav-item.dropdown.show > div > a:nth-child(5)';
            const automatedTestingSubsectionSelector = '#navbarSupportedContent > ul.navbar-nav.mr-auto > li.nav-item.dropdown.show > div > a:nth-child(6)';
            const versionSubsectionControl = '#navbarSupportedContent > ul.navbar-nav.mr-auto > li.nav-item.dropdown.show > div > a:nth-child(7)';
            const workspacesSubsectionSelector = '#navbarSupportedContent > ul.navbar-nav.mr-auto > li.nav-item.dropdown.show > div > a:nth-child(8)';
            const interceptorSubsectionSelector = '#navbarSupportedContent > ul.navbar-nav.mr-auto > li.nav-item.dropdown.show > div > a:nth-child(9)';

            page
                .openProductNav()
            browser
                .assert.visible (apiPlatformSubsectionSelector, 'API Platform sub-section is present')
                .assert.containsText(apiPlatformSubsectionSelector, 'API Platform', 'Has expected text')
                .verify.attributeEquals(apiPlatformSubsectionSelector, 'href', 'https://www.postman.com/api-platform','Has expected link')

            browser
                .assert.visible(apiClientSubsectionSelector, 'API Client sub-section is present')
                .assert.containsText(apiClientSubsectionSelector, 'API Client', 'Has expected text')
                .verify.attributeEquals(apiClientSubsectionSelector,'href', 'https://www.postman.com/product/api-client','Has expected link')

            browser
                .assert.visible(designAndMockSubsectionSelector, 'Design & Mock sub-section is present')
                .assert.containsText(designAndMockSubsectionSelector, 'Design & Mock', 'Has expected text')
                .verify.attributeEquals(designAndMockSubsectionSelector, 'href', 'https://www.postman.com/features/mock-api','Has expected link')

            browser
                .assert.visible(documentationSubsectionSelector, 'Documentation sub-section is present')
                .assert.containsText(documentationSubsectionSelector, 'Documentation', 'Has expected text')
                .verify.attributeEquals(documentationSubsectionSelector, 'href', 'https://www.postman.com/api-documentation-generator','Has expected link')

            browser
                .assert.visible(monitorsSubsectionSelector, 'Monitors sub-section is present')
                .assert.containsText(monitorsSubsectionSelector, 'Monitors', 'Has expected text')
                .verify.attributeEquals(monitorsSubsectionSelector, 'href', 'https://www.postman.com/api-monitor','Has expected link')

            browser
                .assert.visible(automatedTestingSubsectionSelector, 'Automated Testing sub-section is present')
                .assert.containsText(automatedTestingSubsectionSelector, 'Automated Testing', 'Has expected text')
                .verify.attributeEquals(automatedTestingSubsectionSelector, 'href', 'https://www.postman.com/automated-testing','Has expected link')

            browser
                .assert.visible(versionSubsectionControl, 'Version Control sub-section is present')
                .assert.containsText(versionSubsectionControl, 'Version Control', 'Has expected text')
                .verify.attributeEquals(versionSubsectionControl, 'href', 'https://www.postman.com/product/api-versioning','Has expected link')

            browser
                .assert.visible(workspacesSubsectionSelector, 'Workspaces sub-section is present')
                .assert.containsText(workspacesSubsectionSelector, 'Workspaces', 'Has expected text')
                .verify.attributeEquals(workspacesSubsectionSelector, 'href', 'https://www.postman.com/product/workspaces','Has expected link')

            browser
                .assert.visible(interceptorSubsectionSelector, 'Interceptor sub-section is present')
                .assert.containsText(interceptorSubsectionSelector, 'Interceptor', 'Has expected text')
                .verify.attributeEquals(interceptorSubsectionSelector, 'href', 'https://www.postman.com/product/postman-interceptor','Has expected link')
        }

};