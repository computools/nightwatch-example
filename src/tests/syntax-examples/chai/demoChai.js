module.exports = {
    tags: ['syntax_examples', 'chai'],
    disabled: true,

    'Chai Test': (client) => {
        client.url('https://github.com/');
        client.expect.element('svg.octicon.octicon-mark-github.text-white').to.be.present;
        client.expect.element('svg.octicon.octicon-mark-github.text-white').to.be.visible;
        client.expect.element('body > div.application-main > main > div.py-6.py-sm-8.jumbotron-codelines > div > div > div.col-md-7.text-center.text-md-left > h1').text.to.equal('Built for developers');
        client.expect.element('body > div.application-main > main > div.py-6.py-sm-8.jumbotron-codelines > div > div > div.col-md-7.text-center.text-md-left > h1').text.to.contain('Built for');
        client.expect.element('body > div.application-main > main > div.py-6.py-sm-8.jumbotron-codelines > div > div > div.col-md-7.text-center.text-md-left > h1').text.to.endWith('developers');
        client.expect.element('body > div.application-main > main > div.py-6.py-sm-8.jumbotron-codelines > div > div > div.col-md-7.text-center.text-md-left > h1').text.to.startWith('Built');
        client.expect.element('#user\\[login\\]').to.be.an('input', 'Login field is an input');
        client.expect.element('#user\\[email\\]').to.be.an('input', 'Email field is an input');
        client.expect.element('#user\\[password\\]').to.be.an('input', 'Password field is an input');
        client.expect.element('body > div.application-main > main > div.py-6.py-sm-8.jumbotron-codelines > div > div > div.col-md-7.text-center.text-md-left > p > a:nth-child(1)').to.have.attribute('href')
            .equals('https://github.com/open-source');
        client.end();
    }
};