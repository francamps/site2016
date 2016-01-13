'use strict';

import React from 'react';

import Sparkline from '../sparkline';

export default class SideMenu extends React.Component {

  render() {
    return (
      <div className="menu">
        <div className='options'>
          <div className='menu-option fadeInDown animated'>
            <div className='option-wrapper'>
              <a href="about.html">ABOUT</a>
              <Sparkline sparklineNum={0}/>
            </div>
          </div>
          <div className='menu-option fadeInDown animated'>
            <div className='option-wrapper'>
              <a href="work.html">WORK</a>
              <Sparkline sparklineNum={1}/>
            </div>
          </div>
          <div className='menu-option fadeInUp animated'>
            <div className='option-wrapper'>
              <a href="jokesart.html">OTHER WORK / JOKES / ART</a>
              <Sparkline sparklineNum={2}/>
            </div>
          </div>
          <div className='menu-option fadeInUp animated'>
            <div className='option-wrapper'>
              <a href="journal.html">JOURNAL</a>
              <Sparkline sparklineNum={3}/>
            </div>
          </div>
        </div>
      </div>
      );
  }
}
