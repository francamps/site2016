'use strict';

import Logo from './logo';
import SocialIcon from './socialicon';
import { Link } from 'react-router';

export default class Footer extends React.Component {

  render() {
    return (
      <div className='footer'>
        <Logo />
        <div className='footer-nav'>
          <Link to='about'>ABOUT</Link>
          <Link to='work'>WORK</Link>
          <Link to='jokesart'>JOKES / ART</Link>
        </div>     
        <div className='social-footer'>
          <SocialIcon type={'github'} />
          <SocialIcon type={'linkedin'} />
          <SocialIcon type={'vimeo'} />
          <SocialIcon type={'twitter'} />
          <SocialIcon type={'instagram'} />
        </div>
      </div>
    );
  }
}
