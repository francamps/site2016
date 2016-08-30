'use strict';

import React from 'react';
import { Link } from 'react-router';

import Butterfly from '../butterfly/butterfly';

export default class SideMenu extends React.Component {

  render() {
    return (
      <div className="menu">
        <div className='options'>
          <div className='menu-option fadeInDown animated'>
            <Link to="about">
              <div className='option-wrapper'>
                <span>BIO</span>
                <Butterfly />
              </div>
            </Link>
          </div>
          <div className='menu-option fadeInDown animated'>
            <Link to="work">
              <div className='option-wrapper'>
                <span>WORK</span>
                <Butterfly />
              </div>
            </Link>
          </div>
          <div className='menu-option fadeInUp animated'>
            <Link to="jokesart">
              <div className='option-wrapper'>
                <span>OTHER WORK / JOKES / ART</span>
                <Butterfly />
              </div>
            </Link>
          </div>
          <div className='menu-option fadeInUp animated'>
            <a href="/writing">
              <div className='option-wrapper'>
                <span>JOURNAL</span>
                <Butterfly />
              </div>
            </a>
          </div>
        </div>
      </div>
      );
  }
}
