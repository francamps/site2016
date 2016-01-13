require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({212:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _sidepanel = require('./sidepanel/sidepanel');

var _sidepanel2 = _interopRequireDefault(_sidepanel);

var _logo = require('./logo');

var _logo2 = _interopRequireDefault(_logo);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = (function (_React$Component) {
  _inherits(About, _React$Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(About).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'section',
          { className: 'about' },
          _react2.default.createElement(_sidepanel2.default, null),
          _react2.default.createElement(_logo2.default, null),
          _react2.default.createElement(
            'h2',
            null,
            'Hola'
          ),
          _react2.default.createElement(
            'div',
            { className: 'copy' },
            _react2.default.createElement(
              'p',
              null,
              'I’m Franc Camps-Febrer and I am a data visualization engineer and digital artist. I was born in Barcelona, and I am based in Brooklyn.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'I’m currently working for @Knewton, the adaptive learning platform. I also do freelance work when I believe it’ll make the world better. I am passionate about all things storytelling, and exploring combinations of formats to tell more powerful stories.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'I’ve worked as a bunch of different things, but most importantly as researcher, teacher, designer and developer. I’ve always done writing for various purposes. I earned a master degree in Developmental Neuroscience from CUNY in 2011, and focused my master’s thesis on neuroaesthetics, synaesthesia and the emergence of creative thinking based on research work I collaborated with at NYU’s Center for Neural Science. I also shot a documentary about it.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Late 2011, I started pursuing my interests in visualization, interaction, design and development full-time. Putting all my experiences together, I like to think I have both a qualitative and quantitative approach to storytelling. You can check my resume here.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'I was part of the School for Poetic Computation Fall 2014 session, exploring the intersection of code, design, hardware and theory in media art.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'I have an opinion.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Say hi!'
            )
          )
        ),
        _react2.default.createElement(_footer2.default, null)
      );
    }
  }]);

  return About;
})(_react2.default.Component);

exports.default = About;

(0, _reactDom.render)(_react2.default.createElement(About, null), document.getElementById('about'));

},{"./footer":216,"./logo":220,"./sidepanel/sidepanel":227,"react":211,"react-dom":29}]},{},[212])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mYWN0b3ItYnVuZGxlL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9qc3gvYWJvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBU1EsS0FBSztZQUFMLEtBQUs7O1dBQUwsS0FBSzswQkFBTCxLQUFLOztrRUFBTCxLQUFLOzs7ZUFBTCxLQUFLOzs2QkFDZjtBQUNQLGFBQ0U7OztRQUNFOztZQUFTLFNBQVMsRUFBQyxPQUFPO1VBQ3hCLHdEQUFhO1VBQ2IsbURBQVE7VUFDUjs7OztXQUFhO1VBQ2I7O2NBQUssU0FBUyxFQUFDLE1BQU07WUFDbkI7Ozs7YUFBNkk7WUFDN0k7Ozs7YUFBbVE7WUFDblE7Ozs7YUFBMGM7WUFDMWM7Ozs7YUFBMFE7WUFDMVE7Ozs7YUFBdUo7WUFDdko7Ozs7YUFBeUI7WUFDekI7Ozs7YUFBYztXQUNWO1NBQ0U7UUFDVixxREFBVTtPQUNOLENBQ047S0FDSDs7O1NBckJrQixLQUFLO0dBQVMsZ0JBQU0sU0FBUzs7a0JBQTdCLEtBQUs7O0FBd0IxQixjQTlCUyxNQUFNLEVBOEJSLDhCQUFDLEtBQUssT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5cbmltcG9ydCBTaWRlUGFuZWwgZnJvbSAnLi9zaWRlcGFuZWwvc2lkZXBhbmVsJztcbmltcG9ydCBMb2dvIGZyb20gJy4vbG9nbyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nYWJvdXQnPlxuICAgICAgICAgIDxTaWRlUGFuZWwgLz5cbiAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgIDxoMj5Ib2xhPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29weSc+XG4gICAgICAgICAgICA8cD5J4oCZbSBGcmFuYyBDYW1wcy1GZWJyZXIgYW5kIEkgYW0gYSBkYXRhIHZpc3VhbGl6YXRpb24gZW5naW5lZXIgYW5kIGRpZ2l0YWwgYXJ0aXN0LiBJIHdhcyBib3JuIGluIEJhcmNlbG9uYSwgYW5kIEkgYW0gYmFzZWQgaW4gQnJvb2tseW4uPC9wPlxuICAgICAgICAgICAgPHA+SeKAmW0gY3VycmVudGx5IHdvcmtpbmcgZm9yIEBLbmV3dG9uLCB0aGUgYWRhcHRpdmUgbGVhcm5pbmcgcGxhdGZvcm0uIEkgYWxzbyBkbyBmcmVlbGFuY2Ugd29yayB3aGVuIEkgYmVsaWV2ZSBpdOKAmWxsIG1ha2UgdGhlIHdvcmxkIGJldHRlci4gSSBhbSBwYXNzaW9uYXRlIGFib3V0IGFsbCB0aGluZ3Mgc3Rvcnl0ZWxsaW5nLCBhbmQgZXhwbG9yaW5nIGNvbWJpbmF0aW9ucyBvZiBmb3JtYXRzIHRvIHRlbGwgbW9yZSBwb3dlcmZ1bCBzdG9yaWVzLjwvcD5cbiAgICAgICAgICAgIDxwPknigJl2ZSB3b3JrZWQgYXMgYSBidW5jaCBvZiBkaWZmZXJlbnQgdGhpbmdzLCBidXQgbW9zdCBpbXBvcnRhbnRseSBhcyByZXNlYXJjaGVyLCB0ZWFjaGVyLCBkZXNpZ25lciBhbmQgZGV2ZWxvcGVyLiBJ4oCZdmUgYWx3YXlzIGRvbmUgd3JpdGluZyBmb3IgdmFyaW91cyBwdXJwb3Nlcy4gSSBlYXJuZWQgYSBtYXN0ZXIgZGVncmVlIGluIERldmVsb3BtZW50YWwgTmV1cm9zY2llbmNlIGZyb20gQ1VOWSBpbiAyMDExLCBhbmQgZm9jdXNlZCBteSBtYXN0ZXLigJlzIHRoZXNpcyBvbiBuZXVyb2Flc3RoZXRpY3MsIHN5bmFlc3RoZXNpYSBhbmQgdGhlIGVtZXJnZW5jZSBvZiBjcmVhdGl2ZSB0aGlua2luZyBiYXNlZCBvbiByZXNlYXJjaCB3b3JrIEkgY29sbGFib3JhdGVkIHdpdGggYXQgTllV4oCZcyBDZW50ZXIgZm9yIE5ldXJhbCBTY2llbmNlLiBJIGFsc28gc2hvdCBhIGRvY3VtZW50YXJ5IGFib3V0IGl0LjwvcD5cbiAgICAgICAgICAgIDxwPkxhdGUgMjAxMSwgSSBzdGFydGVkIHB1cnN1aW5nIG15IGludGVyZXN0cyBpbiB2aXN1YWxpemF0aW9uLCBpbnRlcmFjdGlvbiwgZGVzaWduIGFuZCBkZXZlbG9wbWVudCBmdWxsLXRpbWUuIFB1dHRpbmcgYWxsIG15IGV4cGVyaWVuY2VzIHRvZ2V0aGVyLCBJIGxpa2UgdG8gdGhpbmsgSSBoYXZlIGJvdGggYSBxdWFsaXRhdGl2ZSBhbmQgcXVhbnRpdGF0aXZlIGFwcHJvYWNoIHRvIHN0b3J5dGVsbGluZy4gWW91IGNhbiBjaGVjayBteSByZXN1bWUgaGVyZS48L3A+XG4gICAgICAgICAgICA8cD5JIHdhcyBwYXJ0IG9mIHRoZSBTY2hvb2wgZm9yIFBvZXRpYyBDb21wdXRhdGlvbiBGYWxsIDIwMTQgc2Vzc2lvbiwgZXhwbG9yaW5nIHRoZSBpbnRlcnNlY3Rpb24gb2YgY29kZSwgZGVzaWduLCBoYXJkd2FyZSBhbmQgdGhlb3J5IGluIG1lZGlhIGFydC48L3A+XG4gICAgICAgICAgICA8cD5JIGhhdmUgYW4gb3Bpbmlvbi48L3A+XG4gICAgICAgICAgICA8cD5TYXkgaGkhPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxucmVuZGVyKDxBYm91dCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0JykpO1xuIl19
