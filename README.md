#is.js
is.js is a micro javascript library that allow you to do conditions more faster.

###Example:

```js
// Object functions:
var str = 'my string';
str.isString(); // returns true
str.isEmpty(); // returns false
str.isArray(); // returns false

// also is.js have some core functions:
is.windows();
is.chrome();
is.mobile();
is.online(); // for mobile

if(str.isString()){
  // do stuffs here
}
if(is.desktop()){
  // do stuffs here
}
```