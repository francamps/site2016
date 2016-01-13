'use strict';

import React from 'react';
import Logo from './logo';
import SocialIcon from './socialicon';

export default class Footer extends React.Component {

  render() {
    return (
      <div className='footer'>
        <Logo />
        <div className='social-footer'>
          <SocialIcon type={'github'} />
          <SocialIcon type={'linkedin'} />
          <SocialIcon type={'twitter'} />
        </div>
      </div>
    );
  }
}
