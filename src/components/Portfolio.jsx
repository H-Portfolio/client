import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import DevOps from './DevOps';
import Skills from './Skills';
import Blogs from './Blogs';
import Contact from './Contact';
import Footer from './Footer';
import StarBackground from './StarBackground';
import { mockData } from '../data/mock';

const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time for smooth animations
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className={`min-h-screen relative transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <StarBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero data={mockData.personal} social={mockData.social} />
          <About data={mockData.personal} />
          <Experience data={mockData.experience} />
          <Projects data={mockData.projects} />
          <DevOps data={mockData.devops} />
          <Skills data={mockData.skills} />
          <Blogs data={mockData.blogs} />
          <Contact data={mockData.personal} social={mockData.social} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;