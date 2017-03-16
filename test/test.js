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
    it('converts kimchi to red', function(done) {
        test('a{ color: kimchi; }', 'a{ color: red; }', {}, done);
    });

	// color to colour
	it('converts white-kimchi to white', function(done) {
		test('a{ color: white-kimchi; }', 'a{ color: white; }', {}, done);
	});

	// color to colour
	it('converts black-kimchi to black', function(done) {
		test('a{ color: black-kimchi; }', 'a{ color: black; }', {}, done);
	});

	// color to colour
	it('converts green-kimchi to green', function(done) {
		test('a{ color: green-kimchi; }', 'a{ color: green; }', {}, done);
	});

	// color to colour
	it('converts pink-kimchi to pink', function(done) {
		test('a{ color: pink-kimchi; }', 'a{ color: pink; }', {}, done);
	});

	// !bloody-oath to !important
    it('converts !리얼 to !important', function(done) {
        test('a{ color: gray !bloody-oath; }', 'a{ color: gray !important; }', {}, done);
    });
});
