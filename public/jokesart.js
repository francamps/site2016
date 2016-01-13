require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({219:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _oneprojectthumbnail = require('./oneprojectthumbnail');

var _oneprojectthumbnail2 = _interopRequireDefault(_oneprojectthumbnail);

var _oneprojectdetail = require('./oneprojectdetail');

var _oneprojectdetail2 = _interopRequireDefault(_oneprojectdetail);

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

var project = {
  'id': 'project0',
  'title': 'Trainfuck',
  'abstract': 'Trainfuck: An encoding or implementation of Brainfuck in the physical world, using the MTA subway system. (Yeah, it\'s totally out there)'
};

var projects = [{
  'id': 'project0',
  'title': 'Visual whatsapp',
  'abstract': 'Trainfuck: An encoding or implementation of Brainfuck in the physical world, using the MTA subway system. (Yeah, it\'s totally out there)'
}, {
  'id': 'project1',
  'title': 'Unsend',
  'abstract': 'Trainfuck: An encoding or implementation of Brainfuck in the physical world, using the MTA subway system. (Yeah, it\'s totally out there)'
}, {
  'id': 'project2',
  'title': 'Trainfuck',
  'abstract': 'Trainfuck: An encoding or implementation of Brainfuck in the physical world, using the MTA subway system. (Yeah, it\'s totally out there)'
}, {
  'id': 'project3',
  'title': 'Craigslist flaneur',
  'abstract': 'Trainfuck: An encoding or implementation of Brainfuck in the physical world, using the MTA subway system. (Yeah, it\'s totally out there)'
}];

var Jokesart = (function (_React$Component) {
  _inherits(Jokesart, _React$Component);

  function Jokesart(props) {
    _classCallCheck(this, Jokesart);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Jokesart).call(this, props));

    _this.state = {
      activeProject: project,
      openMenu: false
    };
    return _this;
  }

  _createClass(Jokesart, [{
    key: 'selectProject',
    value: function selectProject(id) {
      // Select project from id
      var selectedProject = {};
      projects.forEach(function (project) {
        if (project.id === id) {
          selectedProject = project;
        }
      });

      this.setState({
        activeProject: selectedProject,
        openMenu: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'section',
          { className: 'jokes-art' },
          _react2.default.createElement(_sidepanel2.default, null),
          _react2.default.createElement(_sidepanel2.default, {
            hidden: true,
            additionalClass: 'right',
            contents: _react2.default.createElement(_oneprojectdetail2.default, { project: this.state.activeProject }),
            isOpen: this.state.openMenu }),
          _react2.default.createElement(
            'div',
            { className: 'jokes-art-wrapper' },
            _react2.default.createElement(_logo2.default, null),
            _react2.default.createElement(
              'h2',
              null,
              'Digital Art / Jokes / Other work'
            ),
            _react2.default.createElement(
              'p',
              { className: 'copy' },
              'In parallel, I explore digital contexts artistically. I like to reshape our online identities, explore how we communicate to each other, and what other forms these communications can take. I’m interested in online communities and what makes them emerge.'
            ),
            _react2.default.createElement(
              'div',
              { className: 'projects-wrapper' },
              _react2.default.createElement(
                'div',
                { className: 'column' },
                _react2.default.createElement(_oneprojectthumbnail2.default, {
                  onSelectProject: this.selectProject.bind(this),
                  project: projects[0] }),
                _react2.default.createElement(_oneprojectthumbnail2.default, { onSelectProject: this.selectProject.bind(this), project: projects[1] })
              ),
              _react2.default.createElement(
                'div',
                { className: 'column' },
                _react2.default.createElement(_oneprojectthumbnail2.default, { onSelectProject: this.selectProject.bind(this), project: projects[2] })
              ),
              _react2.default.createElement(
                'div',
                { className: 'column' },
                _react2.default.createElement(_oneprojectthumbnail2.default, { onSelectProject: this.selectProject.bind(this), project: projects[3] })
              )
            )
          )
        ),
        _react2.default.createElement(_footer2.default, null)
      );
    }
  }]);

  return Jokesart;
})(_react2.default.Component);

exports.default = Jokesart;
;

(0, _reactDom.render)(_react2.default.createElement(Jokesart, null), document.getElementById('app'));

},{"./footer":216,"./logo":220,"./oneprojectdetail":223,"./oneprojectthumbnail":224,"./sidepanel/sidepanel":227,"react":211,"react-dom":29}]},{},[219])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mYWN0b3ItYnVuZGxlL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9qc3gvam9rZXNhcnQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZYixJQUFJLE9BQU8sR0FBRztBQUNaLE1BQUksRUFBRSxVQUFVO0FBQ2hCLFNBQU8sRUFBRSxXQUFXO0FBQ3BCLFlBQVUsRUFBRSwySUFBMkk7Q0FDeEosQ0FBQTs7QUFFRCxJQUFJLFFBQVEsR0FBRyxDQUNiO0FBQ0UsTUFBSSxFQUFFLFVBQVU7QUFDaEIsU0FBTyxFQUFFLGlCQUFpQjtBQUMxQixZQUFVLEVBQUUsMklBQTJJO0NBQ3hKLEVBQUM7QUFDQSxNQUFJLEVBQUUsVUFBVTtBQUNoQixTQUFPLEVBQUUsUUFBUTtBQUNqQixZQUFVLEVBQUUsMklBQTJJO0NBQ3hKLEVBQUM7QUFDQSxNQUFJLEVBQUUsVUFBVTtBQUNoQixTQUFPLEVBQUUsV0FBVztBQUNwQixZQUFVLEVBQUUsMklBQTJJO0NBQ3hKLEVBQUM7QUFDQSxNQUFJLEVBQUUsVUFBVTtBQUNoQixTQUFPLEVBQUUsb0JBQW9CO0FBQzdCLFlBQVUsRUFBRSwySUFBMkk7Q0FDeEosQ0FDRixDQUFBOztJQUVvQixRQUFRO1lBQVIsUUFBUTs7QUFDM0IsV0FEbUIsUUFBUSxDQUNmLEtBQUssRUFBRTswQkFEQSxRQUFROzt1RUFBUixRQUFRLGFBRW5CLEtBQUs7O0FBQ1gsVUFBSyxLQUFLLEdBQUc7QUFDWCxtQkFBYSxFQUFFLE9BQU87QUFDdEIsY0FBUSxFQUFFLEtBQUs7S0FDaEIsQ0FBQTs7R0FDRjs7ZUFQa0IsUUFBUTs7a0NBU2IsRUFBRSxFQUFFOztBQUVoQixVQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDekIsY0FBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBSztBQUM1QixZQUFJLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO0FBQUUseUJBQWUsR0FBRyxPQUFPLENBQUM7U0FBRTtPQUN0RCxDQUFDLENBQUM7O0FBRUgsVUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLHFCQUFhLEVBQUUsZUFBZTtBQUM5QixnQkFBUSxFQUFFLElBQUk7T0FDZixDQUFDLENBQUM7S0FDSjs7OzZCQUVRO0FBQ1AsYUFDRTs7O1FBQ0U7O1lBQVMsU0FBUyxFQUFDLFdBQVc7VUFDNUIsd0RBQWE7VUFDYjtBQUNFLGtCQUFNLEVBQUUsSUFBSSxBQUFDO0FBQ2IsMkJBQWUsRUFBQyxPQUFPO0FBQ3ZCLG9CQUFRLEVBQUUsNERBQWtCLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQUFBQyxHQUFFLEFBQUM7QUFDakUsa0JBQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQUFBQyxHQUFFO1VBQ2hDOztjQUFLLFNBQVMsRUFBQyxtQkFBbUI7WUFDaEMsbURBQVE7WUFDUjs7OzthQUF5QztZQUN6Qzs7Z0JBQUcsU0FBUyxFQUFDLE1BQU07O2FBRWY7WUFDSjs7Z0JBQUssU0FBUyxFQUFDLGtCQUFrQjtjQUMvQjs7a0JBQUssU0FBUyxFQUFDLFFBQVE7Z0JBQ3JCO0FBQ0UsaUNBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQztBQUMvQyx5QkFBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQUFBQyxHQUFHO2dCQUMxQiwrREFBcUIsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxBQUFDLEVBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQUFBQyxHQUFHO2VBQ3pGO2NBQ047O2tCQUFLLFNBQVMsRUFBQyxRQUFRO2dCQUNyQiwrREFBcUIsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxBQUFDLEVBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQUFBQyxHQUFHO2VBQ3pGO2NBQ047O2tCQUFLLFNBQVMsRUFBQyxRQUFRO2dCQUNyQiwrREFBcUIsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxBQUFDLEVBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQUFBQyxHQUFHO2VBQ3pGO2FBQ0Y7V0FDRjtTQUNFO1FBQ1YscURBQVU7T0FDTixDQUNQO0tBQ0Y7OztTQXpEa0IsUUFBUTtHQUFTLGdCQUFNLFNBQVM7O2tCQUFoQyxRQUFRO0FBMEQ1QixDQUFDOztBQUVGLGNBL0ZTLE1BQU0sRUErRlIsOEJBQUMsUUFBUSxPQUFHLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcblxuaW1wb3J0IE9uZVByb2plY3RUaHVtYm5haWwgZnJvbSAnLi9vbmVwcm9qZWN0dGh1bWJuYWlsJztcbmltcG9ydCBPbmVQcm9qZWN0RGV0YWlsIGZyb20gJy4vb25lcHJvamVjdGRldGFpbCc7XG5pbXBvcnQgU2lkZVBhbmVsIGZyb20gJy4vc2lkZXBhbmVsL3NpZGVwYW5lbCc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcblxubGV0IHByb2plY3QgPSB7XG4gICdpZCc6ICdwcm9qZWN0MCcsXG4gICd0aXRsZSc6ICdUcmFpbmZ1Y2snLFxuICAnYWJzdHJhY3QnOiAnVHJhaW5mdWNrOiBBbiBlbmNvZGluZyBvciBpbXBsZW1lbnRhdGlvbiBvZiBCcmFpbmZ1Y2sgaW4gdGhlIHBoeXNpY2FsIHdvcmxkLCB1c2luZyB0aGUgTVRBIHN1YndheSBzeXN0ZW0uIChZZWFoLCBpdFxcJ3MgdG90YWxseSBvdXQgdGhlcmUpJ1xufVxuXG5sZXQgcHJvamVjdHMgPSBbXG4gIHtcbiAgICAnaWQnOiAncHJvamVjdDAnLFxuICAgICd0aXRsZSc6ICdWaXN1YWwgd2hhdHNhcHAnLFxuICAgICdhYnN0cmFjdCc6ICdUcmFpbmZ1Y2s6IEFuIGVuY29kaW5nIG9yIGltcGxlbWVudGF0aW9uIG9mIEJyYWluZnVjayBpbiB0aGUgcGh5c2ljYWwgd29ybGQsIHVzaW5nIHRoZSBNVEEgc3Vid2F5IHN5c3RlbS4gKFllYWgsIGl0XFwncyB0b3RhbGx5IG91dCB0aGVyZSknXG4gIH0se1xuICAgICdpZCc6ICdwcm9qZWN0MScsXG4gICAgJ3RpdGxlJzogJ1Vuc2VuZCcsXG4gICAgJ2Fic3RyYWN0JzogJ1RyYWluZnVjazogQW4gZW5jb2Rpbmcgb3IgaW1wbGVtZW50YXRpb24gb2YgQnJhaW5mdWNrIGluIHRoZSBwaHlzaWNhbCB3b3JsZCwgdXNpbmcgdGhlIE1UQSBzdWJ3YXkgc3lzdGVtLiAoWWVhaCwgaXRcXCdzIHRvdGFsbHkgb3V0IHRoZXJlKSdcbiAgfSx7XG4gICAgJ2lkJzogJ3Byb2plY3QyJyxcbiAgICAndGl0bGUnOiAnVHJhaW5mdWNrJyxcbiAgICAnYWJzdHJhY3QnOiAnVHJhaW5mdWNrOiBBbiBlbmNvZGluZyBvciBpbXBsZW1lbnRhdGlvbiBvZiBCcmFpbmZ1Y2sgaW4gdGhlIHBoeXNpY2FsIHdvcmxkLCB1c2luZyB0aGUgTVRBIHN1YndheSBzeXN0ZW0uIChZZWFoLCBpdFxcJ3MgdG90YWxseSBvdXQgdGhlcmUpJ1xuICB9LHtcbiAgICAnaWQnOiAncHJvamVjdDMnLFxuICAgICd0aXRsZSc6ICdDcmFpZ3NsaXN0IGZsYW5ldXInLFxuICAgICdhYnN0cmFjdCc6ICdUcmFpbmZ1Y2s6IEFuIGVuY29kaW5nIG9yIGltcGxlbWVudGF0aW9uIG9mIEJyYWluZnVjayBpbiB0aGUgcGh5c2ljYWwgd29ybGQsIHVzaW5nIHRoZSBNVEEgc3Vid2F5IHN5c3RlbS4gKFllYWgsIGl0XFwncyB0b3RhbGx5IG91dCB0aGVyZSknXG4gIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSm9rZXNhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlUHJvamVjdDogcHJvamVjdCxcbiAgICAgIG9wZW5NZW51OiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHNlbGVjdFByb2plY3QoaWQpIHtcbiAgICAvLyBTZWxlY3QgcHJvamVjdCBmcm9tIGlkXG4gICAgbGV0IHNlbGVjdGVkUHJvamVjdCA9IHt9O1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0LmlkID09PSBpZCkgeyBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0OyB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVByb2plY3Q6IHNlbGVjdGVkUHJvamVjdCxcbiAgICAgIG9wZW5NZW51OiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nam9rZXMtYXJ0Jz5cbiAgICAgICAgICA8U2lkZVBhbmVsIC8+XG4gICAgICAgICAgPFNpZGVQYW5lbFxuICAgICAgICAgICAgaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgYWRkaXRpb25hbENsYXNzPSdyaWdodCdcbiAgICAgICAgICAgIGNvbnRlbnRzPXs8T25lUHJvamVjdERldGFpbCBwcm9qZWN0PXt0aGlzLnN0YXRlLmFjdGl2ZVByb2plY3R9Lz59XG4gICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUub3Blbk1lbnV9Lz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nam9rZXMtYXJ0LXdyYXBwZXInPlxuICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgIDxoMj5EaWdpdGFsIEFydCAvIEpva2VzIC8gT3RoZXIgd29yazwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2NvcHknPlxuICAgICAgICAgICAgICBJbiBwYXJhbGxlbCwgSSBleHBsb3JlIGRpZ2l0YWwgY29udGV4dHMgYXJ0aXN0aWNhbGx5LiBJIGxpa2UgdG8gcmVzaGFwZSBvdXIgb25saW5lIGlkZW50aXRpZXMsIGV4cGxvcmUgaG93IHdlIGNvbW11bmljYXRlIHRvIGVhY2ggb3RoZXIsIGFuZCB3aGF0IG90aGVyIGZvcm1zIHRoZXNlIGNvbW11bmljYXRpb25zIGNhbiB0YWtlLiBJ4oCZbSBpbnRlcmVzdGVkIGluIG9ubGluZSBjb21tdW5pdGllcyBhbmQgd2hhdCBtYWtlcyB0aGVtIGVtZXJnZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0cy13cmFwcGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbic+XG4gICAgICAgICAgICAgICAgPE9uZVByb2plY3RUaHVtYm5haWxcbiAgICAgICAgICAgICAgICAgIG9uU2VsZWN0UHJvamVjdD17dGhpcy5zZWxlY3RQcm9qZWN0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICBwcm9qZWN0PXtwcm9qZWN0c1swXX0gLz5cbiAgICAgICAgICAgICAgICA8T25lUHJvamVjdFRodW1ibmFpbCBvblNlbGVjdFByb2plY3Q9e3RoaXMuc2VsZWN0UHJvamVjdC5iaW5kKHRoaXMpfSBwcm9qZWN0PXtwcm9qZWN0c1sxXX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4nPlxuICAgICAgICAgICAgICAgIDxPbmVQcm9qZWN0VGh1bWJuYWlsIG9uU2VsZWN0UHJvamVjdD17dGhpcy5zZWxlY3RQcm9qZWN0LmJpbmQodGhpcyl9IHByb2plY3Q9e3Byb2plY3RzWzJdfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbic+XG4gICAgICAgICAgICAgICAgPE9uZVByb2plY3RUaHVtYm5haWwgb25TZWxlY3RQcm9qZWN0PXt0aGlzLnNlbGVjdFByb2plY3QuYmluZCh0aGlzKX0gcHJvamVjdD17cHJvamVjdHNbM119IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59O1xuXG5yZW5kZXIoPEpva2VzYXJ0IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIl19
