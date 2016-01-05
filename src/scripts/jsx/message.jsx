'use strict';

var React = require('react');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

module.exports = React.createClass({
    displayName: 'Message',

    render: function () {
      return (
        <h1 className='hello-copy'>
          <p>
            I'm Franc. I am a <span className='highlight'> designer </span>
            and <span className='highlight'> engineer</span> working in
            the realm of <span className='highlight'>data and information experience </span>
            tools.</p>

          <p>
            I am based between <span className='highlight'>New York </span>
            and <span className='highlight'>Barcelona</span>.</p>
          <p>Say hi!</p>
        </h1>
      );
    }
});
