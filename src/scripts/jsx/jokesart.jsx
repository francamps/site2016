'use strict';

import React from 'react';
import { render } from 'react-dom'

import OneProjectThumbnail from './oneprojectthumbnail';
import OneProjectDetail from './oneprojectdetail';
import SidePanel from './sidepanel/sidepanel';
import Logo from './logo';

import Footer from './footer';

let project = {
  'id': 'project0',
  'title': 'Trainfuck',
  'abstract': 'Trainfuck: An encoding or implementation of Brainfuck in the physical world, using the MTA subway system. (Yeah, it\'s totally out there)'
}

let projects = [
  {
    'id': 'project0',
    'title': 'Visual whatsapp',
    'abstract': 'Trainfuck: An encoding or implementation of Brainfuck in the physical world, using the MTA subway system. (Yeah, it\'s totally out there)'
  },{
    'id': 'project1',
    'title': 'Unsend',
    'abstract': 'Trainfuck: An encoding or implementation of Brainfuck in the physical world, using the MTA subway system. (Yeah, it\'s totally out there)'
  },{
    'id': 'project2',
    'title': 'Trainfuck',
    'abstract': 'Trainfuck: An encoding or implementation of Brainfuck in the physical world, using the MTA subway system. (Yeah, it\'s totally out there)'
  },{
    'id': 'project3',
    'title': 'Craigslist flaneur',
    'abstract': 'Trainfuck: An encoding or implementation of Brainfuck in the physical world, using the MTA subway system. (Yeah, it\'s totally out there)'
  }
]

export default class Jokesart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: project,
      openMenu: false
    }
  }

  selectProject(id) {
    // Select project from id
    let selectedProject = {};
    projects.forEach((project) => {
      if (project.id === id) { selectedProject = project; }
    });

    this.setState({
      activeProject: selectedProject,
      openMenu: true
    });
  }

  render() {
    return (
      <div>
        <section className='jokes-art'>
          <SidePanel />
          <SidePanel
            hidden={true}
            additionalClass='right'
            contents={<OneProjectDetail project={this.state.activeProject}/>}
            isOpen={this.state.openMenu}/>
          <div className='jokes-art-wrapper'>
            <Logo />
            <h2>Digital Art / Jokes / Other work</h2>
            <p className='copy'>
              In parallel, I explore digital contexts artistically. I like to reshape our online identities, explore how we communicate to each other, and what other forms these communications can take. I’m interested in online communities and what makes them emerge.
            </p>
            <div className='projects-wrapper'>
              <div className='column'>
                <OneProjectThumbnail
                  onSelectProject={this.selectProject.bind(this)}
                  project={projects[0]} />
                <OneProjectThumbnail onSelectProject={this.selectProject.bind(this)} project={projects[1]} />
              </div>
              <div className='column'>
                <OneProjectThumbnail onSelectProject={this.selectProject.bind(this)} project={projects[2]} />
              </div>
              <div className='column'>
                <OneProjectThumbnail onSelectProject={this.selectProject.bind(this)} project={projects[3]} />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
};

render(<Jokesart />, document.getElementById('app'));
