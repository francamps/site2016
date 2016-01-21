'use strict';

import React from 'react';
import { render } from 'react-dom';

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

export default class Work extends React.Component {
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
        <SidePanel />
        <SidePanel
          hidden={true}
          contents={<OneProjectDetail project={this.state.activeProject}/>}
          isOpen={this.state.openMenu}/>
        <section className='work'>
            <Logo />
            <h2 className='fadeInUp animated'>Work</h2>
            <p className="copy">
              I specialize in the design and development of data visualization applications, as well as general visual storytelling and communication. I get really excited with social innovation and creative technology. I have a crush for algorithms and their implementation in visual design.
            </p>
            <div className='projects-wrapper'>
              <h2>Journal entry</h2>
              <div className='entry-abstract'></div>
              <div className='see-more'>See more</div>
            </div>
        </section>
        <Footer />
      </div>
    )
  }
};

render(<Work />, document.getElementById('work'));
