(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _colorpoint = require('./modules/colorpoint.js');

var _colorpoint2 = _interopRequireDefault(_colorpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.cp = new _colorpoint2.default(25, 8, 'green');

},{"./modules/colorpoint.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _point = require('./point.js');

var _point2 = _interopRequireDefault(_point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorPoint = function (_Point) {
    _inherits(ColorPoint, _Point);

    function ColorPoint(x, y, color) {
        _classCallCheck(this, ColorPoint);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ColorPoint).call(this, x, y));

        _this.color = color;
        return _this;
    }

    _createClass(ColorPoint, [{
        key: 'toString',
        value: function toString() {
            return _get(Object.getPrototypeOf(ColorPoint.prototype), 'toString', this).call(this) + ' in ' + this.color;
        }
    }]);

    return ColorPoint;
}(_point2.default);

exports.default = ColorPoint;
module.exports = exports['default'];

},{"./point.js":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
    function Point(x, y) {
        _classCallCheck(this, Point);

        this.x = x;
        this.y = y;
    }

    _createClass(Point, [{
        key: 'toString',
        value: function toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }
    }]);

    return Point;
}();

exports.default = Point;
module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmcm9udGVuZFxcbWFpbi5qcyIsImZyb250ZW5kXFxtb2R1bGVzXFxjb2xvcnBvaW50LmpzIiwiZnJvbnRlbmRcXG1vZHVsZXNcXHBvaW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNFQSxPQUFPLEVBQVAsR0FBWSx5QkFBZSxFQUFmLEVBQW1CLENBQW5CLEVBQXNCLE9BQXRCLENBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQU07OztBQUNGLGFBREUsVUFDRixDQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLEtBQWxCLEVBQXlCOzhCQUR2QixZQUN1Qjs7MkVBRHZCLHVCQUVRLEdBQUcsSUFEWTs7QUFFckIsY0FBSyxLQUFMLEdBQWEsS0FBYixDQUZxQjs7S0FBekI7O2lCQURFOzttQ0FLUztBQUNQLG1CQUFPLDJCQU5ULG1EQU1TLEdBQW1CLE1BQW5CLEdBQTRCLEtBQUssS0FBTCxDQUQ1Qjs7OztXQUxUOzs7UUFVaUIsVUFBZDs7Ozs7Ozs7Ozs7Ozs7SUNaSDtBQUNGLGFBREUsS0FDRixDQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCOzhCQURoQixPQUNnQjs7QUFDZCxhQUFLLENBQUwsR0FBUyxDQUFULENBRGM7QUFFZCxhQUFLLENBQUwsR0FBUyxDQUFULENBRmM7S0FBbEI7O2lCQURFOzttQ0FLUztBQUNQLG1CQUFPLE1BQU0sS0FBSyxDQUFMLEdBQVMsSUFBZixHQUFzQixLQUFLLENBQUwsR0FBUyxHQUEvQixDQURBOzs7O1dBTFQ7OztRQVVZLFVBQVQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IENvbG9yUG9pbnQgZnJvbSAnLi9tb2R1bGVzL2NvbG9ycG9pbnQuanMnO1xyXG5cclxud2luZG93LmNwID0gbmV3IENvbG9yUG9pbnQoMjUsIDgsICdncmVlbicpOyIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50LmpzJztcclxuXHJcbmNsYXNzIENvbG9yUG9pbnQgZXh0ZW5kcyBQb2ludCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBjb2xvcikge1xyXG4gICAgICAgIHN1cGVyKHgsIHkpO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBzdXBlci50b1N0cmluZygpICsgJyBpbiAnICsgdGhpcy5jb2xvcjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQ29sb3JQb2ludCBhcyBkZWZhdWx0fSIsImNsYXNzIFBvaW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gJygnICsgdGhpcy54ICsgJywgJyArIHRoaXMueSArICcpJztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUG9pbnQgYXMgZGVmYXVsdH0iXX0=
