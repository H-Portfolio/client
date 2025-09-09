import React from 'react';
import { MapPin, Calendar, ChevronRight, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey through innovative companies, building scalable solutions and leading development teams 
            to deliver exceptional software products.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {data.map((experience, index) => (
              <div 
                key={experience.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-gray-900 shadow-xl transform md:-translate-x-1/2 z-10"></div>

                {/* Experience Card */}
                <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2 border border-purple-500/20 bg-gray-900/50 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-400/30 flex-shrink-0">
                          <img 
                            src={experience.logo} 
                            alt={experience.company}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
                            {experience.position}
                          </CardTitle>
                          <p className="text-lg font-semibold text-purple-400">{experience.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <Badge variant="outline" className="w-fit text-cyan-400 border-cyan-400/30 bg-cyan-400/10">
                          <Calendar className="w-3 h-3 mr-1" />
                          {experience.duration}
                        </Badge>
                        <Badge variant="outline" className="w-fit text-gray-300 border-gray-600">
                          <MapPin className="w-3 h-3 mr-1" />
                          {experience.location}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-gray-300 leading-relaxed">
                        {experience.description}
                      </p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-purple-400 flex items-center">
                          <ChevronRight className="w-4 h-4 mr-1" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li 
                              key={achIndex} 
                              className="flex items-start text-gray-300 text-sm leading-relaxed"
                            >
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Want to work together?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities and challenging projects. 
              Let's connect and explore how we can build something amazing together.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;