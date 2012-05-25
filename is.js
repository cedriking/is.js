// is.js 1.1 ~ Copyright (c) 2012 Cedrik Boudreau
// http://isjs.quipoapps.com
// is.js may be freely distributed under the MIT licence.

if (!Array.prototype.forEach) {
	Array.prototype.forEach = function(func) {
		var len = this.length;
		if (typeof func != "function")
			throw new TypeError();

		var thisp = arguments[1];
		for (var i = 0; i < len; i++) {
			if (i in this)
				func.call(thisp, this[i], i, this);
		}
	};
}

var is = (function(){
	var object = Object, proto = object.prototype, ua = (window.navigator && navigator.userAgent) || "", av = (window.navigator && navigator.appVersion) || "",
	isClass = function(obj, klass){
		return proto.toString.call(obj) === '[object '+klass+']';
	},
	extend = function(target, source) {
		Array.prototype.slice.call(arguments, 1).forEach(function(source) {
			for (key in source) target[key] = source[key];
		});
		return target;
	},
	each = function(elements, callback) {
		var i, key;
		if (typeof elements === 'array')
			for(i = 0; i < elements.length; i++) {
				if(callback.call(elements[i], i, elements[i]) === false) return elements;
			}
		else
			for(key in elements) {
				if(callback.call(elements[key], key, elements[key]) === false) return elements;
			}
		return elements;
	},
	methods = {};

	each(['Object', 'Array', 'Boolean', 'Date', 'Function', 'Number', 'String', 'RegExp'], function(i, type){
		methods['is'+type] = function(){
			return isClass(this, type);
		}
	});

	extend(methods, {
		isInteger: function(){
			return this % 1 === 0;
		},
		isFloat: function(){
			return !this.isInteger();
		},
		isOdd: function(){
			return !this.isMultipleOf(2);
		},
		isEven: function(){
			return this.isMultipleOf(2);
		},
		isMultipleOf: function(multiple){
			return this % multiple === 0;
		},
		isNaN: function(){
			return !this.isNumber();
		},
		isEmpty: function(){
			if(this == null || typeof this != 'object') return !(this && this.length > 0);
			return object.keys(this).length == 0;
		},
		isSameType: function(obj){
			return proto.toString.call(this) === proto.toString.call(obj);
		},
		isOwnProperty: function(prop){
			return proto.hasOwnProperty.call(this, prop);
		},
		isType: function(type){
			return isClass(this, type);
		}
	});

	extend(proto, methods);
	return {
		ie: function(){
			return (/msie/i).test(ua);
		},
		ie6: function(){
			return (/msie 6/i).test(ua);
		},
		ie7: function(){
			return (/msie 7/i).test(ua);
		},
		ie8: function(){
			return (/msie 8/i).test(ua);
		},
		ie9: function(){
			return (/msie 9/i).test(ua);
		},
		firefox: function(){
			return (/firefox/i).test(ua);
		},
		gecko: function(){
			return (/gecko/i).test(ua);
		},
		opera: function(){
			return (/opera/i).test(ua);
		},
		safari: function(){
			return (/webkit\W(?!.*chrome).*safari\W/i).test(ua);
		},
		chrome: function(){
			return (/webkit\W.*(chrome|chromium)\W/i).test(ua);
		},
		webkit: function(){
			return (/webkit\W/i).test(ua);
		},
		mobile: function(){
			return (/iphone|ipod|(android.*?mobile)|blackberry|nokia/i).test(ua);
		},
		tablet: function(){
			return (/ipad|android(?!.*mobile)/i).test(ua);
		},
		desktop: function(){
			return !this.mobile() && !this.tablet();
		},
		kindle: function(){
			return (/kindle|silk/i).test(ua);
		},
		tv: function(){
			return (/googletv|sonydtv/i).test(ua);
		},
		online: function(){
			return (navigator.onLine);
		},
		offline: function(){
			return !this.online();
		},
		windows: function(){
			return (/win/i).test(av);
		},
		mac: function(){
			return (/mac/i).test(av);
		},
		unix: function(){
			return (/x11/i).test(av);
		},
		linux: function(){
			return (/linux/i).test(av);
		}
	}
})();