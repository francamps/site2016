require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({230:[function(require,module,exports){
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

var Work = (function (_React$Component) {
  _inherits(Work, _React$Component);

  function Work(props) {
    _classCallCheck(this, Work);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Work).call(this, props));

    _this.state = {
      activeProject: project,
      openMenu: false
    };
    return _this;
  }

  _createClass(Work, [{
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
          { className: 'work' },
          _react2.default.createElement(_sidepanel2.default, null),
          _react2.default.createElement(_sidepanel2.default, {
            hidden: true,
            contents: _react2.default.createElement(_oneprojectdetail2.default, { project: this.state.activeProject }),
            isOpen: this.state.openMenu }),
          _react2.default.createElement(
            'div',
            { className: 'jokes-art-wrapper' },
            _react2.default.createElement(_logo2.default, null),
            _react2.default.createElement(
              'h2',
              { className: 'fadeInUp animated' },
              'Work'
            ),
            _react2.default.createElement(
              'p',
              { className: 'copy' },
              'I specialize in the design and development of data visualization applications, as well as general visual storytelling and communication. I get really excited with social innovation and creative technology. I have a crush for algorithms and their implementation in visual design.'
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

  return Work;
})(_react2.default.Component);

exports.default = Work;
;

(0, _reactDom.render)(_react2.default.createElement(Work, null), document.getElementById('work'));

},{"./footer":216,"./logo":220,"./oneprojectdetail":223,"./oneprojectthumbnail":224,"./sidepanel/sidepanel":227,"react":211,"react-dom":29}]},{},[230])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mYWN0b3ItYnVuZGxlL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9qc3gvd29yay5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdiLElBQUksT0FBTyxHQUFHO0FBQ1osTUFBSSxFQUFFLFVBQVU7QUFDaEIsU0FBTyxFQUFFLFdBQVc7QUFDcEIsWUFBVSxFQUFFLDJJQUEySTtDQUN4SixDQUFBOztBQUVELElBQUksUUFBUSxHQUFHLENBQ2I7QUFDRSxNQUFJLEVBQUUsVUFBVTtBQUNoQixTQUFPLEVBQUUsaUJBQWlCO0FBQzFCLFlBQVUsRUFBRSwySUFBMkk7Q0FDeEosRUFBQztBQUNBLE1BQUksRUFBRSxVQUFVO0FBQ2hCLFNBQU8sRUFBRSxRQUFRO0FBQ2pCLFlBQVUsRUFBRSwySUFBMkk7Q0FDeEosRUFBQztBQUNBLE1BQUksRUFBRSxVQUFVO0FBQ2hCLFNBQU8sRUFBRSxXQUFXO0FBQ3BCLFlBQVUsRUFBRSwySUFBMkk7Q0FDeEosRUFBQztBQUNBLE1BQUksRUFBRSxVQUFVO0FBQ2hCLFNBQU8sRUFBRSxvQkFBb0I7QUFDN0IsWUFBVSxFQUFFLDJJQUEySTtDQUN4SixDQUNGLENBQUE7O0lBRW9CLElBQUk7WUFBSixJQUFJOztBQUN2QixXQURtQixJQUFJLENBQ1gsS0FBSyxFQUFFOzBCQURBLElBQUk7O3VFQUFKLElBQUksYUFFZixLQUFLOztBQUNYLFVBQUssS0FBSyxHQUFHO0FBQ1gsbUJBQWEsRUFBRSxPQUFPO0FBQ3RCLGNBQVEsRUFBRSxLQUFLO0tBQ2hCLENBQUE7O0dBQ0Y7O2VBUGtCLElBQUk7O2tDQVNULEVBQUUsRUFBRTs7QUFFaEIsVUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLGNBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUs7QUFDNUIsWUFBSSxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtBQUFFLHlCQUFlLEdBQUcsT0FBTyxDQUFDO1NBQUU7T0FDdEQsQ0FBQyxDQUFDOztBQUVILFVBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixxQkFBYSxFQUFFLGVBQWU7QUFDOUIsZ0JBQVEsRUFBRSxJQUFJO09BQ2YsQ0FBQyxDQUFDO0tBQ0o7Ozs2QkFFUTtBQUNQLGFBQ0U7OztRQUNFOztZQUFTLFNBQVMsRUFBQyxNQUFNO1VBQ3ZCLHdEQUFhO1VBQ2I7QUFDRSxrQkFBTSxFQUFFLElBQUksQUFBQztBQUNiLG9CQUFRLEVBQUUsNERBQWtCLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQUFBQyxHQUFFLEFBQUM7QUFDakUsa0JBQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQUFBQyxHQUFFO1VBQ2hDOztjQUFLLFNBQVMsRUFBQyxtQkFBbUI7WUFDaEMsbURBQVE7WUFDUjs7Z0JBQUksU0FBUyxFQUFDLG1CQUFtQjs7YUFBVTtZQUMzQzs7Z0JBQUcsU0FBUyxFQUFDLE1BQU07O2FBRWY7WUFDSjs7Z0JBQUssU0FBUyxFQUFDLGtCQUFrQjtjQUMvQjs7a0JBQUssU0FBUyxFQUFDLFFBQVE7Z0JBQ3JCO0FBQ0UsaUNBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQztBQUMvQyx5QkFBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQUFBQyxHQUFHO2dCQUMxQiwrREFBcUIsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxBQUFDLEVBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQUFBQyxHQUFHO2VBQ3pGO2NBQ047O2tCQUFLLFNBQVMsRUFBQyxRQUFRO2dCQUNyQiwrREFBcUIsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxBQUFDLEVBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQUFBQyxHQUFHO2VBQ3pGO2NBQ047O2tCQUFLLFNBQVMsRUFBQyxRQUFRO2dCQUNyQiwrREFBcUIsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxBQUFDLEVBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQUFBQyxHQUFHO2VBQ3pGO2FBQ0Y7V0FDRjtTQUNFO1FBQ1YscURBQVU7T0FDTixDQUNQO0tBQ0Y7OztTQXhEa0IsSUFBSTtHQUFTLGdCQUFNLFNBQVM7O2tCQUE1QixJQUFJO0FBeUR4QixDQUFDOztBQUVGLGNBN0ZTLE1BQU0sRUE2RlIsOEJBQUMsSUFBSSxPQUFHLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcblxuaW1wb3J0IE9uZVByb2plY3RUaHVtYm5haWwgZnJvbSAnLi9vbmVwcm9qZWN0dGh1bWJuYWlsJztcbmltcG9ydCBPbmVQcm9qZWN0RGV0YWlsIGZyb20gJy4vb25lcHJvamVjdGRldGFpbCc7XG5pbXBvcnQgU2lkZVBhbmVsIGZyb20gJy4vc2lkZXBhbmVsL3NpZGVwYW5lbCc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XG5cbmxldCBwcm9qZWN0ID0ge1xuICAnaWQnOiAncHJvamVjdDAnLFxuICAndGl0bGUnOiAnVHJhaW5mdWNrJyxcbiAgJ2Fic3RyYWN0JzogJ1RyYWluZnVjazogQW4gZW5jb2Rpbmcgb3IgaW1wbGVtZW50YXRpb24gb2YgQnJhaW5mdWNrIGluIHRoZSBwaHlzaWNhbCB3b3JsZCwgdXNpbmcgdGhlIE1UQSBzdWJ3YXkgc3lzdGVtLiAoWWVhaCwgaXRcXCdzIHRvdGFsbHkgb3V0IHRoZXJlKSdcbn1cblxubGV0IHByb2plY3RzID0gW1xuICB7XG4gICAgJ2lkJzogJ3Byb2plY3QwJyxcbiAgICAndGl0bGUnOiAnVmlzdWFsIHdoYXRzYXBwJyxcbiAgICAnYWJzdHJhY3QnOiAnVHJhaW5mdWNrOiBBbiBlbmNvZGluZyBvciBpbXBsZW1lbnRhdGlvbiBvZiBCcmFpbmZ1Y2sgaW4gdGhlIHBoeXNpY2FsIHdvcmxkLCB1c2luZyB0aGUgTVRBIHN1YndheSBzeXN0ZW0uIChZZWFoLCBpdFxcJ3MgdG90YWxseSBvdXQgdGhlcmUpJ1xuICB9LHtcbiAgICAnaWQnOiAncHJvamVjdDEnLFxuICAgICd0aXRsZSc6ICdVbnNlbmQnLFxuICAgICdhYnN0cmFjdCc6ICdUcmFpbmZ1Y2s6IEFuIGVuY29kaW5nIG9yIGltcGxlbWVudGF0aW9uIG9mIEJyYWluZnVjayBpbiB0aGUgcGh5c2ljYWwgd29ybGQsIHVzaW5nIHRoZSBNVEEgc3Vid2F5IHN5c3RlbS4gKFllYWgsIGl0XFwncyB0b3RhbGx5IG91dCB0aGVyZSknXG4gIH0se1xuICAgICdpZCc6ICdwcm9qZWN0MicsXG4gICAgJ3RpdGxlJzogJ1RyYWluZnVjaycsXG4gICAgJ2Fic3RyYWN0JzogJ1RyYWluZnVjazogQW4gZW5jb2Rpbmcgb3IgaW1wbGVtZW50YXRpb24gb2YgQnJhaW5mdWNrIGluIHRoZSBwaHlzaWNhbCB3b3JsZCwgdXNpbmcgdGhlIE1UQSBzdWJ3YXkgc3lzdGVtLiAoWWVhaCwgaXRcXCdzIHRvdGFsbHkgb3V0IHRoZXJlKSdcbiAgfSx7XG4gICAgJ2lkJzogJ3Byb2plY3QzJyxcbiAgICAndGl0bGUnOiAnQ3JhaWdzbGlzdCBmbGFuZXVyJyxcbiAgICAnYWJzdHJhY3QnOiAnVHJhaW5mdWNrOiBBbiBlbmNvZGluZyBvciBpbXBsZW1lbnRhdGlvbiBvZiBCcmFpbmZ1Y2sgaW4gdGhlIHBoeXNpY2FsIHdvcmxkLCB1c2luZyB0aGUgTVRBIHN1YndheSBzeXN0ZW0uIChZZWFoLCBpdFxcJ3MgdG90YWxseSBvdXQgdGhlcmUpJ1xuICB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlUHJvamVjdDogcHJvamVjdCxcbiAgICAgIG9wZW5NZW51OiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHNlbGVjdFByb2plY3QoaWQpIHtcbiAgICAvLyBTZWxlY3QgcHJvamVjdCBmcm9tIGlkXG4gICAgbGV0IHNlbGVjdGVkUHJvamVjdCA9IHt9O1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0LmlkID09PSBpZCkgeyBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0OyB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVByb2plY3Q6IHNlbGVjdGVkUHJvamVjdCxcbiAgICAgIG9wZW5NZW51OiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nd29yayc+XG4gICAgICAgICAgPFNpZGVQYW5lbCAvPlxuICAgICAgICAgIDxTaWRlUGFuZWxcbiAgICAgICAgICAgIGhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgIGNvbnRlbnRzPXs8T25lUHJvamVjdERldGFpbCBwcm9qZWN0PXt0aGlzLnN0YXRlLmFjdGl2ZVByb2plY3R9Lz59XG4gICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUub3Blbk1lbnV9Lz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nam9rZXMtYXJ0LXdyYXBwZXInPlxuICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2ZhZGVJblVwIGFuaW1hdGVkJz5Xb3JrPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvcHlcIj5cbiAgICAgICAgICAgICAgSSBzcGVjaWFsaXplIGluIHRoZSBkZXNpZ24gYW5kIGRldmVsb3BtZW50IG9mIGRhdGEgdmlzdWFsaXphdGlvbiBhcHBsaWNhdGlvbnMsIGFzIHdlbGwgYXMgZ2VuZXJhbCB2aXN1YWwgc3Rvcnl0ZWxsaW5nIGFuZCBjb21tdW5pY2F0aW9uLiBJIGdldCByZWFsbHkgZXhjaXRlZCB3aXRoIHNvY2lhbCBpbm5vdmF0aW9uIGFuZCBjcmVhdGl2ZSB0ZWNobm9sb2d5LiBJIGhhdmUgYSBjcnVzaCBmb3IgYWxnb3JpdGhtcyBhbmQgdGhlaXIgaW1wbGVtZW50YXRpb24gaW4gdmlzdWFsIGRlc2lnbi5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0cy13cmFwcGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbic+XG4gICAgICAgICAgICAgICAgPE9uZVByb2plY3RUaHVtYm5haWxcbiAgICAgICAgICAgICAgICAgIG9uU2VsZWN0UHJvamVjdD17dGhpcy5zZWxlY3RQcm9qZWN0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICBwcm9qZWN0PXtwcm9qZWN0c1swXX0gLz5cbiAgICAgICAgICAgICAgICA8T25lUHJvamVjdFRodW1ibmFpbCBvblNlbGVjdFByb2plY3Q9e3RoaXMuc2VsZWN0UHJvamVjdC5iaW5kKHRoaXMpfSBwcm9qZWN0PXtwcm9qZWN0c1sxXX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4nPlxuICAgICAgICAgICAgICAgIDxPbmVQcm9qZWN0VGh1bWJuYWlsIG9uU2VsZWN0UHJvamVjdD17dGhpcy5zZWxlY3RQcm9qZWN0LmJpbmQodGhpcyl9IHByb2plY3Q9e3Byb2plY3RzWzJdfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbic+XG4gICAgICAgICAgICAgICAgPE9uZVByb2plY3RUaHVtYm5haWwgb25TZWxlY3RQcm9qZWN0PXt0aGlzLnNlbGVjdFByb2plY3QuYmluZCh0aGlzKX0gcHJvamVjdD17cHJvamVjdHNbM119IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59O1xuXG5yZW5kZXIoPFdvcmsgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3JrJykpO1xuIl19
