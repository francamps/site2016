'use strict';

import React from 'react';

export default class OneProjectDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="one-project-detail">
        <h1>{this.props.project.title}</h1>
        <p>{this.props.project.abstract}</p>
      </div>
    )
  }
}
