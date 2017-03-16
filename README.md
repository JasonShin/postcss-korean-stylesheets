
[PostCSS] plugin for writing Korean Stylesheets.

[PostCSS]: https://github.com/postcss/postcss

## Korean syntax
```css
.foo {
    kimchi-index: 9999;
    background-color: kimchi;
    color: white-kimchi;
    color: black-kimchi;
    color: green-kimchi;
    color: pink-kimchi !리얼;
}
```

## CSS output
```css
.foo {
    z-index: 9999;
    background-color: red;
    color: white;
    color: black;
    color: green;
    color: pink !important;
}
```

## Usage

```js
postcss([ require('postcss-korean-stylesheets') ])
```

See [PostCSS] docs for examples for your environment.

## Thanks to

Inspiration from [Canadian Stylesheets](https://github.com/chancancode/postcss-canadian-stylesheets) and chats with [@darylljann](https://twitter.com/darylljann)
