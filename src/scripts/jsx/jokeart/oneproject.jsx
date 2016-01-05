'use strict';

import React from 'react';
import marked from 'marked';

export default class OneProject extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="joke-art-project">
        This is a project taken from {this.props.filename}
      </div>
    )
  }
};
