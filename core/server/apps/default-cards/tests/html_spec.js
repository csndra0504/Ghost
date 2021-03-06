var should  = require('should'),
    card    = require('../cards/html'),
    SimpleDom   = require('simple-dom'),
    opts;

should = should;
describe('HTML card', function () {
    it('HTML Card renders', function () {
        opts = {
            env: {
                dom: new SimpleDom.Document()
            },
            payload: {
                html: '<h1>HEADING</h1><p>PARAGRAPH</p>'
            }
        };

        var serializer = new SimpleDom.HTMLSerializer([]);
        serializer.serialize(card.render(opts)).should.match('<div><h1>HEADING</h1><p>PARAGRAPH</p></div>');
    });
    it('Plain content renders', function () {
        opts = {
            env: {
                dom: new SimpleDom.Document()
            },
            payload: {
                html: 'CONTENT'
            }
        };

        var serializer = new SimpleDom.HTMLSerializer([]);
        serializer.serialize(card.render(opts)).should.match('<div>CONTENT</div>');
    });
    it.skip('Invalid HTML returns', function () {
        opts = {
            env: {
                dom: new SimpleDom.Document()
            },
            payload: {
                html: '<h1>HEADING<'
            }
        };

        var serializer = new SimpleDom.HTMLSerializer([]);
        serializer.serialize(card.render(opts)).should.match('<div><h1>HEADING<</div>');
    });
});
