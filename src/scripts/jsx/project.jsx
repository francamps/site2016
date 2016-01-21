'use strict';

import React from 'react';
import { render } from 'react-dom';

import Router from 'react-router';
import { IndexRoute, Link, Route } from 'react-router';

import $ from 'jquery';

export default class ProjectsApp extends React.Component {
  render() {
    return (
      <div>
      <h1>Projects</h1>
       <ul>
         <li><Link to="/projects">Projects</Link></li>
       </ul>
       {this.props.children}
      </div>
    )
  }
}

export default class ProjectsHome extends React.Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
       {this.props.childten}
      </div>
    )
  }
}

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Loading',
      abstract: 'stuff'
    }
  }

  componentDidMount() {
    if (this.props.params.id) {
      let id = this.props.params.id;
      let path = (this.props.type === 'projects') ? './projects/' : './work/';

      $.get(path + id + '/index.json', (data) => {
        this.setState({ body: data.body, title: data.title });
      });
    }
  }

  render() {
    let body = this.state.body || "Loading...";

    return (
      <div className="one-project">
        <div className='thumbnail'>
          {this.props.children}
        </div>
        <div className='summary'>
          <h2 className='title'>"Here's a very interesting project"</h2>
          <div className='abstract'>
            <div dangerouslySetInnerHTML={{__html: body}} />
          </div>
        </div>
      </div>
    )
  }
};
