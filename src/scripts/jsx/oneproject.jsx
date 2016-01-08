'use strict';

import React from 'react';
import marked from 'marked';

export default class OneProject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="one-project" onClick={this.props.onSelectProject.bind(null, this.props.index)}>
        <div className='thumbnail'>
          {/* Here goes an image */}
        </div>
        <div className='summary'>
          <h2 className='title'>{this.props.project.title || "Here's a very interesting project"}</h2>
          <div className='abstract'>
            <p>Huge School is an advanced apprenticeship for people interested in pursuing careers in User Experience, Interaction Design, Product Design & Visual Design. A small class of trainees selected from hundreds of international applicants will join Huge’s team in Brooklyn, New York where they will receive three months of hands-on training and learn the fundamentals of Huge’s design process.</p>
          </div>
        </div>
      </div>
    )
  }
};
