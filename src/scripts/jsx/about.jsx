'use strict';

import SidePanel from './sidepanel/sidepanel';
import Logo from './logo';
import Footer from './footer';

export default class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <section className='about'>
          <SidePanel />
          <Logo />
          <h2>Hola</h2>
          <div className='copy'>
            <p>I’m Franc Camps-Febrer and I am a software and data visualization engineer and digital artist. I am based between Brooklyn and Barcelona.</p>
            <p>I’ve been a software and data visualization engineer for @Knewton for 4 years. I now do freelance work as an engineer and designer and explore some initiatives in digital art. I am passionate about all things storytelling, and exploring combinations of formats to tell more powerful stories.</p>
            <p>I’ve worked as a bunch of different things, but most importantly as researcher, teacher, designer and developer. I’ve always done writing for various purposes.  I worked as a neuroscience research assistant in cognitive neuroscience and neuroaesthetics at NYU's Center for Neural Science. I shot a short documentary in synaesthesia and the emergence of creative thinking based on some of the research work I collaborated with. </p>
            <p>Late 2011, I started pursuing my interests in visualization, interaction, design and development full-time. Putting all my experiences together, I have both a qualitative and quantitative approach to storytelling. You can check my resume here.</p>
            <p>I was part of the School for Poetic Computation Fall 2014 session, exploring the intersection of code, design, hardware and theory in media art.</p>
            <p>I have an opinion.</p>
            <p>Say hi!</p>
            <p><a href='mailto:hi@franc.ly'>hi@franc.ly</a></p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
