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
            <div className='option-wrapper'>
              <Link to="about">BIO</Link>
              <Butterfly />
            </div>
          </div>
          <div className='menu-option fadeInDown animated'>
            <div className='option-wrapper'>
              <Link to="work">WORK</Link>
              <Butterfly />
            </div>
          </div>
          <div className='menu-option fadeInUp animated'>
            <div className='option-wrapper'>
              <Link to="jokesart">OTHER WORK / JOKES / ART</Link>
              <Butterfly />
            </div>
          </div>
          <div className='menu-option fadeInUp animated'>
            <div className='option-wrapper'>
              <Link to="journal">JOURNAL (coming soon)</Link>
              <Butterfly />
            </div>
          </div>
        </div>
      </div>
      );
  }
}
