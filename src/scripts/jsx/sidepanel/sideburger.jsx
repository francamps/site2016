'use strict';

import React from 'react';

export default class SidePanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classes = 'side-menu-burg';
    classes += (this.props.isOpen) ? ' is-active': '';
    classes += (this.props.hidden && !this.props.isOpen) ? ' hidden' : '';

    return (
      <button onClick={this.props.toggleMenu}
        className={classes}>
        <span></span>
      </button>
    );
  }
}
