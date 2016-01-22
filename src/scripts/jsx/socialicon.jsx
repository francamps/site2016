'use strict'

let iconData = {
  github: 'https://github.com/francamps',
  vimeo: '',
  twitter: 'https://www.twitter.com/francamps',
  linkedin: ''
}

export default class SocialIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickLink() {
    window.location.href=iconData.github;
  }

  render() {
    let social = this.props.type;
    if (social === 'github') {
      return (
        <div onClick={this.onClickLink.bind(this)} className="social-icon github">
          <svg x="1px" y="1px" width="63px" height="62px" viewBox="89 89 63 62" enable-background="new 89 89 63 62">
          <path d="M120.141,89.91c-16.552,0-29.97,13.418-29.97,29.97s13.418,29.97,29.97,29.97
          	c16.552,0,29.97-13.418,29.97-29.97S136.692,89.91,120.141,89.91z M133.909,116.479c-0.066,0-0.134,0-0.2,0c0,0.467,0,0.934,0,1.4
          	c-0.067,0-0.134,0-0.2,0c0,0.267,0,0.533,0,0.8c-0.066,0-0.133,0-0.199,0c0,0.2,0,0.4,0,0.6c-0.067,0-0.134,0-0.201,0
          	c0,0.2,0,0.4,0,0.6c-0.066,0-0.133,0-0.199,0c0,0.133,0,0.267,0,0.4c-0.066,0-0.133,0-0.2,0c-0.134,0.4-0.267,0.799-0.4,1.2
          	c-0.2,0.133-0.399,0.268-0.6,0.4c-0.2,0.267-0.4,0.533-0.601,0.8c-1.557,1.106-4.271,2.328-6.801,2.4
          	c0.125,0.45,0.169,0.495,0.4,0.8c0.066,0,0.133,0,0.2,0c0.278,0.439,0.206,1.059,0.399,1.601c0.067,0,0.135,0,0.201,0
          	c0,2.6,0,5.2,0,7.8c0.066,0,0.133,0,0.199,0c0.283,0.593,0.506,0.641,0.6,1.4c-0.399,0.067-0.799,0.134-1.199,0.2
          	c0,0.067,0,0.134,0,0.2c-0.733,0-1.467,0-2.2,0c0,0.066,0,0.134,0,0.2c-1.067,0-2.134,0-3.2,0c0-0.066,0-0.134,0-0.2
          	c-0.934,0-1.867,0-2.801,0c0-0.066,0-0.133,0-0.2c-1.108-0.31-2.128,0.153-2.8-0.6c-0.067,0-0.133,0-0.2,0
          	c-0.106-0.204,0.95-0.898,1-1c0-1.4,0-2.8,0-4.2c-0.8,0.066-1.6,0.133-2.4,0.199c0-0.066,0-0.133,0-0.199
          	c-0.867-0.066-1.733-0.133-2.6-0.2c-0.733-0.667-1.467-1.334-2.2-2c-0.067-0.334-0.133-0.667-0.2-1.001
          	c-0.655-1.255-1.703-2.588-3-3.199c0-0.134,0-0.268,0-0.4c0.759-0.061,1.186-0.294,2,0c0,0.066,0,0.133,0,0.199c0.2,0,0.4,0,0.6,0
          	c0.066,0.134,0.133,0.268,0.2,0.4c0.133,0,0.267,0,0.4,0l0.4,0.4c0,0.133,0,0.267,0,0.4c0.2,0.133,0.4,0.266,0.6,0.4
          	c0,0.133,0,0.266,0,0.4c0.333,0.266,0.667,0.533,1,0.799c0.2,0.268,0.4,0.534,0.6,0.801c0.133,0,0.267,0,0.4,0
          	c0,0.066,0,0.133,0,0.199c0.24,0.128,1.784,0.51,2.2,0.4c0.273-0.071-0.079-0.152,0.2-0.199c0.4,0,0.8,0,1.2,0
          	c0-0.067,0-0.134,0-0.201c0.267-0.066,0.533-0.133,0.8-0.199c0.073-0.699,0.284-1.713,0.601-2.2c0.066,0,0.133,0,0.2,0
          	c0.23-0.303,0.284-0.349,0.4-0.8c-1.808-0.061-4.42-0.856-5.601-1.601c-0.066-0.134-0.133-0.267-0.2-0.4
          	c-0.267-0.066-0.533-0.134-0.8-0.2c-0.267-0.333-0.533-0.666-0.8-1c-0.2-0.133-0.4-0.267-0.6-0.4c0-0.133,0-0.266,0-0.399l-0.4-0.4
          	c0-0.134,0-0.267,0-0.4c-0.067,0-0.133,0-0.2,0c0-0.133,0-0.267,0-0.4c-0.066,0-0.133,0-0.2,0c0-0.133,0-0.267,0-0.4
          	c-0.067,0-0.133,0-0.2,0c0-0.267,0-0.533,0-0.8c-0.067,0-0.133,0-0.2,0c0-0.267,0-0.534,0-0.8c-0.067,0-0.133,0-0.2,0
          	c0-0.4,0-0.8,0-1.2c-0.169-0.538-0.472-3.191-0.2-4c0.067,0,0.133,0,0.2,0c0.067-0.4,0.133-0.8,0.2-1.2c0.066,0,0.133,0,0.2,0
          	c0.133-0.4,0.267-0.8,0.4-1.2c0.067,0,0.133,0,0.2,0c0-0.134,0-0.267,0-0.4c0.133-0.066,0.267-0.133,0.4-0.2c0-0.133,0-0.267,0-0.4
          	c0.2-0.133,0.4-0.267,0.6-0.4c-0.159-0.803-0.809-2.921-0.4-4.2c0.067,0,0.133,0,0.2,0c0.067-0.467,0.134-0.934,0.2-1.4
          	c0.067,0,0.133,0,0.2,0c0-0.067,0-0.134,0-0.2c2.227,0.041,3.059,0.754,4.4,1.6c0.267,0.066,0.534,0.133,0.8,0.2
          	c0.067,0.133,0.133,0.267,0.2,0.4c1.467-0.2,2.934-0.4,4.4-0.6c1.333,0,2.667,0,4,0c0.414,0.118,2.491,0.774,3,0.6
          	c0-0.067,0-0.133,0-0.2c0.268-0.067,0.534-0.133,0.801-0.2c0.066-0.134,0.133-0.267,0.199-0.4c0.134,0,0.268,0,0.4,0l0.4-0.4
          	c0.133,0,0.267,0,0.4,0c0-0.067,0-0.133,0-0.2c0.133,0,0.266,0,0.399,0c0-0.067,0-0.134,0-0.2c0.601-0.2,1.2-0.4,1.8-0.6
          	c0.4,0,0.801,0,1.2,0c0,0.067,0,0.133,0,0.2c0.597,0.598,0.929,3.445,0.601,4.6c-0.067,0-0.134,0-0.2,0c0,0.267,0,0.533,0,0.8
          	c-0.067,0-0.134,0-0.2,0c0,0.067,0,0.134,0,0.2c0.133,0.067,0.267,0.133,0.4,0.2c0,0.133,0,0.267,0,0.4
          	c0.199,0.133,0.399,0.266,0.6,0.4c0,0.133,0,0.267,0,0.4c0.066,0,0.133,0,0.2,0c0.133,0.4,0.267,0.8,0.399,1.2
          	c0.067,0,0.134,0,0.2,0c0,0.2,0,0.4,0,0.6c0.067,0,0.134,0,0.2,0c0,0.267,0,0.533,0,0.8c0.066,0,0.133,0,0.2,0
          	C133.909,114.079,133.909,115.28,133.909,116.479z"/>
          </svg>
        </div>
      );
    } else if (social === 'linkedin') {
      return (
        <div onClick={this.onClickLink.bind(this)} className="social-icon twitter">
        <svg x="0px" y="0px"
           width="63px" height="62px" viewBox="89 89 63 62" enable-background="new 89 89 63 62">
        <path d="M119.88,89.92c-16.552,0-29.97,13.418-29.97,29.97c0,16.552,13.418,29.97,29.97,29.97
          s29.97-13.418,29.97-29.97C149.85,103.338,136.432,89.92,119.88,89.92z M112.112,133.688c-1.8,0-3.601,0-5.4,0
          c0-6.133,0-12.268,0-18.401c5.4-0.084,0,0,5.4-0.084C112.112,121.27,112.112,127.622,112.112,133.688z M109.412,112.015
          c-2.071,0-3.75-1.679-3.75-3.75c0-2.071,1.679-3.75,3.75-3.75c2.071,0,3.75,1.679,3.75,3.75
          C113.162,110.336,111.483,112.015,109.412,112.015z M134.114,133.688c-1.801,0-3.279,0-5.079,0
          c0.022-2.951,0.312-10.99-0.922-12.601c-0.225-0.681-0.512-0.984-1.2-1.2c-1.047-0.752-2.562-0.141-3.4,0.4
          c-3.229,2.083-2.04,8.352-2.2,13.401c-1.866,0-3.734,0-5.601,0c0-6.133,0-12.268,0-18.401c1.867,0,3.734,0,5.601,0
          c0,0.8,0,1.601,0,2.4c1.252-0.853,2.222-2.025,3.8-2.601c0.934-0.34,2.73-0.333,3.4-0.2
          C135.787,116.338,134.286,125.204,134.114,133.688z" />
          </svg>
        </div>
      );
    } else if (social === 'twitter') {
      return (
        <div onClick={this.onClickLink.bind(this)} className="social-icon linkedin">
        <svg x="0px" y="0px"
           width="63px" height="62px" viewBox="89 89 63 62" enable-background="new 89 89 63 62">
        <path d="M119.88,89.91c-16.552,0-29.97,13.418-29.97,29.97s13.418,29.97,29.97,29.97s29.97-13.418,29.97-29.97
          S136.432,89.91,119.88,89.91z M135.915,111.679c-1.075,0.737-1.619,1.898-2.801,2.6c0.017,9.546-4.995,15.157-12.401,17.401
          c-4.129,1.252-10.739,0.946-13.401-1.6c-0.133,0-0.267,0-0.4,0c0.919-0.587,2.38-0.07,3.6-0.4c1.562-0.422,3.567-1.178,4.6-2.2
          c0.066,0,0.133,0,0.2,0c-0.479-0.721-2.259-0.737-3-1.2c-1.175-0.733-1.473-2.04-2.4-3c0.394-0.267,1.305-0.227,2-0.2
          c-0.566-1.075-2.285-1.405-3-2.4c-0.667-0.928-0.546-2.383-1.2-3.4c0-0.067,0-0.133,0-0.2c0.687,0.085,1.872,0.249,2.4,0.6
          c0.067,0,0.133,0,0.2,0c-0.329-0.761-0.992-0.803-1.4-1.4c-0.872-1.277-1.615-4.878-0.4-6.4c0-0.134,0-0.267,0-0.4
          c0.066,0,0.133,0,0.2,0c2.079,3.375,7.079,6.39,12.4,6.4c-0.105-3.875,1.136-6.189,3.801-7.201c2.43-0.922,5.327,0.222,6.201,1.6
          c1.448-0.049,2.823-0.451,3.6-1.2c0.134,0,0.268,0,0.4,0c-0.266,1.062-1,2.262-2,2.6c0,0.133,0,0.267,0,0.4
          c0.849-0.049,1.693-0.196,2.2-0.6c0.2,0,0.399,0,0.601,0C135.915,111.546,135.915,111.612,135.915,111.679z"/>
          </svg>
        </div>
      );
    } else if (social === 'vimeo') {
      return (
        <div onClick={this.onClickLink.bind(this)} className="social-icon vimeo">
          <svg x="0px" y="0px"
          	 width="61px" height="60px" viewBox="89.38 89.88 61 60" enable-background="new 89.38 89.88 61 60">
          <path fill="#FFC963" d="M120.487,89.91c-16.552,0-29.97,13.418-29.97,29.97s13.418,29.97,29.97,29.97s29.97-13.418,29.97-29.97
          	S137.039,89.91,120.487,89.91z M135.168,116.479c-2.45,6.407-8.04,13.112-13.401,16.602c-0.601,0.391-1.428,0.391-2,0.8
          	c-4.009,0.009-4.896-3.034-6-6.001c-1.564-4.205-2.746-11.493-5.4-14.601c-1.572,0.132-2.104,0.847-3.2,1.4
          	c-0.345-0.565-0.779-0.917-1-1.6c-0.246-0.758,1.208-1.608,1.8-2.2c1.481-1.481,2.979-3.072,4.8-4.2c0.861-0.534,2.001-0.61,2.8-1.2
          	c1.232-0.018,2.106,0.085,2.8,0.6c1.444,1.07,1.24,3.385,1.8,5.401c1.141,4.106,1.823,8.401,3.4,11.801
          	c2.648-0.123,5.897-6.295,5.801-9.601c-0.854-0.932-2.383-2.538-4-1c-0.133,0-0.267,0-0.4,0c0.438-3.471,3.016-5.85,5.801-7
          	c0.832-0.344,2.062-0.148,2.801-0.6c2.14,0.379,4.006,0.682,4.599,2.6C137.843,110.077,135.925,114.502,135.168,116.479z"/>
          </svg>
        </div>
      );
    } else if (social === 'instagram') {
      return (
        <div onClick={this.onClickLink.bind(this)} className="social-icon instagram">
          <svg x="0px" y="0px"
          	 width="61px" height="60px" viewBox="89.38 89.88 61 60" enable-background="new 89.38 89.88 61 60">
          <circle fill="#FFC963" cx="120.098" cy="119.875" r="29.97"/>
          <path fill="#FFFFFF" d="M136.478,127.876c0-5.399,0-10.801,0-16.201c0-3.253,0.083-6.07-1.801-7.401
          	c-1.656-1.17-5.251-0.8-8.001-0.8c-6.267,0-12.535,0-18.801,0c-0.384,0.259-1.25,0.343-1.8,0.4c-0.693,0.88-1.829,1.386-2.2,2.6
          	c-0.551,1.802-0.2,4.479-0.2,6.601c0,4.467,0,8.935,0,13.401c0,3.684-0.354,7.479,1.8,9.001c2.407,1.7,12.847,0.8,17.001,0.8
          	c3.639,0,9.908,0.827,12.201-0.8C136.596,134.115,136.478,131.194,136.478,127.876z M126.076,108.075
          	c0.161-0.204,0.071-0.055,0.2-0.4c0.291-0.17,0.573-0.362,0.8-0.6c1.233-0.032,3.771-0.34,4.601,0.2c1.508,0.515,1.072,3.621,1,5.6
          	c-0.2,0.134-0.4,0.267-0.6,0.4c-1.135,0.906-4.407,0.323-5.602,0C126.096,111.972,126.064,109.943,126.076,108.075z
          	 M113.675,118.076c0.971-3.055,2.675-3.044,5-4.601c3.667-0.113,5.874,0.838,7.2,3c2.359,3.846-0.437,8.297-3.4,9.4
          	C117.676,127.665,112.021,123.281,113.675,118.076z M132.876,131.077c-0.16,0.236-0.154,0.336-0.199,0.8
          	c-0.292,0.171-0.574,0.362-0.801,0.601c-7.934,0-15.869,0-23.802,0c-1.604-2.494-0.828-11.129-0.8-15.202c1,0,2,0,3,0
          	c-0.33,5.496,0.787,8.984,4.2,11.201c0.812,0.527,2.057,0.924,3,1.2c5.872,1.722,10.84-2.366,12.202-6
          	c0.756-2.021,0.482-4.282,0.199-6.401c0.934,0,1.867,0,2.801,0C133.56,119.937,132.892,127.675,132.876,131.077z"/>
          </svg>
        </div>
      );
    }
  }
}
