'use strict';

import React from 'react';
import SideMenu from './sidemenu';
import SideBurger from './sideburger';

export default class SidePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen || false,
      contents: props.contents || <SideMenu />
    }
  }

  openMenu() {
    this.setState({isOpen: true});
  }

  closeMenu() {
    this.setState({
      isOpen: false,
      contents: <SideMenu />
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isOpen: nextProps.isOpen });
  }

  render() {
    let classes = 'side-menu '
    classes += this.props.additionalClass || '';
    if (!this.state.isOpen) {
      return (
        <div className={classes}>
          <SideBurger
            hidden={this.props.hidden}
            toggleMenu={this.openMenu.bind(this)}
            isOpen={this.state.isOpen} />
        </div>
      );
    }
    return (
      <div className={classes + ' open'}>
        <SideBurger
          hidden={this.props.hidden}
          toggleMenu={this.closeMenu.bind(this)}
          isOpen={this.state.isOpen} />
        {this.props.contents || this.state.contents}
      </div>
    );
  }
}
