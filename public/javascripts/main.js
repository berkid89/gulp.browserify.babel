(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var greeter = require('./modules/greetings.js');

window.app = greeter;

},{"./modules/greetings.js":2}],2:[function(require,module,exports){
module.exports = {
  sayHelloInEnglish: function () {
    return "Hello";
  },

  sayHelloInSpanish: function () {
    return "Hola";
  }
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmcm9udGVuZFxcbWFpbi5qcyIsImZyb250ZW5kXFxtb2R1bGVzXFxncmVldGluZ3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLFVBQVUsUUFBUSx3QkFBUixDQUFWOztBQUVKLE9BQU8sR0FBUCxHQUFhLE9BQWI7OztBQ0ZBLE9BQU8sT0FBUCxHQUFpQjtBQUNmLHFCQUFtQixZQUFXO0FBQzVCLFdBQU8sT0FBUCxDQUQ0QjtHQUFYOztBQUluQixxQkFBbUIsWUFBVztBQUM1QixXQUFPLE1BQVAsQ0FENEI7R0FBWDtDQUxyQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgZ3JlZXRlciA9IHJlcXVpcmUoJy4vbW9kdWxlcy9ncmVldGluZ3MuanMnKTtcclxuXHJcbndpbmRvdy5hcHAgPSBncmVldGVyOyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHNheUhlbGxvSW5FbmdsaXNoOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBcIkhlbGxvXCI7XHJcbiAgfSxcclxuICAgICAgIFxyXG4gIHNheUhlbGxvSW5TcGFuaXNoOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBcIkhvbGFcIjtcclxuICB9XHJcbn07Il19
