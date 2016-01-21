'use strict';

import React from 'react';
import SocialIcon from '../socialicon';

export default class Contact extends React.Component {
  render() {
    return (
      <div className='contact'>
        <div className='content'>
          <div className='copy'>
            <div className='avatar'></div>
            <p>
              I'm <span className='highlight'>Franc Camps-Febrer</span>. I am a <span className='highlight'> designer </span>
              and <span className='highlight'> engineer</span> working in
              the realm of <span className='highlight'>data and information experience </span>
              tools.


            </p>

            <p>
              I am based between <span className='highlight'>New York </span>
              and <span className='highlight'>Barcelona</span>.
            </p>

            <p>If you want to collaborate, chat or have an idea, say hi!</p>
            <p><a href='mailto:hi@franc.ly'>hi AD franc DOT ly</a></p>
            <div className='social-footer'>
              <SocialIcon type={'github'} />
              <SocialIcon type={'linkedin'} />
              <SocialIcon type={'vimeo'} />
              <SocialIcon type={'twitter'} />
              <SocialIcon type={'instagram'} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
