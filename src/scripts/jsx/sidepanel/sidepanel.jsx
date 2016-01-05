'use strict';

import React from 'react';
import SideMenu from './sidemenu';

export default class SidePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggleMenu() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    if (!this.state.isOpen) {
      return (
        <div className='side-menu'>
          <button onClick={this.toggleMenu.bind(this)}
            className="side-menu-burg">
            <span></span>
          </button>
          {/*<span onClick={this.toggleMenu.bind(this)}>ICON</span>*/}
        </div>
      );
    }
    return (
      <div className='side-menu open'>
        <button onClick={this.toggleMenu.bind(this)}
          className="side-menu-burg is-active">
          <span></span>
        </button>
        <SideMenu />;
      </div>
    );
  }
}
