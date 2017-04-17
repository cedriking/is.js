# is.js
is.js is a micro javascript library that helps you with conditions.

### Examples:

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

### How to use:
First of all you need to add is.js to your website, before your main javascript:
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>My homepage</title>
</head>
<body>
	
	<script src="is.min.js"></script> <!-- insert is.js -->
	<script src="main.js"></script>   <!-- your main javascript -->
</body>
</html>
```
After that you have already finished with the installation. Inside your main script you can already start using is.js!

## Object functions
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

// This functions can be used anytime with any object.
// Example:
var str = 'this is a string';
str.isString(); // will return **true**
```

## Special String functions (added in v1.3)
```js
isBlank()
isCC( /* optional type */ )
isCreditCard( /* optional type */ )
isEmail()
isLatLng() or isLatLong()
isPhone( /* optional country code, default = 'us' */ )
isZip( /* optional country code, default = 'us' */ )

/*
isCC and isCreditCard have the parameter type, where you can pass a string:
'any' => any kind of credit card
'ae' or 'AmericanExpress'
'Discover'
'mc' or 'MasterCard'
'Visa'

Country codes for isPhone are:
ar, au, ca, fr, is, uk and us

Country codes for isZip are:
ar, au, at, be, br, ca, dk, de, es, gb, hu, is, it, jp, nl, pl, se and us
*/

// Example:
var str = "5196255216134695";
str.isCC(); // will return **true**
```

## Special Date functions (added in v1.2)
```js
isAfter(date)
isBefore(date)
isFuture( /* optional date */ )
isLeapYear()
isPast( /* optional date */ )
isValid()
isWeekday()
isWeekend()
/*
Some date functions have been changed in v1.3
to receive an optional Date to compare example:

var d2 = new Date();
d.isPast( d2 ); // d is past of d2, true
d.isFuture( d2 ); // d is future of d2, false
*/

// Example:
var d = new Date();
d.isWeekend(); // return true if is a weekend.
d.isValid(); // return true.
```

## Core functions
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

// Example:
var ie = is.ie(); // Will return **true** if you are currently on Internet Explorer
```

### Change Log:
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