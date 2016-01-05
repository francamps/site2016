'use strict';

import React from 'react';
import SocialIcon from './socialicon';

export default class Contact extends React.Component {
  render() {
    return (
      <div className='contact'>
        <div className='title'>CONTACT</div>
        <div className='content'>
          <div className='copy'>
            <h1>Say hi!</h1>
            <p>If you want to collaborate on crafting amazing experience for people – you are very welcome to contact me.</p>
            <h2>Franc Camps-Febrer</h2>
            <p>Data Visualization || UI/UX Engineering || Information Experience</p>
            <a href='mailto:hi@franc.ly'>hi@franc.ly</a>
            <SocialIcon />
          </div>
        </div>
      </div>
    )
  }
}
