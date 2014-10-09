
/* 
is.js 1.4 ~ Copyright (c) 2012-2014 Cedrik Boudreau
https://github.com/Cedriking/is.js
http://isjs.quipoapps.com
is.js may be freely distributed under the MIT Licence.
 */


/* Fixing ECMA262-5 array method if not supported natively ( old IE versions ) */

(function() {
  var exports;

  if (Array.prototype.forEach == null) {
    Array.prototype.forEach = function(func, option) {
      var len, _i, _len;
      if (typeof func !== 'function') {
        throw new TypeError();
      }
      for (_i = 0, _len = this.length; _i < _len; _i++) {
        len = this[_i];
        func.call(option, len, _i, this);
      }
    };
  }

  exports = this;

  exports.is = (function() {
    var av, dateP, each, extend, isClass, methods, object, proto, stringP, ua;
    object = Object;
    proto = object.prototype;
    ua = (window.navigator && navigator.userAgent) || "";
    av = (window.navigator && navigator.appVersion) || "";
    dateP = Date.prototype;
    stringP = String.prototype;
    isClass = function(obj, klass) {
      return proto.toString.call(obj) === ("[object " + klass + "]");
    };
    extend = function(target, source) {
      return Array.prototype.slice.call(arguments, 1).forEach(function(source) {
        var key;
        for (key in source) {
          target[key] = source[key];
        }
        return target;
      });
    };
    each = function(elements, callback) {
      var element, key, _i, _len;
      if (typeof elements === 'array') {
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
          element = elements[_i];
          if (!callback.call(element, _i, element)) {
            return elements;
          }
        }
      } else {
        for (key in elements) {
          if (!callback.call(elements[key], key, elements[key])) {
            return elements;
          }
        }
      }
      return elements;
    };
    methods = {};
    each(['Object', 'Array', 'Boolean', 'Date', 'Function', 'Number', 'String', 'RegExp'], function(i, type) {
      return methods["is" + type] = function() {
        return isClass(this, type);
      };
    });
    extend(methods, {
      isInteger: function() {
        return this % 1 === 0;
      },
      isFloat: function() {
        return !this.isInteger();
      },
      isOdd: function() {
        return !this.isEven();
      },
      isEven: function() {
        return this.isMultipleOf(2);
      },
      isMultipleOf: function(multiple) {
        return this % multiple === 0;
      },
      isNaN: function() {
        return !this.isNumber();
      },
      isEmpty: function() {
        if (this === null || typeof this !== 'object') {
          return !(this && this.length > 0);
        }
        return object.keys(this).length === 0;
      },
      isSameType: function(obj) {
        return proto.toString.call(this) === proto.toString.call(obj);
      },
      isOwnProperty: function(prop) {
        return proto.hasOwnProperty.call(this, prop);
      },
      isType: function(type) {
        return isClass(this, type);
      },
      isBlank: function() {
        return this.trim().length === 0;
      }
    });

    /* d = new Date() */
    extend(dateP, {
      isPast: function(d) {
        if (d == null) {
          d = this;
        }
        return this.getTime() < d.getTime();
      },
      isFuture: function(d) {
        if (d == null) {
          d = this;
        }
        return this.getTime() > d.getTime();
      },
      isWeekday: function() {
        return this.getUTCDay() > 0 && this.getUTCDay() < 6;
      },
      isWeekend: function() {
        return this.getUTCDay() === 0 || this.getUTCDay() === 6;
      },
      isBefore: function(d) {
        if (d == null) {
          d = this;
        }
        return this.isPast(d);
      },
      isAfter: function(d) {
        if (d == null) {
          d = this;
        }
        return this.isFuture(d);
      },
      isLeapYear: function() {
        var year;
        year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
      },
      isValid: function() {
        return !this.getTime().isNaN();
      }
    });
    extend(stringP, {

      /* Added in version 1.3 */
      isCC: function(type) {
        var regex;
        if (type == null) {
          type = 'any';
        }
        regex = (function() {
          switch (type) {
            case 'any':
              return /^[0-9]{15,16}$/;
            case 'ae' || 'AmericanExpress':
              return /^(34)|(37)\d{14}$/;
            case 'Discover':
              return /^6011\d{12}$/;
            case 'mc' || 'MasterCard':
              return /^5[1-5]\d{14}$/;
            case 'Visa':
              return /^4\d{15}$/;
          }
        })();
        return regex.test(this);
      },
      isCreditCard: function(type) {
        if (type == null) {
          type = 'any';
        }
        return this.isCC(type);
      },
      isEmail: function() {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this);
      },
      isLatLng: function() {
        return /-?\d{1,3}\.\d+/.test(this);
      },
      isLatLong: function() {
        return this.isLatLng();
      },
      isPhone: function(country) {
        var regex;
        if (country == null) {
          country = 'us';
        }
        regex = (function() {
          switch (country) {
            case 'ar':
              return /^(?:\+|[0]{2})?(54)?(:?[\s-])*\d{4}(:?[\s-])*\d{4}$/;
            case 'au':
              return /^(?:\+|0)?(?:61)?\s?[2-478](?:[ -]?[0-9]){8}$/;
            case 'ca':
              return /^(1-?)?(([2-9]\d{2})|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/;
            case 'fr':
              return /^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$/;
            case 'is':
              return /^(?:\+|[0]{2})?(354)?(:?[\s-])*\d{3}(:?[\s-])*\d{4}$/;
            case 'uk':
              return /^(?:\+|044)?(?:\s+)?\(?(\d{1,5}|\d{4}\s*\d{1,2})\)?\s+|-(\d{1,4}(\s+|-)?\d{1,4}|(\d{6}))\d{6}$/;
            case 'us':
              return /^(1-?)?(\d{3})(:?[\s\-])*(\d{3})(:?[\s\-])*(\d{4})$/;
          }
        })();
        return regex.test(this);
      },
      isZip: function(country) {
        var regex;
        if (country == null) {
          country = 'us';
        }
        regex = (function() {
          switch (country) {
            case 'ar':
              return /^\d{4}$/;
            case 'au':
              return /^\d{4}$/;
            case 'at':
              return /^\d{4}$/;
            case 'be':
              return /^\d{4}$/;
            case 'br':
              return /^\d{5}[\-]?\d{3}$/;
            case 'ca':
              return /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
            case 'dk':
              return /^\d{3,4}$/;
            case 'de':
              return /^\d{5}$/;
            case 'es':
              return /^((0[1-9]|5[0-2])|[1-4]\d)\d{3}$/;
            case 'gb':
              return /^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? \d[ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}$/;
            case 'hu':
              return /^\d{4}$/;
            case 'is':
              return /^\d{3}$/;
            case 'it':
              return /^\d{5}$/;
            case 'jp':
              return /^\d{3}-\d{4}$/;
            case 'nl':
              return /^\d{4}$/;
            case 'pl':
              return /^\d{2}\-\d{3}$/;
            case 'se':
              return /^\d{3}\s?\d{2}$/;
            case 'us':
              return /^(\d{5}([\-]\d{4})?)$/;
          }
        })();
        return regex.test(this);
      }
    });
    extend(proto, methods);
    return {
      ie: function() {
        return /msie/i.test(ua);
      },
      ie6: function() {
        return /msie 6/i.test(ua);
      },
      ie7: function() {
        return /msie 7/i.test(ua);
      },
      ie8: function() {
        return /msie 8/i.test(ua);
      },
      ie9: function() {
        return /msie 9/i.test(ua);
      },
      ie10: function() {
        return /msie 10/i.test(ua);
      },
      ie11: function() {
        return /Trident.*rv[ :]*11\./.test(ua);
      },
      firefox: function() {
        return /firefox/i.test(ua);
      },
      gecko: function() {
        return /gecko/i.test(ua);
      },
      opera: function() {
        return /opera/i.test(ua);
      },
      safari: function() {
        return /webkit\W(?!.*chrome).*safari\W/i.test(ua);
      },
      chrome: function() {
        return /webkit\W.*(chrome|chromium)\W/i.test(ua);
      },
      webkit: function() {
        return /webkit\W/i.test(ua);
      },
      mobile: function() {
        return /iphone|ipod|(android.*?mobile)|blackberry|nokia/i.test(ua);
      },
      tablet: function() {
        return /ipad|android(?!.*mobile)/i.test(ua);
      },
      desktop: function() {
        return !this.mobile() && !this.tablet();
      },
      kindle: function() {
        return /kindle|silk/i.test(ua);
      },
      tv: function() {
        return /googletv|sonydtv|appletv|roku|smarttv/i.test(ua);
      },
      online: function() {
        return navigator.onLine;
      },
      offline: function() {
        return !this.online();
      },
      windows: function() {
        return /win/i.test(av);
      },
      mac: function() {
        return /mac/i.test(av);
      },
      unix: function() {
        return /x11/i.test(av);
      },
      linux: function() {
        return /linux/i.test(av);
      }
    };
  })();

}).call(this);
