(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.myBundle = {})));
}(this, (function (exports) { 'use strict';

	class Reviews {
		constructor() {
			console.log('init');
		}
	}

	exports.Reviews = Reviews;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
