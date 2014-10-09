var strEmpty = '', 
	str = 'This is a string', 
	obj = {},
	creditCard = "5196255216134695", 
	d = new Date(), 
	arr = [], 
	bool = true,
	fl = 22.5,
	integer = 23,
	reg = /abc/;


/*** Object Functions ***/
QUnit.test("isArray", function( assert ) {
	equal( arr.isArray(), true, "Array is Array" );
	equal( obj.isArray(), false, "Object is not Array" );
	equal( str.isArray(), false, "String is not Array" );
	equal( d.isArray(), false, "Date is not Array" );
	equal( bool.isArray(), false, "Boolean is not Array" );
	equal( integer.isArray(), false, "Number is not Array" );
	equal( reg.isArray(), false, "Regexp is not Array" );
});

QUnit.test("isBoolean", function( assert ) {
	equal( bool.isBoolean(), true, "Boolean is Boolean" );
	equal( arr.isBoolean(), false, "Array is notBoolean" );
	equal( obj.isBoolean(), false, "Object is not Boolean" );
	equal( str.isBoolean(), false, "String is not Boolean" );
	equal( d.isBoolean(), false, "Date is not Boolean" );
	equal( integer.isBoolean(), false, "Number is not Boolean" );
	equal( reg.isBoolean(), false, "Regexp is not Boolean" );
});

QUnit.test("isDate", function( assert ) {
	equal( d.isDate(), true, "Date is Date" );
	equal( arr.isDate(), false, "Array is not Date" );
	equal( obj.isDate(), false, "Object is not Date" );
	equal( str.isDate(), false, "String is not Date" );
	equal( bool.isDate(), false, "Boolean is not Date" );
	equal( integer.isDate(), false, "Number is not Date" );
	equal( reg.isDate(), false, "Regexp is not Date" );
});

QUnit.test("isEmpty", function( assert ) {
	equal( strEmpty.isEmpty(), true, "empty String is empty" );
	equal( str.isEmpty(), false, "not empty String is not Empty" );
	equal( arr.isEmpty(), true, "empty Array is Empty" );
	equal( [1,2,3].isEmpty(), false, "not empty Array is not Empty" );
	equal( obj.isEmpty(), true, "empty Object is Empty" );
	equal( {'sarah': 'maximum', 1: 2}.isEmpty(), false, "not empty Object is not Empty" );
});

QUnit.test("isEven", function( assert ) {
	var even = 2, noteven = 3;

	equal( even.isEven(), true, "2 is Even" );
	equal( noteven.isEven(), false, "3 is not Even" );
});

QUnit.test("isFloat", function( assert ) {
	equal( fl.isFloat(), true, "22.5 is a float number" );
	equal( integer.isFloat(), false, "23 is not a float number" );
});

QUnit.test("isFunction", function( assert ) {
	var func = function(){};

	equal( func.isFunction(), true, "Function is Function" );
	equal( d.isFunction(), false, "Date is not Function" );
	equal( arr.isFunction(), false, "Array is not Function" );
	equal( obj.isFunction(), false, "Object is not Function" );
	equal( str.isFunction(), false, "String is not Function" );
	equal( bool.isFunction(), false, "Boolean is not Function" );
	equal( integer.isFunction(), false, "Number is not Function" );
	equal( reg.isFunction(), false, "Regexp is not Function" );
});

QUnit.test("isInteger", function( assert ) {
	equal( integer.isInteger(), true, "23 is an Integer" );
	equal( fl.isInteger(), false, "22.5 is not an Integer" );
});

QUnit.test("isMultipleOf", function( assert ) {
	var ten = 10, eleven = 11;

	equal( ten.isMultipleOf( 5 ), true, "10 is multiple of 5" );
	equal( eleven.isMultipleOf( 5 ), false, "11 is not multiple of 5" );
});

QUnit.test("isNaN", function( assert ) {
	equal( obj.isNaN(), true, "Object is not a number" );
	equal( arr.isNaN(), true, "Array is not a number" );
	equal( str.isNaN(), true, "String is not a number" );
	equal( d.isNaN(), true, "Date is not a number" );
	equal( bool.isNaN(), true, "Boolean is not a number" );
	equal( integer.isNaN(), false, "Integer is a number" );
	equal( fl.isNaN(), false, "Float is a number" );
	equal( reg.isNaN(), true, "Regexp is not a number" );
});

QUnit.test("isNumber", function( assert ) {
	equal( obj.isNumber(), false, "Object is not a number" );
	equal( arr.isNumber(), false, "Array is not a number" );
	equal( str.isNumber(), false, "String is not a number" );
	equal( d.isNumber(), false, "Date is not a number" );
	equal( bool.isNumber(), false, "Boolean is not a number" );
	equal( integer.isNumber(), true, "Integer is a number" );
	equal( fl.isNumber(), true, "Float is a number" );
	equal( reg.isNumber(), false, "Regexp is not a number" );
});

QUnit.test("isObject", function( assert ) {
	equal( obj.isObject(), true, "Object is Object" );
	equal( arr.isObject(), false, "Array is not Object" );
	equal( str.isObject(), false, "String is not Object" );
	equal( d.isObject(), false, "Date is not Object" );
	equal( bool.isObject(), false, "Boolean is not Object" );
	equal( integer.isObject(), false, "Number is not Object" );
	equal( reg.isObject(), false, "Regexp is not Object" );
});

QUnit.test("isOdd", function( assert ) {
	var even = 2, noteven = 3;

	equal( noteven.isOdd(), true, "3 is Odd" );
	equal( even.isOdd(), false, "2 is not Odd" );
});

QUnit.test("isOwnProperty", function( assert ) {
	var objProp = {};
	objProp.test = 541241;

	equal( objProp.isOwnProperty( 'test' ), true, "test is a property of objProp" );
	equal( objProp.isOwnProperty( 'comma' ), false, "comma is not a property of objProp" );
});

QUnit.test("isRegExp", function( assert ) {
	equal( reg.isRegExp(), true, "Regexp is RegExp" );
	equal( arr.isRegExp(), false, "Array is not RegExp" );
	equal( str.isRegExp(), false, "String is not RegExp" );
	equal( d.isRegExp(), false, "Date is not RegExp" );
	equal( bool.isRegExp(), false, "Boolean is not RegExp" );
	equal( integer.isRegExp(), false, "Number is not RegExp" );
	equal( obj.isRegExp(), false, "Object is not RegExp" );
});

QUnit.test("isSameType", function( assert ) {
	equal( reg.isSameType( /eio/ ), true, "Regexp is same type RegExp" );
	equal( arr.isSameType( {} ), false, "Array is not type Object" );
	equal( str.isSameType( "hello world" ), true, "String is same type String" );
	equal( d.isSameType( {} ), false, "Date is not type Object" );
	equal( bool.isSameType( {} ), false, "Boolean is not type Object" );
	equal( integer.isSameType( {} ), false, "Number is not type Object" );
	equal( obj.isSameType( {} ), true, "Object is same type Object" );
});

QUnit.test("isString", function( assert ) {
	equal( str.isString(), true, "String is String" );
	equal( arr.isString(), false, "Array is not String" );
	equal( reg.isString(), false, "Regexp is not String" );
	equal( d.isString(), false, "Date is not String" );
	equal( bool.isString(), false, "Boolean is not String" );
	equal( integer.isString(), false, "Number is not String" );
	equal( obj.isString(), false, "Object is not String" );
});

QUnit.test("isType", function( assert ) {
	equal( str.isType( "String" ), true, "String is type String" );
	equal( arr.isType( "String" ), false, "Array is not type String" );
	equal( reg.isType( "String" ), false, "Regexp is not type String" );
	equal( d.isType( "String" ), false, "Date is not type String" );
	equal( bool.isType( "String" ), false, "Boolean is not type String" );
	equal( integer.isType( "String" ), false, "Number is not type String" );
	equal( obj.isType( "String" ), false, "Object is not type String" );
});


/*** String Functions ***/
QUnit.test("isBlank", function( assert ) {
	equal( strEmpty.isBlank(), true, "empty string is Blank" );
	equal( str.isBlank(), false, "String is not Blank" );
});

QUnit.test("isCC and isCreditCard", function( assert ) {
	equal( creditCard.isCC(), true, "'5196255216134695' is a credit card number" );
	equal( str.isCC(), false, "'This is a string' is not a credit card number" );
	equal( creditCard.isCreditCard(), true, "'5196255216134695' is a credit card number" );
	equal( str.isCreditCard(), false, "'This is a string' is not a credit card number" );
});

QUnit.test("isEmail", function( assert ) {
	equal( 'test@email.com'.isEmail(), true, "'test@email.com' is an email" );
	equal( str.isEmail(), false, "'This is a string' is not an email" );
});

QUnit.test("isLatLng and isLatLong", function( assert ) {
	var latlong = '63.548552, -127.529297';
	equal( latlong.isLatLong(), true, "'63.548552, -127.529297' is a valid Latitude Longitude" );
	equal( str.isLatLong(), false, "'This is a string' is not a latitude longitude" );
	equal( latlong.isLatLng(), true, "'63.548552, -127.529297' is a valid Latitude Longitude" );
	equal( str.isLatLng(), false, "'This is a string' is not a latitude longitude" );
});

QUnit.test("isPhone", function( assert ) {
	var ar1 = '1234-5678',
		au1 = '0491 570 156', 
		au2 = '+61 491 570 156', 
		ca1 = '613-555-0195', 
		ca2 = '1-613-555-0195', 
		fr1 = '03 7291 6437', 
		fr2 = '04.48.95.09.94', 
		is1 = '479 5406', 
		is2 = '438 7049', 
		uk1 = '01632 960483', 
		uk2 = '+44 1632 960483', 
		us1 = '202-555-0173', 
		us2 = '1-202-555-0173';

	equal( ar1.isPhone( 'ar' ), true, "'123-4564' is an AR phone number" );
	equal( au1.isPhone( 'au' ), true, "'0491 570 156' is an AU phone number" );
	equal( au2.isPhone( 'au' ), true, "'+61 491 570 156' is an AU phone number" );
	equal( ca1.isPhone( 'ca' ), true, "'613-555-0195' is a CA phone number" );
	equal( ca2.isPhone( 'ca' ), true, "'1-613-555-0195' is a CA phone number" );
	equal( fr1.isPhone( 'fr' ), true, "'03 7291 6437' is a FR phone number" );
	equal( fr2.isPhone( 'fr' ), true, "'04.48.95.09.94' is a FR phone number" );
	equal( is1.isPhone( 'is' ), true, "'01632 960483' is a IS phone number" );
	equal( is2.isPhone( 'is' ), true, "'+44 1632 960483' is a IS phone number" );
	equal( uk1.isPhone( 'uk' ), true, "'01632 960483' is a UK phone number" );
	equal( uk2.isPhone( 'uk' ), true, "'+44 1632 960483' is a UK phone number" );
	equal( us1.isPhone( 'us' ), true, "'202-555-0173' is a US phone number" );
	equal( us2.isPhone( 'us' ), true, "'1-202-555-0173' is a US phone number" );
});

QUnit.test("isZip", function( assert ) {
	var ar = '2403',
		au = '2440',
		at = '2413',
		be = '5142',
		br = '18044-280',
		ca = 'M8V 3B6',
		dk = '1131',
		de = '45128',
		es = '29611',
		gb = 'EC1A 1BB',
		hu = '9012',
		is = '371',
		it = '25049',
		jp = '541-5472',
		nl = '9446',
		pl = '61-324',
		se = '587 42',
		us = '60603'

	equal( ar.isZip( 'ar' ), true, "'2403' is an AR Zip Code" );
	equal( au.isZip( 'au' ), true, "'2440' is an AU Zip Code" );
	equal( at.isZip( 'at' ), true, "'2413' is an AT Zip Code" );
	equal( be.isZip( 'be' ), true, "'5142' is a BE Zip Code" );
	equal( br.isZip( 'br' ), true, "'18044-280' is a BR Zip Code" );
	equal( ca.isZip( 'ca' ), true, "'M8V 3B6' is a CA Zip Code" );
	equal( dk.isZip( 'dk' ), true, "'1131' is a DK Zip Code" );
	equal( de.isZip( 'de' ), true, "'45128' is a DE Zip Code" );
	equal( es.isZip( 'es' ), true, "'29611' is a ES Zip Code" );
	equal( gb.isZip( 'gb' ), true, "'EC1A 1BB' is a GB Zip Code" );
	equal( hu.isZip( 'hu' ), true, "'9012' is a HU Zip Code" );
	equal( is.isZip( 'is' ), true, "'371' is a IS Zip Code" );
	equal( it.isZip( 'it' ), true, "'25049' is a IT Zip Code" );
	equal( jp.isZip( 'jp' ), true, "'541-5472' is a JP Zip Code" );
	equal( nl.isZip( 'nl' ), true, "'8031' is a NL Zip Code" );
	equal( pl.isZip( 'pl' ), true, "'61-324' is a PL Zip Code" );
	equal( se.isZip( 'se' ), true, "'587 42' is a SE Zip Code" );
	equal( us.isZip( 'us' ), true, "'60603' is a US Zip Code" );
});


/*** Date Functions ***/
QUnit.test("isAfter and isFuture", function( assert ) {
	var newDate = new Date();

	equal( d.isFuture(), false, d+" isnt in the Future" );
	ok( newDate.isAfter( d ), newDate + " is After of "+ d );
	equal( d.isAfter( newDate ), false, d + " is not After of "+ newDate );
	ok( newDate.isFuture( d ), newDate + " is Future of "+ d );
	equal( d.isFuture( newDate ), false, d + " is not Future of "+ newDate );
});

QUnit.test("isBefore and isPast", function( assert ) {
	var newDate = new Date();

	equal( d.isPast(), false, d + " is in the past" );
	ok( d.isPast( newDate ), d + " is Past of "+ newDate );
	equal( newDate.isPast( d ), false, newDate + " is not Past of "+ d );
	ok( d.isBefore( newDate ), d + " is Before of "+ newDate );
	equal( newDate.isBefore( d ), false, newDate + " is not Before of "+ d );
});

QUnit.test("isLeapYear", function( assert ) {
	ok( d.isLeapYear(), "Is this year a Leap Year?" );
});

QUnit.test("isValid", function( assert ) {
	ok( d.isValid(), "Date is a valid date" );
});

QUnit.test("isWeekend and isWeekday", function( assert ) {
	ok( d.isWeekend(), "Is today a Weekend?" );
	ok( d.isWeekday(), "Then today is a Weekday." );
});


/*** Core Functions ***/
QUnit.test("Browser check", function( assert ) {
	ok( is.ie(), "I am currently using Internet Explorer (any version)" );
	ok( is.firefox(), "I am currently using Firefox" );
	ok( is.gecko(), "I am currently using Gecko" );
	ok( is.opera(), "I am currently using Opera" );
	ok( is.safari(), "I am currently using Safari" );
	ok( is.chrome(), "I am currently using Google Chrome" );
	ok( is.webkit(), "I am currently using a WebKit browser" );
});

QUnit.test("Device check", function( assert ) {
	ok( is.mobile(), "I am currently using a Mobile Browser" );
	ok( is.tablet(), "I am currently using a Tablet" );
	ok( is.desktop(), "I am currently using a Computer" );
	ok( is.kindle(), "I am currently using a Kindle" );
	ok( is.tv(), "I am currently using a TV" );
});

QUnit.test("Online / Offline Check", function( assert ) {
	ok( is.online(), "Am I online?" );
	ok( is.offline(), "Then I am offline." );
});

QUnit.test("OS Check", function( assert ) {
	ok( is.windows(), "I am using Windows" );
	ok( is.mac(), "I am using MAC" );
	ok( is.unix(), "I am using UNIX" );
	ok( is.linux(), "I am using LINUX" );
});