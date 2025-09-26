import React, {useState} from 'react';
import {ExternalLink, Github, Code, ChevronLeft, ChevronRight,} from 'lucide-react';
import {Card, CardContent, CardHeader, CardTitle} from './ui/card';
import {Badge} from './ui/badge';
import {Button} from './ui/button';
import MessageDialog from './MessageDialog';


const Projects = ({data}) => {
    const [currentProject, setCurrentProject] = useState(0);
    const [messageDialog, setMessageDialog] = useState({
        isOpen: false,
        type: 'info',
        title: '',
        message: ''
    });

    const showMessage = (type, title, message) => {
        setMessageDialog({
            isOpen: true,
            type,
            title,
            message
        });
    };

    const closeMessageDialog = () => {
        setMessageDialog({...messageDialog, isOpen: false});
    };


    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % data.length);
    };

    const prevProject = () => {
        setCurrentProject((prev) => (prev - 1 + data.length) % data.length);
    };

    const project = data[currentProject];

    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        A showcase of my recent work and technical expertise
                    </p>
                </div>

                {/* Project Carousel */}
                <div className="relative">
                    <Card
                        className="border border-purple-500/20 shadow-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Project Image */}
                            <div className="relative h-full  overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                                {project.featured && (
                                    <Badge
                                        className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-0">
                                        Featured
                                    </Badge>
                                )}
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                            </div>

                            {/* Project Content */}
                            <div className="p-8 lg:p-12">
                                <CardHeader className="p-0 mb-6">
                                    <div className="mb-3">
                                        <Badge variant="outline" className="text-sm border-purple-400 text-purple-400">
                                            {project.category}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-2xl lg:text-3xl text-white mb-4">
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="p-0 space-y-6">
                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        {project.description}
                                    </p>

                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-purple-400">Technologies Used:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.slice(0, 6).map((tech, index) => (
                                                <Badge key={index} variant="secondary"
                                                       className="bg-gray-800 text-gray-300 border-gray-700 hover:border-purple-400 transition-colors">
                                                    {tech}
                                                </Badge>
                                            ))}
                                            {project.technologies.length > 6 && (
                                                <Badge variant="secondary"
                                                       className="bg-gray-800 text-gray-300 border-gray-700">
                                                    +{project.technologies.length - 6}
                                                </Badge>
                                            )}
                                        </div>
                                    </div>

                                    {project.codeSnippet && (
                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-purple-400 flex items-center">
                                                <Code className="w-4 h-4 mr-2"/>
                                                Code Preview:
                                            </h4>
                                            <pre
                                                className="custom-scroll bg-gray-950 text-gray-400 p-4 rounded-lg overflow-x-auto text-sm border border-purple-500/20">
                                              <code>{project.codeSnippet.slice(0, 200)}...</code>
                                            </pre>

                                        </div>
                                    )}

                                    <div className="flex gap-4 pt-4">
                                        {project.private ?
                                            <Button onClick={() => {
                                                showMessage('info', 'Private Repository', 'This project repository is private.')
                                            }}
                                                    className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0">

                                                <Github className="w-4 h-4 mr-2"/>
                                                Code

                                            </Button>
                                            :
                                            <Button asChild
                                                    className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0">
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                    <Github className="w-4 h-4 mr-2"/>
                                                    Code
                                                </a>
                                            </Button>
                                        }

                                        {project.demoUrl == "" ?
                                            <Button onClick={() => {
                                                showMessage('info', 'Coming Soon', 'My portfolio is currently under development and will be ready soon. Please check back for updates!')
                                            }} variant="outline" asChild
                                                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 backdrop-blur-sm">
                                                <a>
                                                    <ExternalLink className="w-4 h-4 mr-2"/>
                                                    Live Demo
                                                </a>
                                            </Button>
                                            :
                                            <Button variant="outline" asChild
                                                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 backdrop-blur-sm">
                                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4 mr-2"/>
                                                    Live Demo
                                                </a>
                                            </Button>
                                        }

                                    </div>
                                </CardContent>
                            </div>
                        </div>
                    </Card>

                    {/* Navigation buttons */}
                    <button
                        onClick={prevProject}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800/90 rounded-full p-3 shadow-lg border border-purple-500/30 transition-all duration-200 z-10 backdrop-blur-sm"
                    >
                        <ChevronLeft size={24} className="text-purple-400"/>
                    </button>
                    <button
                        onClick={nextProject}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800/90 rounded-full p-3 shadow-lg border border-purple-500/30 transition-all duration-200 z-10 backdrop-blur-sm"
                    >
                        <ChevronRight size={24} className="text-purple-400"/>
                    </button>
                </div>

                {/* Project indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                    {data.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentProject(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                                currentProject === index ? 'bg-purple-400' : 'bg-gray-600'
                            }`}
                        />
                    ))}
                </div>

                {/* Project counter */}
                <div className="text-center mt-6">
                    <p className="text-gray-400">
                        {currentProject + 1} of {data.length} projects
                    </p>
                </div>

                {/* GitHub CTA */}
                <div className="text-center mt-12">
                    <p className="text-lg text-gray-300 mb-4">Want to see more of my work?</p>
                    <Button variant="outline" asChild
                            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 backdrop-blur-sm">
                        <a href="https://github.com/HansakaRatnayake" target="_blank" rel="noopener noreferrer">
                            Visit my GitHub profile →
                        </a>
                    </Button>
                </div>
            </div>


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

export default Projects;