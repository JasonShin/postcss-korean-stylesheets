var postcss = require('postcss');

module.exports = postcss.plugin('postcss-ass', function() {
    return function(css) {

        css.eachDecl(function transformDecl(decl) {
            decl.prop = decl.prop.replace('kimchi-index', 'z-index');
            decl.value = decl.value.replace('kimchi', 'red');
            decl.value = decl.value.replace('white-kimchi', 'white');
            decl.value = decl.value.replace('black-kimchi', 'black');
            decl.value = decl.value.replace('green-kimchi', 'green');
            decl.value = decl.value.replace('pink-kimchi', 'pink');

            if (decl.value.indexOf('!리얼') >= 0) {
                decl.value = decl.value.replace(/\s*!리얼\s*/, '!important');
                decl.important = true;
            }
        });

    };
});
