'use strict'

import React from 'react';

let iconData = {
  github: 'https://github.com/francamps',
  vimeo: ''
}

export default class SocialIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickLink() {
    window.location.href=iconData.github;
  }

  render() {
    return (
      <div onClick={this.onClickLink.bind(this)}
        className="social-icon github"></div>
    )
  }
}
