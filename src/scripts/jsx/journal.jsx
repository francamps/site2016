'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

import SidePanel from './sidepanel/sidepanel';
import Footer from './footer';
import Logo from './logo';

export default class Journal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <SidePanel />
        <section className='work'>
            <Logo />
            <h2 className='fadeInUp animated'>Journal</h2>
            <p className="copy">
              Coming soon...
            </p>
        </section>
        <Footer />
      </div>
    )
  }
};
