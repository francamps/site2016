'use strict';

import React from 'react';

import SidePanel from './sidepanel/sidepanel';

export default class Work extends React.Component {
  render() {
      return (
        <section className='work'>
          <SidePanel />
          <div className='content-guide'>
            <div className='avatar'></div>
            <div className='title'>Some project</div>
          </div>
          <div className='content'>
            <div className='copy'>
              <h2>I am a UX Engineer specialized in data and information experince and tools.</h2>
                <p>Artworks and illustrations were my gateway to the creative industry which led to the foundation of my own studio and to first steps in the digital world.</p>
                <p>Starting with basic websites several years ago I found myself working as an Art Director for complex projects with a holistic approach soon. Visually appealing designs, subtle details and brand guidelines combined to innovative interfaces across various touch points became my daily companion.</p>
                <p>Out of this love for aesthetic design my passion for functionality and structure evolved. Jumping right into Photoshop didn’t feel accurate anymore and skipping the steps of building a framework based on functionality and usability became inevitable.</p>
                <h2>UX Design</h2>
                <p>A user-centered mindset and sensitivity for design turned out to be the perfect fit when collaborating with agencies, clients and brands to develop digital concepts and solve problems together.</p>
                <p>This rough framework outlines my process of developing digital experiences:</p>
                <p>1. RESEARCH and gather the present state</p>
                <p>2. STRUCTURE setup and content of the project</p>
                <p>3. CONCEPT AND STRATEGY</p>
                <p>4. CREATE, evaluate and iterate deliverables like</p>
            </div>
          </div>
        </section>
      );
  }
}

render(<Work />, document.getElementById('app'));
