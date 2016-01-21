'use strict';

import React from 'react';
import { render } from 'react-dom'

import OneProjectThumbnail from './oneprojectthumbnail';
import OneProjectDetail from './oneprojectdetail';
import SidePanel from './sidepanel/sidepanel';
import Logo from './logo';
import Footer from './footer';

import $ from 'jquery';

let projects = [
  'differentiation',
  'crowdacademy',
  'goteo',
  'readiness',
  'forbesclustering',
  'studentproficiency'
];

export default class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: null,
      openMenu: false
    }
  }

  selectProject(id) {
    // Select project from id
    let selectedProject = {};
    projects.forEach((project) => {
      if (project === id) { selectedProject = project; }
    });

    this.setState({
      activeProject: selectedProject,
      openMenu: true
    });
  }

  render() {
    return (
      <div>
        <SidePanel
          hidden={true}
          additionalClass={'left'}
          contents={<OneProjectDetail
            projectId={this.state.activeProject}
            type={'work'}/>}
          isOpen={this.state.openMenu}/>
        <section className='work'>
            <Logo />
            <h2 className='fadeInUp animated'>Work</h2>
            <p className="copy">
              I specialize in the design and development of data visualization applications, as well as general visual storytelling and communication. I get really excited with social innovation and creative technology. I have a crush for algorithms and their implementation in visual design.
            </p>
            <div className='projects-wrapper'>
              {projects.map((project) => {
                return (
                  <OneProjectThumbnail
                    key={project}
                    type={'work'}
                    onSelectProject={this.selectProject.bind(this)}
                    projectId={project} />
                )
              })}
            </div>
        </section>
        <Footer />
      </div>
    )
  }
};
