'use strict';

import React from 'react';
import { render } from 'react-dom'

import OneProjectThumbnail from './oneprojectthumbnail';
import OneProjectDetail from './oneprojectdetail';
import SidePanel from './sidepanel/sidepanel';
import Logo from './logo';

import Footer from './footer';

let projects = [
  'trainfuck', 'whatsapp', 'unsend'
];

export default class Jokesart extends React.Component {
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
            type={'projects'}/>}
          isOpen={this.state.openMenu}/>
        <section className='work'>
            <Logo />
            <h2 className='fadeInUp animated'>Digital Art / Jokes / Other work</h2>
            <p className='copy'>
              In parallel, I explore digital contexts artistically. I like to reshape our online identities, explore how we communicate to each other, and what other forms these communications can take. I’m interested in online communities and what makes them emerge.
            </p>
            <div className='projects-wrapper'>
              {projects.map((project) => {
                return (
                  <OneProjectThumbnail
                    key={project}
                    type={'projects'}
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

render(<Jokesart />, document.getElementById('app'));
