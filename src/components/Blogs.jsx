import React, { useState } from 'react';
import { ExternalLink, Calendar, Clock, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Blogs = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Architecture', 'DevOps', 'Frontend', 'Backend', 'Security', 'Development'];
  
  const filteredBlogs = selectedCategory === 'All' 
    ? data 
    : data.filter(blog => blog.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blogs" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Technical Blogs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge, insights, and experiences from my journey in software development, 
            DevOps, and emerging technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-purple-400 border border-gray-700 backdrop-blur-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <Card 
              key={blog.id} 
              className="group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2 border border-purple-500/20 bg-gray-900/50 backdrop-blur-sm overflow-hidden h-full flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-0">
                    {blog.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>

              <CardHeader className="pb-3 flex-1">
                <CardTitle className="text-lg text-white group-hover:text-purple-400 transition-colors leading-tight">
                  {blog.title}
                </CardTitle>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
              </CardHeader>

              <CardContent className="pt-0 space-y-4">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(blog.publishDate)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-1">
                    <Tag className="w-3 h-3 text-purple-400" />
                    <span className="text-xs font-semibold text-purple-400">Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {blog.tags.slice(0, 3).map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-purple-400 hover:text-purple-400 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {blog.tags.length > 3 && (
                      <Badge
                        variant="secondary"
                        className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 border border-gray-700"
                      >
                        +{blog.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                <Button 
                  asChild 
                  variant="outline" 
                  size="sm"
                  className="w-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 backdrop-blur-sm"
                >
                  <a href={blog.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-2" />
                    Read Article
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No blogs found for the selected category.</p>
          </div>
        )}

        {/* Blog CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Subscribe to My Newsletter
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest articles, tutorials, and insights delivered directly to your inbox. 
              Join 1000+ developers who are already subscribed!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none backdrop-blur-sm"
              />
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-6 py-3 font-medium">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;