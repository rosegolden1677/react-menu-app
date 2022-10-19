import React from 'react';
import AboutContent from '../components/AboutContent';
import Navbar from '../components/Navbar';

const About = ({setChangeColor}) => {
  return (
    <>
      <Navbar />
      <AboutContent />
    </>
  );
}

export default About;