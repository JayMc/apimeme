'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _libMemeTypesJson = require('../lib/memeTypes.json');

var _libMemeTypesJson2 = _interopRequireDefault(_libMemeTypesJson);

var _default = (function () {
	function _default() {
		_classCallCheck(this, _default);

		this.topText = '';
		this.bottomText = '';
		this.memeType = '';
	}

	_createClass(_default, [{
		key: 'searchMemeTypes',
		value: function searchMemeTypes(keyword) {
			return _libMemeTypesJson2['default'].filter(function (memeType) {
				if (memeType.search(keyword) >= 0) return true;
			});
		}
	}, {
		key: 'checkMemeType',
		value: function checkMemeType(memeType) {
			if (_libMemeTypesJson2['default'].indexOf(memeType) != -1) return true;else return false;
		}
	}, {
		key: 'validate',
		value: function validate() {
			if (!this.topText) return { result: false, msg: 'Please supply top text' };else if (!this.bottomText) return { result: false, msg: 'Please supply bottom text' };else if (!this.memeType) return { result: false, msg: 'Please supply meme' };else if (!this.checkMemeType(this.memeType)) return { result: false, msg: 'unknown meme, please use searchMemeTypes' };else return { result: true, msg: '' };
		}
	}, {
		key: 'getMemeImg',
		value: function getMemeImg(filename, callback) {
			if (!this.validate().result) return callback();

			var writeStream = _fs2['default'].createWriteStream(filename);
			var url = 'http://apimeme.com/meme?meme=' + escape(this.memeType) + '&top=' + escape(this.topText) + '&bottom=' + escape(this.bottomText);
			(0, _request2['default'])(url).pipe(writeStream);
			writeStream.on('finish', function () {
				return callback();
			});
		}
	}]);

	return _default;
})();

exports['default'] = _default;
module.exports = exports['default'];