'use strict';

import Logo from './logo';
import SocialIcon from './socialicon';

export default class Footer extends React.Component {

  render() {
    return (
      <div className='footer'>
        <Logo />
        <a className='footer-mail' href='mailto:hi@franc.ly'>hi@franc.ly</a>
        <div className='social-footer'>
          <SocialIcon type={'github'} />
          <SocialIcon type={'linkedin'} />
          <SocialIcon type={'twitter'} />
        </div>
      </div>
    );
  }
}
