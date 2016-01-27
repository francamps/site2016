'use strict';

import Butterfly from './butterfly/butterfly';
import { IndexRoute, Link, Route } from 'react-router';

import $ from 'jquery';

export default class OneProjectThumbnail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      project: {}
    }
  }

  componentWillUnmount() {
    this.setState({ project: {} });
  }

  componentDidMount() {

    if (this.props.projectId) {
      let path = (this.props.type === 'projects') ? './projects/' : './work/';
      let id = this.props.projectId;
      $.getJSON(path + id + '/index.json', (data) => {
        this.setState({ project: data });
      });
    }
  }

  renderThumbnail() {
    let path = 'assets/content/';
    path += (this.props.type === 'projects') ? 'projects/' : 'work/';

    if (this.state.project.image) {
      return (
        <div className='thumbnail'>
          <img src={path + this.state.project.image} />
        </div>
      );
    }
    return <div className='thumbnail'></div>;
  }

  render() {
    let id = this.props.projectId || '';
    let title = this.state.project.title || '';
    let path = (this.props.type === 'projects') ? '/projects/' : '/work/';

    return (
      <div className="one-project-thumbnail-wrapper">
        {/*<Link to={path + id}>*/}
          <div className="one-project-thumbnail"
            onClick={this.props.onSelectProject.bind(null, id)}>
            <div className="title">{title}</div>
            <Butterfly />
            {this.renderThumbnail()}
          </div>
        {/*}</Link>*/}
      </div>
    );
  }
}
