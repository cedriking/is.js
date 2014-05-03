#is.js
is.js is a micro javascript library that helps you with conditions.

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

// new in v1.3
'this@email.com'.isEmail(); // return true
'5156300575820365'.isCC() // return true
'5156300575820365'.isCC( 'Visa' ) // return false

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

##Special Date functions (added in v1.3)
```js
var str = "this is my string";
str.isCC( /* optional type */ ) // Credit Card, also you can use str.isCreditCard()
/*
isCC and isCreditCard have the parameter type, where you can pass a string:
'any' => any kind of credit card
'ae' or 'AmericanExpress'
'Discover'
'mc' or 'MasterCard'
'Visa'
to verify if the string is one of this kind of credit cards.
*/

isEmail()
isLatLng() or isLatLong()
isPhone( /* optional country code, default = 'us' */ )
/*
Country codes for isPhone are:
ar, au, ca, fr, is, uk and us
*/

isZip( /* optional country code, default = 'us' */ )
/*
Country codes for isZip are:
ar, au, at, be, br, ca, dk, de, es, gb, hu, is, it, jp, lu, nl, pl, se and us
*/
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
/*
Some date functions have been changed to receive an optional Date to compare :
isPast( date )
isFuture( date )
Example:
var d2 = new Date();
d.isPast( d2 ); // d is past of d2, true
d.isFuture( d2 ); // d is future of d2, false
*/
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
#### Version 1.3
- Added new validators and comparators
- Add new functions for strings
- Edited some Date validators

#### Version 1.2
- Added new validators for the Dates
- Added isBlank for a string

#### Version 1.1
- Now is.js is working for Internet Explorer 6+
- Added is.ie6(), is.ie7(), is.ie8() and is.ie9()