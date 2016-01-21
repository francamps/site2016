'use strict';

import React from 'react';
import { render } from 'react-dom'

import SidePanel from './sidepanel/sidepanel';
import Logo from './logo';
import Footer from './footer';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <section className='about'>
          <SidePanel />
          <Logo />
          <h2>Hola</h2>
          <div className='copy'>
            <p>I’m Franc Camps-Febrer and I am a data visualization engineer and digital artist. I was born in Barcelona, and I am based in Brooklyn.</p>
            <p>I’m currently working for @Knewton, the adaptive learning platform. I also do freelance work when I believe it’ll make the world better. I am passionate about all things storytelling, and exploring combinations of formats to tell more powerful stories.</p>
            <p>I’ve worked as a bunch of different things, but most importantly as researcher, teacher, designer and developer. I’ve always done writing for various purposes. I earned a master degree in Developmental Neuroscience from CUNY in 2011, and focused my master’s thesis on neuroaesthetics, synaesthesia and the emergence of creative thinking based on research work I collaborated with at NYU’s Center for Neural Science. I also shot a documentary about it.</p>
            <p>Late 2011, I started pursuing my interests in visualization, interaction, design and development full-time. Putting all my experiences together, I like to think I have both a qualitative and quantitative approach to storytelling. You can check my resume here.</p>
            <p>I was part of the School for Poetic Computation Fall 2014 session, exploring the intersection of code, design, hardware and theory in media art.</p>
            <p>I have an opinion.</p>
            <p>Say hi!</p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
