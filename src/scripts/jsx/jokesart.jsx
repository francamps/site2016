'use strict';

import React from 'react';
import { render } from 'react-dom'

import OneProjectThumbnail from './oneprojectthumbnail';
import SidePanel from './sidepanel/sidepanel';

let project = {
  'title': 'Trainfuck',
  'abstract': 'Trainfuck: An encoding or implementation of Brainfuck in the physical world, using the MTA subway system. (Yeah, it\'s totally out there)'
}

export default class Jokesart extends React.Component {
  render() {
    return (
      <section className='jokes-art'>
        <SidePanel />
        <div className='jokes-art-wrapper'>
          <h1>Jokes, art and unclassifiable stuff</h1>
          <div className='projects-wrapper'>
            <div className='column'>
              <OneProjectThumbnail project={project} />
              <OneProjectThumbnail project={project} />
              <OneProjectThumbnail project={project} />
            </div>
            <div className='column'>
              <OneProjectThumbnail project={project} />
              <OneProjectThumbnail project={project} />
              <OneProjectThumbnail project={project} />
            </div>
            <div className='column'>
              <OneProjectThumbnail project={project} />
              <OneProjectThumbnail project={project} />
              <OneProjectThumbnail project={project} />
            </div>
          </div>
        </div>
      </section>
    )
  }
};

render(<Jokesart />, document.getElementById('app'));
