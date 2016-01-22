'use strict';

import Loading from './loading';
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
    let author = 'by: ' + (this.state.project.author || 'Franc') + ' - 2015';
    let year = this.state.project.date || 'Ongoing';
    let title = this.state.project.title || 'Loading...';

    /*if (!this.state.project.body) {
      return (
          <div className="one-project-detail fadeIn animated">
            <Loading />
          </div>
      )
    }*/

    return (
      <div className="one-project-detail fadeIn animated">
        <div className='header'>
          <h1 dangerouslySetInnerHTML={{ __html: title}}></h1>
          <h3 className='author' dangerouslySetInnerHTML={{ __html: author }}></h3>
        </div>
        <p dangerouslySetInnerHTML={{__html: body}}></p>
      </div>
    )
  }
}
