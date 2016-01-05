'use strict';

import React from 'react';

let Logo = require('./logo.jsx');
let Message = require('./message.jsx');

export default class Hello extends React.Component {
  render() {
    return (
      <section className='hello'>
        <Logo />
        <div className='fadeInDown animated'>
          <Message />
        </div>
      </section>
    )
  }
};
