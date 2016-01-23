'use strict';

import React from 'react';
import SocialIcon from '../socialicon';
import { Link } from 'react-router';

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
              the realm of <span className='highlight'>data </span>and
              <span className='highlight'> information tools </span>and
              <span className='highlight'> experiences</span>.
            </p>

            <p>
              <span className='highlight'>New York City </span>
              || <span className='highlight'>Barcelona</span>
            </p>

            <p>If you want to collaborate, chat or have an idea, say hi!</p>
            <p><a className='mailto' href='mailto:hi@franc.ly'>hi@franc.ly</a></p>

            <p>
              Go see some <Link to="work">work</Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
