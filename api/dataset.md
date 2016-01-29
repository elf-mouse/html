feature: dataset
status: use
tags: fallback gtie10 nooldmobile
kind: api
polyfillurls:[HTML5 dataset support](http://eligrey.com/blog/post/html-5-dataset-support)

`elem.dataset` is unsupported in Internet Explorer <= 10 and older mobile browsers. Using data-* attributes will be totally fine in all browsers, but instead of using `elem.dataset.foo` just use `elem.getAttribute('data-foo')`. A polyfill is available if you want terser syntax.

## Syntax

```
string = element.dataset.camelCasedName;
element.dataset.camelCasedName = string;
```

## Examples

```
<div id="user" data-id="1234567890" data-user="johndoe" data-date-of-birth>John Doe
</div>

var el = document.querySelector('#user');

// el.id == 'user'
// el.dataset.id === '1234567890'
// el.dataset.user === 'johndoe'
// el.dataset.dateOfBirth === ''

el.dataset.dateOfBirth = '1960-10-03'; // set the DOB.

// 'someDataAttr' in el.dataset === false

el.dataset.someDataAttr = 'mydata';
// 'someDataAttr' in el.dataset === true
```
