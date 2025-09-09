import React from 'react';
import { Button } from './ui/button';

import {ArrowDownToLine} from 'lucide-react';

const Hero = ({ data, social }) => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 z-10">
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <img 
                src={data.profileImage} 
                alt={data.name}
                className="w-60 h-60 rounded-full object-cover border-4 border-purple-400/30 shadow-2xl hover:border-purple-400/50 transition-all duration-300"
              />
              {/* Glowing ring effect */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-400/10 to-cyan-400/10 blur-2xl animate-pulse"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-7xl font-light text-white leading-tight">
              Hi, I'm <span className="font-normal bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{data.name.split(' ')[0]}</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-300 font-light max-w-4xl mx-auto">
              {data.title}
            </h2>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button 
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-purple-500/50 to-cyan-500/50 hover:from-purple-600/50 hover:to-cyan-600/50 text-white px-8 py-6 text-lg rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-purple-500/50"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 px-8 py-6 text-lg rounded-lg transition-all duration-200 font-medium backdrop-blur-sm"
            >
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center pt-12">
            <Button
              variant="outline"
              onClick={scrollToAbout}
              className="animate-bounce-slow rounded-full w-10 h-10 p-4 
                        border border-gray-700 text-purple-400 
                        hover:border-purple-400 hover:text-purple-400 
                        text-md font-medium backdrop-blur-sm"
            >
              <ArrowDownToLine />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;