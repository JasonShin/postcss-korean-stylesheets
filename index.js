var postcss = require('postcss');

module.exports = postcss.plugin('postcss-ass', function() {
	return function(css) {

		css.eachDecl(function transformDecl(decl) {
			decl.prop = decl.prop.replace('ㅋ', 'z-index');

			// Colours
			decl.value = decl.value.replace('kimchi', 'red');
			decl.value = decl.value.replace('주', 'orange');
			decl.value = decl.value.replace('노', 'yellow');
			decl.value = decl.value.replace('초', 'green');
			decl.value = decl.value.replace('파', 'blue');
			decl.value = decl.value.replace('남', 'darkblue');
			decl.value = decl.value.replace('보', 'purple');
			decl.value = decl.value.replace('흰', 'white');
			decl.value = decl.value.replace('검', 'black');
			decl.value = decl.value.replace('갈', 'brown');

			// Displays
			decl.prop = decl.prop.replace('진열', 'display');
			decl.value = decl.value.replace('유연', 'flex');
			decl.value = decl.value.replace('절대', 'absolute');
			decl.value = decl.value.replace('고정', 'fixed');
		});

	};
});
