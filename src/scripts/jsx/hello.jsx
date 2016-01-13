'use strict';

import React from 'react';

let Logo = require('./logo.jsx');

let Message = require('./message.jsx');

import Hero from './hero';

export default class Hello extends React.Component {
  render() {
    return (
      <section className='hello'>
        <div className='hello-wrapper'>
          <Hero />
          <div className='fadeInDown animated'>
            <Message />
          </div>
        </div>
      </section>
    )
  }
};
