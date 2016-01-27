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

    this.setState({
      activeProject: selectedProject,
      openMenu: true
    });
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

    this.setState({
      activeProject: selectedProject,
      openMenu: true
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.bindEscKey();
    this.getProjectParam();
  }

  getURLParameter(name) {
      let search = location.hash.split('?').slice();
      search = search.slice(1, search.length).join();
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec('?' + search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  getProjectParam() {
    let selectedProject,
        projectParam = this.getURLParameter('project');

    projects.forEach((project, i) => {
      if (project === projectParam) { selectedProject = projectParam; }
    });

    if (selectedProject) {
      this.setState({
        activeProject: selectedProject,
        openMenu: true
      });
    }
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
        this.setState({ openMenu: false });
      }
    });
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
        <SidePanel
          hidden={true}
          additionalClass={'left'}
          contents={<OneProjectDetail
            onNextProject={this.nextProject.bind(this)}
            onPrevProject={this.prevProject.bind(this)}
            projectId={this.state.activeProject}
            projectNum={this.whichProjectNum()}
            projects={projects}
            type={'projects'}/>}
          isOpen={this.state.openMenu}/>
        <section className='jokesart'>
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
