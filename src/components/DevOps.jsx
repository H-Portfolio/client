import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp, Eye, ArrowRight } from 'lucide-react';
import DevOpsTaskDialog from './DevOpsTaskDialog';
import MessageDialog from './MessageDialog';

const DevOps = ({ data }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [messageDialog, setMessageDialog] = useState({
    isOpen: false,
    type: 'info',
    title: '',
    message: ''
  });

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedTask(null);
  };

  const showMessage = (type, title, message) => {
    setMessageDialog({
      isOpen: true,
      type,
      title,
      message
    });
  };

  const closeMessageDialog = () => {
    setMessageDialog({ ...messageDialog, isOpen: false });
  };

  return (
    <section id="devops" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            DevOps & Infrastructure
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Streamlining development workflows and managing scalable infrastructure 
            with modern DevOps practices and cloud technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((task, index) => (
            <Card 
              key={task.id} 
              className="group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2 border border-purple-500/20 bg-gray-900/50 backdrop-blur-sm h-full cursor-pointer"
              onClick={() => handleTaskClick(task)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {task.icon}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs text-center text-cyan-400 border-cyan-400/30 bg-cyan-400/10">
                      {task.category}
                    </Badge>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Eye className="w-4 h-4 text-purple-400" />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
                  {task.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <p className="text-gray-300 leading-relaxed text-sm flex-1">
                  {task.summary}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-400 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {task.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-purple-400 hover:text-purple-400 transition-colors backdrop-blur-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {task.technologies.length > 4 && (
                      <Badge
                        variant="secondary"
                        className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 border border-gray-700"
                      >
                        +{task.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-lg p-3 border border-green-500/20 mt-auto">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-300 font-medium text-sm">{task.metrics}</span>
                  </div>
                </div>

                {/* Click to view more indicator */}
                <div className="flex items-center justify-center text-purple-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pt-2">
                  <span className="mr-1">Click for details</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* DevOps Philosophy */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">DevOps Philosophy</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I believe in automating everything, monitoring proactively, and building resilient systems. 
              My approach focuses on collaboration between development and operations teams, 
              continuous improvement, and infrastructure as code principles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div 
                className="text-center cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() => showMessage('info', 'Automation First', 'I focus on automating repetitive tasks to eliminate manual errors and improve efficiency. This includes automated deployments, testing, monitoring, and infrastructure provisioning.')}
              >
                <div className="text-3xl mb-2">🔄</div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Automation First</h4>
                <p className="text-gray-400 text-sm">Automate repetitive tasks and eliminate manual errors</p>
              </div>
              <div 
                className="text-center cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() => showMessage('success', 'Monitor Everything', 'Comprehensive observability is key to maintaining healthy systems. I implement monitoring at every layer - infrastructure, applications, and business metrics with proactive alerting.')}
              >
                <div className="text-3xl mb-2">📊</div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">Monitor Everything</h4>
                <p className="text-gray-400 text-sm">Comprehensive observability and proactive alerting</p>
              </div>
              <div 
                className="text-center cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() => showMessage('warning', 'Scale Efficiently', 'Building systems that can handle growth efficiently is crucial. I design for scalability from day one, implementing auto-scaling, load balancing, and efficient resource utilization.')}
              >
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Scale Efficiently</h4>
                <p className="text-gray-400 text-sm">Build systems that grow with your business needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DevOps Task Detail Dialog */}
      <DevOpsTaskDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        task={selectedTask}
      />

      {/* General Message Dialog */}
      <MessageDialog
        isOpen={messageDialog.isOpen}
        onClose={closeMessageDialog}
        type={messageDialog.type}
        title={messageDialog.title}
        message={messageDialog.message}
      />
    </section>
  );
};

export default DevOps;