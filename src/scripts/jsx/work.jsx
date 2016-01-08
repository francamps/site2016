'use strict';

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

import SidePanel from './sidepanel/sidepanel';
import OneProject from './oneproject';
import OneProjectDetail from './oneprojectdetail';

let projectsPath = './assets/content/projects.json';

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
    return (
      <div className='projects'>
        {projects.map((project, i) => <OneProject
          onSelectProject={this.selectProject.bind(this)}
          project={project}
          index={i}
          key={'project-' + i}/>) }
      </div>
    )
  }

  renderProjectDetail() {
    if (this.state.inDetail) {
      let project = this.state.projects[this.state.activeProject];
      console.log(project);
      return <OneProjectDetail project={project} />
    }
  }

  render() {
    let classDetail = 'work';
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
            {this.renderProjects()}
          </div>
        </section>
      );
  }
}

//render(<Work />, document.getElementById('work'));
