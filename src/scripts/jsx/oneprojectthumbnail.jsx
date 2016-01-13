'use strict';

import React from 'react';

export default class OneProjectThumbnail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="one-project-thumbnail-wrapper">
        <div className="one-project-thumbnail"
          onClick={this.props.onSelectProject.bind(null, this.props.project.id)}>
          <svg height="300" width="100%">
            <rect className="shape" height="300" width="100%" />
            <div className="title">{this.props.project.title}</div>
          </svg>
        </div>
      </div>
    )
  }
}
