'use strict';

import React from 'react';
import { render } from 'react-dom';

import Router from 'react-router';
import { IndexRoute, Link, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Hello from './hello';
import SidePanel from './sidepanel/sidepanel';
import SideMenu from './sidepanel/sidemenu';
import Contact from './contact';
import Footer from './footer';

import About from './about';
import Work from './work';
import Jokesart from './jokesart';
import Journal from './journal';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Contact />
        <Footer />
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
};

render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="work" component={Work}/>
      <Route path="jokesart" component={Jokesart}/>
      <Route path="journal" component={Journal}/>
    </Route>
  </Router>
), document.getElementById('app'));
