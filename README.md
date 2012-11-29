#is.js
is.js is a micro javascript library that allows you to do conditions faster.

###Examples:

```js
// Object functions:
var str = 'my string';
str.isString(); // return true
str.isEmpty(); // return false
str.isArray(); // return false

// new in v1.2
str.isBlank();   // return false
''.isBlank();    // return true
'   '.isBlank(); // return true

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
isBlank() // new in version 1.2
```

##Special Date functions (added in v1.2)
```js
var d = new Date();
d.isWeekend(); // return true if is a weekend.
d.isValid(); // return true.

isPast()
isFuture()
isWeekday()
isWeekend()
isBefore(date)
isAfter(date)
isLeapYear()
isValid()
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
#### Version 1.2
- Added new validators for the Dates
- Added isBlank for a string

#### Version 1.1
- Now is.js is working for Internet Explorer 6+
- Added is.ie6(), is.ie7(), is.ie8() and is.ie9()