'use strict';

import React from 'react';

export default class SideMenu extends React.Component {

  render() {
    return (
      <div className='options'>
        <p className='fadeInDown animated'><a href="about.html">ABOUT</a></p>
        <p className='fadeInDown animated'><a href="work.html">WORK</a></p>
        <p className='fadeInDown animated'><a href="jokesart.html">OTHER WORK / JOKES / ART</a></p>
        <p className='fadeInUp animated'><a href="journal.html">JOURNAL</a></p>
      </div>);
  }
}
