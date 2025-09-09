import React from 'react';
import { Badge } from './ui/badge';

const Skills = ({ data }) => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: data.frontend,
      description: 'Building responsive and interactive user interfaces',
      icon: '⚡'
    },
    {
      title: 'Backend',
      skills: data.backend,
      description: 'Server-side development and API design',
      icon: '🔧'
    },
    {
      title: 'Database',
      skills: data.databases,
      description: 'Data storage and management solutions',
      icon: '🗄️'
    },
    {
      title: 'AI & Machine Learning',
      skills: data.aiml,
      description: 'Intelligent systems and data science',
      icon: '🤖'
    },
    {
      title: 'DevOps & Cloud',
      skills: data.devops,
      description: 'Infrastructure and deployment automation',
      icon: '☁️'
    },
    {
      title: 'Tools & Other',
      skills: data.tools,
      description: 'Development tools and productivity software',
      icon: '🛠️'
    }
  ];

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-500/20 hover:border-purple-500/40 hover:shadow-purple-500/10 transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {category.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-3 py-1 text-sm bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-purple-400 hover:text-purple-400 transition-all duration-200 backdrop-blur-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Always Learning Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices. 
              I'm always exploring new frameworks, learning emerging technologies, and contributing to the developer community.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="px-4 py-2 text-sm border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 transition-colors backdrop-blur-sm">
                Machine Learning
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-colors backdrop-blur-sm">
                WebAssembly
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 transition-colors backdrop-blur-sm">
                Three.js
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-colors backdrop-blur-sm">
                Rust
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 transition-colors backdrop-blur-sm">
                GraphQL
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;