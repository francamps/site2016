'use strict';

import Message from './message';
import Hero from './hero';
import Navigation from './navigation';

export default class Hello extends React.Component {
  render() {
    return (
      <div className='top-hello'>
        <section className='hello'>
          <div className='hello-wrapper'>
            <div className='categories'>
              <span>UI/UX Design Engineering</span>
              <span>Visualization</span>
              <span>Information Experience</span>
            </div>
            <div className='this-is'><span>FRANC DOT LY</span></div>
            <div className='fadeInDown animated'>
              <Hero />
            </div>
            {/*<div className='hero'>
              <img src='./assets/herotemp.png' width='500px' />
            </div>*/}
            <Navigation />
          </div>
        </section>
      </div>
    )
  }
};
