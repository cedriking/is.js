#is.js
is.js is a micro javascript library that allow you to do conditions more faster.

###Examples:

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

##Object functions
```js
isArray()
isBoolean()
isDate()
isEmpty()
isEven()
isFloat()
isFunction()
isInteger()
isMultipleOf(number)
isNaN()
isNumber()
isObject()
isOdd()
isOwnProperty(prop)
isRegExp()
isSameType(obj2)
isString()
isType(type)
```

##Core functions
```js
// Browsers
ie()
firefox()
gecko()
opera()
safari()
chrome()
webkit()

// Device
mobile()
tablet()
desktop()
kindle()
tv()

// Online / Offline mobile only
online()
offline()

// OS
windows()
mac()
unix()
linux()
```