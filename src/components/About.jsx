import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Button } from './ui/button';

const About = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    "assets/about/image1.jpg?w=400&h=300&fit=crop",
    "assets/about/image2.jpeg?w=400&h=300&fit=crop", 
    "assets/about/image3.png?w=400&h=300&fit=crop",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = data.resumeUrl;
    link.download = `Hansaka Rathnayake Resume.pdf`;
    link.click();
  };

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Carousel */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl bg-gray-800/50 backdrop-blur-sm border border-purple-500/20">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {carouselImages.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`Slide ${index}`}
                      className="w-full h-80 object-cover flex-shrink-0"
                    />
                  ))}
                </div>
              </div>
              
              {/* Navigation buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800/90 rounded-full p-2 shadow-lg transition-all duration-200 backdrop-blur-sm border border-purple-500/30"
              >
                <ChevronLeft size={24} className="text-purple-400" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800/90 rounded-full p-2 shadow-lg transition-all duration-200 backdrop-blur-sm border border-purple-500/30"
              >
                <ChevronRight size={24} className="text-purple-400" />
              </button>
              
              {/* Dots indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      currentSlide === index ? 'bg-purple-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button 
                onClick={handleDownloadCV}
                variant="outline"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 px-8 py-3 text-lg rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I'm a dedicated Information Technology undergraduate at the University of Colombo School of Computing, majoring in AI/ML and full-stack development. My journey in tech started with a curiosity about intelligent systems and has evolved into a passion for building scalable applications that address real-world challenges.
                  </p>
                  <p>
                    I focus on data-driven development, blending skills in machine learning, web technologies, and system architecture to engineer smart, scalable solutions. I am learning AI through research and applying it to innovative projects, while contributing to open-source and expanding my expertise in cloud and DevOps practices.
                  </p>
                  <p>
                    When I'm not coding, you'll find me diving into the latest AI research, working on side projects, or sharing knowledge with the developer community through blogs. As a hobby, I dive into music while playing the guitar.
                  </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Location</h4>
                <p className="text-gray-300">{data.location}</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Status</h4>
                <p className="text-gray-300">{data.status}</p>
              </div>
              <div className="sm:col-span-2">
                <h4 className="font-semibold text-purple-400 mb-2">Interests</h4>
                <p className="text-gray-300">
                  Web Development, AI/ML, Data Science, System Architecture, 
                  Open Source, Cloud Computing, DevOps
                </p>
              </div>
            </div>

            {/* <div className="pt-6">
              <Button 
                onClick={handleDownloadCV}
                variant="outline"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 px-8 py-3 rounded-lg transition-all duration-200 w-full sm:w-auto backdrop-blur-sm"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;