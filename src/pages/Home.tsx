import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Projects } from '../components/Projects';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
    </>
  );
};