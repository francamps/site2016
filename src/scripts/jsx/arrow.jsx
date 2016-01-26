'use strict';

import React from 'react';

export default class Next extends React.Component {

    render() {
      let classes = this.props.direction;
      classes += (this.props.isOpen) ? ' is-active': '';
      classes += (this.props.hidden && !this.props.isOpen) ? ' hidden' : '';

      return (
        <div className={classes}
          onClick={this.props.onNextProject.bind(null, this.props.projectId)}>
          <span></span>
        </div>
      );
    }
}
