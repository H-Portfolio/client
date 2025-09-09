import React from 'react';
import { X, Calendar, Zap, TrendingUp } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import ReactMarkdown from 'react-markdown';

const DevOpsTaskDialog = ({ isOpen, onClose, task }) => {
  if (!task) return null;

  const getComplexityColor = (complexity) => {
    switch (complexity?.toLowerCase()) {
      case 'high':
        return 'text-red-400 border-red-400/30 bg-red-400/10';
      case 'medium':
        return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
      case 'low':
        return 'text-green-400 border-green-400/30 bg-green-400/10';
      default:
        return 'text-gray-400 border-gray-400/30 bg-gray-400/10';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto border border-purple-500/20 bg-gray-900/95 backdrop-blur-md">
        <DialogHeader className="relative pb-6">
          <button
            onClick={onClose}
            className="absolute right-0 top-0 p-2 rounded-lg hover:bg-gray-800/50 transition-colors text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-start space-x-4 pr-10">
            <div className="text-4xl">
              {task.icon}
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl text-white mb-2">
                {task.title}
              </DialogTitle>
              <div className="flex items-center space-x-3">
                <Badge variant="outline" className="text-cyan-400 border-cyan-400/30 bg-cyan-400/10">
                  {task.category}
                </Badge>
                {task.complexity && (
                  <Badge variant="outline" className={getComplexityColor(task.complexity)}>
                    <Zap className="w-3 h-3 mr-1" />
                    {task.complexity} Complexity
                  </Badge>
                )}
                {task.duration && (
                  <Badge variant="outline" className="text-purple-400 border-purple-400/30 bg-purple-400/10">
                    <Calendar className="w-3 h-3 mr-1" />
                    {task.duration}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Metrics */}
          <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-lg p-4 border border-green-500/20">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-green-300 font-semibold">Key Metrics</span>
            </div>
            <p className="text-green-200 text-lg font-medium">{task.metrics}</p>
          </div>

          {/* Technologies */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-purple-400">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {task.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-purple-400 hover:text-purple-400 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Full Description */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-purple-400">Detailed Description:</h4>
            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/50">
              <div className="prose prose-invert prose-purple max-w-none">
                <ReactMarkdown
                  components={{
                    h1: ({node, ...props}) => <h1 className="text-xl font-bold text-white mb-3" {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-lg font-semibold text-purple-400 mb-2 mt-4" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-md font-semibold text-cyan-400 mb-2 mt-3" {...props} />,
                    p: ({node, ...props}) => <p className="text-gray-300 leading-relaxed mb-3" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-1 mb-3 text-gray-300" {...props} />,
                    li: ({node, ...props}) => <li className="text-gray-300" {...props} />,
                    strong: ({node, ...props}) => <strong className="text-white font-semibold" {...props} />,
                    code: ({node, ...props}) => <code className="bg-gray-900 text-cyan-400 px-2 py-1 rounded text-sm" {...props} />
                  }}
                >
                  {task.fullDescription}
                </ReactMarkdown>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-purple-400">Project URL:</h4>
            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/50">
              <div className="prose prose-invert prose-purple max-w-none text-white">
                  {task.projectUrl}
              </div>
            </div>
          </div>

          {/* Close Button */}
          <div className="flex justify-end pt-4 border-t border-gray-700">
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
            >
              Close
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DevOpsTaskDialog;