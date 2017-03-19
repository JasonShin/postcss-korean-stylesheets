[![Build Status](https://travis-ci.org/JasonShin/postcss-korean-stylesheets.svg?branch=master)](https://travis-ci.org/JasonShin/postcss-korean-stylesheets)

[PostCSS] plugin for writing Korean Stylesheets.

[PostCSS]: https://github.com/postcss/postcss

send your ideas to ```visualbbasic@gmail.com```

## Korean syntax
```css
.foo {
    ㅋ: 9999;
    background-color: kimchi;
    색: 주;
    색: 노;
    색: 초;
    색: 파;
    색: 남;
    색: 보;
    색: 검;
    색: 흰;
    색: 갈;
    진열: 유연;
    진열: 고정;
    진열: 절대;
}
```

## CSS output
```css
.foo {
    z-index: 9999;
    background-color: red;
    color: orange;
    color: yellow;
    color: green;
    color: blue;
    color: darkblue;
    color: purple;
    color: black;
    color: white;
    color: brown;
    display: flex;
    display: fixed;
    display: absolute;
}
```

## Usage

```js
postcss([ require('postcss-korean-stylesheets') ])
```

See [PostCSS] docs for examples for your environment.

## Find this plugin at
http://postcss.parts/tag/fun

## Thanks to

Inspiration from [Canadian Stylesheets](https://github.com/chancancode/postcss-canadian-stylesheets) and chats with [@darylljann](https://twitter.com/darylljann)
