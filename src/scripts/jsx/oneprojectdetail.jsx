'use strict';

import SidePanel from './sidepanel/sidepanel';
import Loading from './loading';
import $ from 'jquery';
import Arrow from './arrow';

export default class OneProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {}
    }
  }

  bindArrowKeys() {
    document.onkeydown = (e) => {
      e = e || window.event;
      if (e.keyCode == '37') {
        this.props.onPrevProject(this.props.projectId);
      } else if (e.keyCode == '39') {
         this.props.onNextProject(this.props.projectId);
      }
    }
  }

  loadJSON(path, id) {
    $.getJSON(path + id + '/index.json', (data) => {
      this.setState({ project: data });
    });
  }

  componentDidMount() {
    if (this.props.projectId) {
      let path = (this.props.type === 'projects') ? '/projects/' : '/work/';
      let id = this.props.projectId;

      window.setTimeout(this.loadJSON.bind(this, path, id), 500);
    }

    this.bindArrowKeys();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.projectId) {
      this.setState({ project: {} });

      let path = (nextProps.type === 'projects') ? '/projects/' : '/work/';
      let id = nextProps.projectId;

      window.setTimeout(this.loadJSON.bind(this, path, id), 500);
    }
  }

  renderDots() {
    let projects = this.props.projects || [];
    return (
      <div className='project-dots'>
        {projects.map((project, i) => {
          let classes = 'project-dot';
          classes += (this.props.projectNum === i) ? ' active' : '';
          return (
            <div className={classes}></div>
          );
        })}
      </div>
    );
  }

  render() {
    let body = this.state.project.body || '';
    let author = 'by: ' + (this.state.project.author || 'Franc');
    let year = this.state.project.date || 'Ongoing';
    author += ' - ' + year;
    let title = this.state.project.title || 'Loading...';
    let tags = this.state.project.tags || '';

    return (
      <SidePanel
        hidden={true}
        additionalClass={'left'}
        contents={
        <div id="OneProjectDetail" className="one-project-detail fadeIn animated">
          {this.renderDots()}
          <div className='header'>
            <h2 dangerouslySetInnerHTML={{ __html: title}}></h2>
            <h3 className='author' dangerouslySetInnerHTML={{ __html: author }}></h3>
            <p dangerouslySetInnerHTML={{__html: tags }}></p>
          </div>
          <Arrow
            direction='next'
            onNextProject={this.props.onNextProject.bind(null, this.props.projectId)}/>
            <Arrow
              direction='prev'
              onNextProject={this.props.onPrevProject.bind(null, this.props.projectId)}/>
          <p dangerouslySetInnerHTML={{__html: body}}></p>
          </div>
        }
        isOpen={this.props.openMenu}/>
    );
  }
}
