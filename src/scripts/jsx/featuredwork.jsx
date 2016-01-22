'use strict';

import $ from 'jquery';

import SidePanel from './sidepanel/sidepanel';
import OneProjectDetail from './oneprojectdetail';
import OneProjectThumbnail from './oneprojectthumbnail';

let projectsPath = './assets/content/projects.json';

let project = {
  id: 'project0',
  title: 'title',
  abstract: 'abstract'
}

export default class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inDetail: false,
      projects: [],
      activeProject: undefined
    }
  }

  onProjectToggle() {
    this.setState({ inDetail: !this.state.inDetail });
  }

  componentDidMount() {
    this.loadProjects();
  }

  loadProjects() {
    $.get(projectsPath, (json) => this.setState({ projects: json.projects }));
  }

  selectProject(i, args)  {
    console.log(i, args, this);
    this.setState({
      activeProject: i,
      inDetail: true
    });
  }

  renderProjects() {
    let projects = this.state.projects;
    /*
    <div className='projects'>
      {projects.map((project, i) => <OneProject
        onSelectProject={this.selectProject.bind(this)}
        project={project}
        index={i}
        key={'project-' + i}/>) }
    */
    return (
        <div className='projects-wrapper'>
          <div className='column'>
            <OneProjectThumbnail
              onSelectProject={this.selectProject.bind(this)}
              project={project} />
          </div>
          <div className='column'>
            <OneProjectThumbnail onSelectProject={this.selectProject.bind(this)} project={project} />
          </div>
          <div className='column'>
            <OneProjectThumbnail onSelectProject={this.selectProject.bind(this)} project={project} />
          </div>
        </div>
    );
  }

  renderProjectDetail() {
    if (this.state.inDetail) {
      let project = this.state.projects[this.state.activeProject];
      return <OneProjectDetail project={project} />
    }
  }

  render() {
    let classDetail = 'featured-work';
    classDetail += (this.state.inDetail) ? ' in-detail' : '';

      return (
        <section className={classDetail}>
          <div className='avatar'></div>
          <div className='content-detail' onClick={this.onProjectToggle.bind(this)}>
            {this.renderProjectDetail()}
          </div>
          <div className='content'>
            <div className='copy'>
              <h2>I am a UI/UX Data Visualization Engineer and Designer specialized in data and information experince and tools.</h2>
            </div>
            <p>
            I specialize in the design and development of data visualization applications, as well as general visual storytelling and communication. I get really excited with social innovation and creative technology. I have a crush for algorithms and their implementation in visual design.
            </p>
            <h2>Digital Art / Jokes / Other work</h2>
            {this.renderProjects()}
          </div>
        </section>
      );
  }
}

//render(<Work />, document.getElementById('work'));
