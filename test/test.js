var postcss = require('postcss');
var expect = require('chai').expect;

var plugin = require('../');

var test = function(input, output, opts, done) {
    postcss([plugin(opts)]).process(input).then(function(result) {
        expect(result.css).to.eql(output);
        done();
    });
};

describe('postcss-korean-stylesheets', function() {

    // color to colour
    it('converts  to color', function(done) {
        test('a{ color: white; }', 'a{ color: white; }', {}, done);
    });

    // !bloody-oath to !important
    it('converts !bloody-oath to !important', function(done) {
        test('a{ color: gray !bloody-oath; }', 'a{ color: gray !important; }', {}, done);
    });
});
