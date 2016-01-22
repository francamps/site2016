'use strict';

import React from 'react';

export default class Loading extends React.Component {
  render() {
    return (
      <div className="preloader loading">
        <span className="slice"></span>
        <span className="slice"></span>
        <span className="slice"></span>
        <span className="slice"></span>
        <span className="slice"></span>
        <span className="slice"></span>
      </div>
    );
  }
}
