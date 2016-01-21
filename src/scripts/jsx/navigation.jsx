'use strict';

import React from 'react';
import { Link } from 'react-router';

module.exports = React.createClass({
    displayName: 'Navigation',

    render: function () {
      return (
        <div className='navigation'>
          <Link to='about'>ABOUT</Link>
          <Link to='work'>WORK</Link>
          <Link to='jokesart'>JOKES / ART</Link>
        </div>
      );
    }
});
