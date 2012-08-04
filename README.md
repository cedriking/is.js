#is.js
is.js is a micro javascript library that allows you to do conditions faster.

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
is.online();

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
ie6()
ie7()
ie8()
ie9()
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

// Online / Offline
online()
offline()

// OS
windows()
mac()
unix()
linux()
```

###Change Log:
#### Version 1.1
- Now is.js is working for Internet Explorer 6+
- Added is.ie6(), is.ie7(), is.ie8() and is.ie9()