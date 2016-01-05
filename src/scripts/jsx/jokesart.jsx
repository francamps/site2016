'use strict';

import React from 'react';

import OneProject from './jokeart/oneproject';

export default class Jokesart extends React.Component {
  render() {
    return (
      <div className="joke-art">
        This is my artsy section, where I store projects that I don't know where to put or how to classify.
        <OneProject filename='trainfuck' />
      </div>
    )
  }
};

render(<Jokesart />, document.getElementById('app'));
