'use strict';

import OneProjectThumbnail from './oneprojectthumbnail';
import OneProjectDetail from './oneprojectdetail';
import SidePanel from './sidepanel/sidepanel';
import SideMenu from './sidepanel/sidemenu';
import Logo from './logo';
import Footer from './footer';

import $ from 'jquery';

let projects = [
  'readiness',
  'goteo',
  'differentiation',
  'forbesclustering',
  'crowdacademy',
  'studentproficiency',
  'othervisualizations'
];

export default class Work extends React.Component {
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

    this.context.history.pushState(null, '/work/' + selectedProject);
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

    this.context.history.pushState(null, '/work/' + selectedProject);
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
        this.context.history.pushState(null, '/work');
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
          type={'work'}/>
        <section className='work'>
            <Logo />
            <h2 className='fadeInUp animated'>Work</h2>
            <div className="copy">
              <p>
                I specialize in the design and development of data-rich web applications, interactive visualization and tools for information insight.
              </p>
              <p>
                I am especially interested in projects involving social innovation, creative technology and technological initiatives that have a potential of having an impact.
              </p>
              <p>
                I have a crush for algorithms and their implementation in visual design.
              </p>
              <p>
                I like to explore situations of complexity and use visualizations to see order and patterns emerge.
              </p>
              <p>
                Here I mostly display my work as a data visualization engineer. Other more general engineering work is not publicly shareable. Contact me for further samples.
              </p>
            </div>
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

Work.contextTypes = {
  history: React.PropTypes.object
}
