'use strict';

import React from 'react';
import { render } from 'react-dom'

import Router from 'react-router';
import { IndexRoute, Link, Route } from 'react-router';

import Hello from './hello';
import FeaturedWork from './featuredwork';
import SidePanel from './sidepanel/sidepanel';
import SideMenu from './sidepanel/sidemenu';
import Contact from './contact/contact';
import Footer from './footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <SidePanel contents={<SideMenu />} />
        <Hello />
        <FeaturedWork />
        <Contact />
        <Footer />
      </div>
    );
  }
};

/*render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Hello}/>
      <Route path="work" component={Work}/>
      <Route path="jokeart" component={Jokeart}/>
    </Route>
  </Router>
), document.getElementById('app'));*/

render(<App />, document.getElementById('app'));
