'use strict';

import OneProjectThumbnail from './oneprojectthumbnail';
import OneProjectDetail from './oneprojectdetail';
import SidePanel from './sidepanel/sidepanel';
import SideMenu from './sidepanel/sidemenu';
import Logo from './logo';
import Footer from './footer';
import $ from 'jquery';

let projects = [
  'trainfuck',
  'whatsapp',
  'unsend',
  'craigslist',
  'binarycard'
];

export default class Jokesart extends React.Component {
  constructor(props) {
    super(props);
    let id = props.params.id;
    this.state = {
      activeProject: id || null,
      openMenu: (props.params.hasOwnProperty('id'))
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

  nextProject(id) {
    // Select next project after id
    let selectedProject = {};

    if (id === projects[projects.length - 1]) {
      selectedProject = projects[0];
    } else {
      projects.forEach((project, i) => {
        if (project === id) { selectedProject = projects[i + 1]; }
      });
    }

    this.context.history.pushState(null, '/projects/' + selectedProject);
  }

  prevProject(id) {
    // Select next project after id
    let selectedProject = {};

    if (id === projects[0]) {
      selectedProject = projects[projects.length - 1];
    } else {
      projects.forEach((project, i) => {
        if (project === id) { selectedProject = projects[i - 1]; }
      });
    }

    this.context.history.pushState(null, '/projects/' + selectedProject);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.bindEscKey();
  }

  whichProjectNum() {
    let j = 0;
    projects.forEach((project, i) => {
      if (project === this.state.activeProject) { j = i; }
    });
    return j;
  }

  bindEscKey() {
    window.addEventListener('keyup', (e) => {
      if (e.keyCode == 27) {
        this.context.history.pushState(null, '/jokesart');
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id) {
        this.setState({
          activeProject: nextProps.params.id,
          openMenu: true
      });
    } else {
      this.setState({ openMenu: false });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.openMenu === false) {
      $('body').removeClass('noscroll');
    }
  }

  render() {
    return (
      <div>
        <SidePanel contents={<SideMenu />} />
        <OneProjectDetail
          onNextProject={this.nextProject.bind(this)}
          onPrevProject={this.prevProject.bind(this)}
          projectId={this.state.activeProject}
          projectNum={this.whichProjectNum()}
          projects={projects}
          openMenu={this.state.openMenu}
          type={'projects'}/>
        <section className='jokesart'>
            <Logo />
            <h2 className='fadeInUp animated'>Digital Art / Jokes / Other work</h2>
            <p className='copy'>
              In parallel, I do work that focuses on the individual, the lyrics of the intimate in a personal world determined by enormous amounts of data, almost incomprehensible by an individual point of view. I explore the dimensions of the human experience abstracted by data and attempt to reconstruct what makes us human out of the traces we leave. I produce conceptual pieces out of data to describe and understand a reality defined by the increasing overlap between online and offline experiences, using my own self as a subject.
            </p>
            <p>
              With this work, I attempt to challenge and question the representations of ourselves that are given to us. Taking data, online traces and behaviors as prime matter and repurposing, reshaping and redefining them I attempt to regain aspects of the richness of the human. I capture details and nuances of the traces we leave online and explore what they say about what it means to be human, and what they reveal about our relationships today.
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

Jokesart.contextTypes = {
  history: React.PropTypes.object
}
