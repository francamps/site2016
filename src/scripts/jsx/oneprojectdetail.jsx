'use strict';

import React from 'react';
import $ from 'jquery';

export default class OneProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {}
    }
  }

  componentDidMount() {
    if (this.props.projectId) {
      let path = (this.props.type === 'projects') ? './projects/' : './work/';
      let id = this.props.projectId;

      $.get(path + id + '/index.json', (data) => {
        this.setState({ project: data });
      });
    }
  }

  render() {
    let body = this.state.project.body || '';
    let title = this.state.project.title || 'Loading...';

    return (
      <div className="one-project-detail fadeIn animated">
        <h1 dangerouslySetInnerHTML={{ __html: title}}></h1>
        <p dangerouslySetInnerHTML={{__html: body}}></p>
      </div>
    )
  }
}
