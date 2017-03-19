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

	it('converts ㅋ to z-index', function(done) {
		test('a{ ㅋ: 1123; }', 'a{ z-index: 1123; }', {}, done);
	});

	// color to colour
	it('converts 주 to orange', function(done) {
		test('a{ color: 주; }', 'a{ color: orange; }', {}, done);
	});

	// color to colour
	it('converts 노 to orange', function(done) {
		test('a{ color: 노; }', 'a{ color: yellow; }', {}, done);
	});

	// color to colour
	it('converts 초 to green', function(done) {
		test('a{ color: 초; }', 'a{ color: green; }', {}, done);
	});

	// color to colour
	it('converts 파 to blue', function(done) {
		test('a{ color: 파; }', 'a{ color: blue; }', {}, done);
	});

	// color to colour
	it('converts 남 to darkblue', function(done) {
		test('a{ color: 남; }', 'a{ color: darkblue; }', {}, done);
	});

	// color to colour
	it('converts 보 to purple', function(done) {
		test('a{ color: 보; }', 'a{ color: purple; }', {}, done);
	});

	// color to colour
	it('converts 흰 to purple', function(done) {
		test('a{ color: 흰; }', 'a{ color: white; }', {}, done);
	});

	// color to colour
	it('converts 검 to black', function(done) {
		test('a{ color: 검; }', 'a{ color: black; }', {}, done);
	});

	// color to colour
	it('converts 갈 to brown', function(done) {
		test('a{ color: 갈; }', 'a{ color: brown; }', {}, done);
	});

	// Displays
	it('converts 진열 to display', function(done) {
		test('a{ 진열: flex; }', 'a{ display: flex; }', {}, done);
	});

	it('converts 유연 to flex', function(done) {
		test('a{ display: 유연; }', 'a{ display: flex; }', {}, done);
	});

	it('converts 절대 to absolute', function(done) {
		test('a{ display: 절대; }', 'a{ display: absolute; }', {}, done);
	});

	it('converts 고정 to absolute', function(done) {
		test('a{ display: 고정; }', 'a{ display: fixed; }', {}, done);
	});

});
