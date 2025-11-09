import React, { useState } from 'react';
import {
    ExternalLink,
    Github,
    Code,
    ChevronDown,
    ChevronUp,
    MapPin,
    Settings,
    Database,
    Cloud,
    Shield,
    Zap,
    Users,
    BarChart3,
    AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import MessageDialog from './MessageDialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'; // Assuming Accordion is available in UI components; if not, implement simple state-based toggle

const OngoingProjects = () => {
    const [openSections, setOpenSections] = useState({
        overview: true,
        modules: false,
        frontend: false,
        infrastructure: false,
        database: false,
        deployment: false,
        security: false,
        features: false
    });

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


    const toggleSection = (section) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const project = {
        title: 'SmartCity 360° – Intelligent City Management Platform',
        type: 'Full-Stack Enterprise System',
        domain: 'Smart City Operations | IoT | Data Analytics | AI | Cloud Native | Microservices',
        description: 'A scalable, intelligent city management platform powered by microservices and microfrontends, integrating modern web frameworks, distributed systems, and advanced DevOps technologies.',
        vision: 'To create an intelligent, connected city ecosystem that leverages data, automation, and microservices to enhance citizen experience, optimize city operations, and improve urban sustainability.',
        image: 'https://port-imges.s3.ap-south-1.amazonaws.com/project-images/smartcity.png',
        githubUrl: 'https://github.com/HansakaRatnayake/SmartCity-360.git',
        demoUrl: '' // Coming soon
    };

    const coreModules = [
        { icon: Users, title: 'Citizen Management', lang: 'Spring Boot', desc: 'Handles citizen registration, authentication, profiles, service requests, bill payments, and feedback with OAuth2/JWT security.' },
        { icon: Settings, title: 'Business Management', lang: 'GoLang', desc: 'Business registration, license management, tax tracking, inspection scheduling, and admin approvals.' },
        { icon: MapPin, title: 'Traffic Management', lang: 'Node.js (Express)', desc: 'Real-time traffic monitoring, IoT data ingestion, AI congestion prediction, and public transport integration.' },
        { icon: Zap, title: 'Energy & Utilities', lang: 'Python (FastAPI)', desc: 'Smart meter tracking, ML load balancing predictions, outage management, and Kafka real-time updates.' },
        { icon: AlertCircle, title: 'Waste Management', lang: 'Spring Boot', desc: 'Dynamic garbage collection scheduling, GPS monitoring, citizen requests, and sustainability reporting.' },
        { icon: Shield, title: 'Public Safety', lang: 'GoLang', desc: 'Incident reporting, real-time response tracking, map API integration, and response analytics.' },
        { icon: BarChart3, title: 'Analytics & Reporting', lang: 'Python (FastAPI + Pandas)', desc: 'Data aggregation, dashboards, trend analysis, predictive analytics, and Next.js API integration.' },
        { icon: AlertCircle, title: 'Notification & Event', lang: 'Kafka + Node.js', desc: 'Event-driven communication, WebSocket notifications, and asynchronous service messaging.' }
    ];

    const frontendModules = [
        { framework: 'Citizen Portal', desc: 'React – Manage services, bills, and reports.' },
        { framework: 'Admin Console', desc: 'Angular – Manage users, departments, and approvals.' },
        { framework: 'Analytics Dashboard', desc: 'Next.js – Visualize data from all departments.' },
        { framework: 'Officer Portal (PWA)', desc: 'React – Mobile-ready interface for field officers.' }
    ];

    const infrastructure = [
        'Docker – Containerization',
        'Kubernetes (K8s) – Orchestration and scaling',
        'Spring Cloud Gateway / Kong – API access',
        'Kafka – Event streaming',
        'Prometheus + Grafana – Monitoring',
        'ELK Stack – Logging and observability',
        'Jenkins / GitHub Actions – CI/CD',
        'Helm – Deployment management',
        'Terraform – IaC (optional)',
        'Keycloak – Auth management'
    ];

    const databases = [
        { purpose: 'Citizen, Business, Waste', type: 'PostgreSQL (Relational)' },
        { purpose: 'Traffic, IoT, Sensor Data', type: 'MongoDB (NoSQL Document)' },
        { purpose: 'Cache & Sessions', type: 'Redis (In-Memory)' },
        { purpose: 'Logging & Search', type: 'Elasticsearch (Log Search)' },
        { purpose: 'File Storage', type: 'MinIO / AWS S3 (Object Storage)' }
    ];

    const deployment = 'Deployed on Kubernetes clusters (GKE or AWS EKS) with ArgoCD GitOps, SSL/HTTPS, auto-scaling, and rolling updates.';

    const security = [
        'OAuth2 and JWT for microservices',
        'Role-based access control via Keycloak',
        'TLS secure communication',
        'API Gateway rate limiting and CORS',
        'Centralized audit logging'
    ];

    const features = [
        'Real-time IoT data streaming with Kafka',
        'ML-based predictions (Python + TensorFlow)',
        'Event-driven CQRS architecture',
        'Offline-first PWA for officers',
        'Multi-tenancy for city zones'
    ];

    const showComingSoon = (type) => {
        // Assuming MessageDialog is available; reuse logic if integrated
        alert(`${type} is coming soon! This ongoing project is under active development. Check back for updates.`);
    };

    const closeMessageDialog = () => {
        setMessageDialog({...messageDialog, isOpen: false});
    };

    return (
        <section id="ongoing-projects" className="py-24 relative z-10 bg-gradient-to-b from-gray-900/20 to-transparent">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
                        Ongoing Projects
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Building the future, one module at a time – real-time insights into my current endeavors
                    </p>
                </div>

                {/* Ongoing Project Showcase */}
                <div className="relative">
                    <Card className="border border-purple-500/20 shadow-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm">
                        <div className="grid grid-cols-1">
                            {/* Project Image */}
                            <div className="relative h-96 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                                <Badge className="absolute top-4 left-4 bg-green-600 text-white border-0 animate-pulse">
                                    Ongoing
                                </Badge>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                            </div>

                            {/* Project Content */}
                            <div className="p-8">
                                <CardHeader className="p-0 mb-6">
                                    <div className="mb-3 flex flex-wrap gap-2">
                                        <Badge variant="outline" className="text-sm border-purple-400 text-purple-400">
                                            {project.type}
                                        </Badge>
                                        <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 border-gray-700">
                                            {project.domain.split(' | ').map(tag => `#${tag}`).join(' ')}
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

                                    {/* Expandable Sections */}
                                    <div className="space-y-4">
                                        {/* Overview */}
                                        <div className="space-y-3">
                                            <button
                                                onClick={() => toggleSection('overview')}
                                                className="flex items-center w-full justify-between font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                                            >
                                                <span className="flex items-center">
                                                    <MapPin className="w-4 h-4 mr-2" />
                                                    Project Overview
                                                </span>
                                                {openSections.overview ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </button>
                                            {openSections.overview && (
                                                <p className="text-gray-400 text-sm ml-6">{project.vision}</p>
                                            )}
                                        </div>

                                        {/* Core Modules */}
                                        <div className="space-y-3">
                                            <button
                                                onClick={() => toggleSection('modules')}
                                                className="flex items-center w-full justify-between font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                                            >
                                                <span className="flex items-center">
                                                    <Settings className="w-4 h-4 mr-2" />
                                                    Core System Modules
                                                </span>
                                                {openSections.modules ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </button>
                                            {openSections.modules && (
                                                <div className="ml-6 space-y-2">
                                                    {coreModules.map((module, index) => (
                                                        <div key={index} className="flex items-start space-x-3 p-2 bg-gray-800/50 rounded">
                                                            <module.icon className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                                                            <div>
                                                                <h5 className="font-medium text-gray-300">{module.title}</h5>
                                                                <p className="text-xs text-gray-500">{module.lang}</p>
                                                                <p className="text-gray-400 text-sm">{module.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Frontend */}
                                        <div className="space-y-3">
                                            <button
                                                onClick={() => toggleSection('frontend')}
                                                className="flex items-center w-full justify-between font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                                            >
                                                <span className="flex items-center">
                                                    <Code className="w-4 h-4 mr-2" />
                                                    Frontend Microfrontends
                                                </span>
                                                {openSections.frontend ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </button>
                                            {openSections.frontend && (
                                                <div className="ml-6 space-y-2">
                                                    {frontendModules.map((mod, index) => (
                                                        <div key={index} className="flex justify-between items-center p-2 bg-gray-800/50 rounded">
                                                            <span className="text-gray-300">{mod.framework}</span>
                                                            <span className="text-xs text-gray-500">{mod.desc}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Infrastructure */}
                                        <div className="space-y-3">
                                            <button
                                                onClick={() => toggleSection('infrastructure')}
                                                className="flex items-center w-full justify-between font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                                            >
                                                <span className="flex items-center">
                                                    <Cloud className="w-4 h-4 mr-2" />
                                                    Infrastructure & DevOps
                                                </span>
                                                {openSections.infrastructure ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </button>
                                            {openSections.infrastructure && (
                                                <div className="ml-6 space-y-1">
                                                    {infrastructure.map((item, index) => (
                                                        <p key={index} className="text-sm text-gray-400">• {item}</p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Database */}
                                        <div className="space-y-3">
                                            <button
                                                onClick={() => toggleSection('database')}
                                                className="flex items-center w-full justify-between font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                                            >
                                                <span className="flex items-center">
                                                    <Database className="w-4 h-4 mr-2" />
                                                    Database Layer
                                                </span>
                                                {openSections.database ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </button>
                                            {openSections.database && (
                                                <div className="ml-6 space-y-2">
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {databases.map((db, index) => (
                                                            <div key={index} className="p-2 bg-gray-800/50 rounded text-xs">
                                                                <p className="font-medium text-gray-300">{db.purpose}</p>
                                                                <p className="text-gray-500">{db.type}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Deployment & Security */}
                                        <div className="space-y-3">
                                            <button
                                                onClick={() => toggleSection('deployment')}
                                                className="flex items-center w-full justify-between font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                                            >
                                                <span className="flex items-center">
                                                    <Zap className="w-4 h-4 mr-2" />
                                                    Cloud & Deployment
                                                </span>
                                                {openSections.deployment ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </button>
                                            {openSections.deployment && (
                                                <div className="ml-6 space-y-1">
                                                    <p className="text-sm text-gray-400">{deployment}</p>
                                                    <button
                                                        onClick={() => toggleSection('security')}
                                                        className="flex items-center mt-2 text-purple-400 hover:text-purple-300 text-sm"
                                                    >
                                                        <Shield className="w-3 h-3 mr-1" />
                                                        Security Highlights {openSections.security ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                                    </button>
                                                    {openSections.security && (
                                                        <div className="ml-4 space-y-1">
                                                            {security.map((item, index) => (
                                                                <p key={index} className="text-xs text-gray-500">• {item}</p>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        {/* Advanced Features */}
                                        <div className="space-y-3">
                                            <button
                                                onClick={() => toggleSection('features')}
                                                className="flex items-center w-full justify-between font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                                            >
                                                <span className="flex items-center">
                                                    <BarChart3 className="w-4 h-4 mr-2" />
                                                    Advanced Features
                                                </span>
                                                {openSections.features ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </button>
                                            {openSections.features && (
                                                <div className="ml-6 space-y-1">
                                                    {features.map((feature, index) => (
                                                        <p key={index} className="text-sm text-gray-400">• {feature}</p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex gap-4 pt-4">
                                        <Button
                                            onClick={() => {
                                                showMessage('info', 'Coming Soon', 'Currently under development and will be ready soon')
                                            }}
                                            className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 flex-1"
                                        >
                                            <Github className="w-4 h-4 mr-2" />
                                            Code (Private)
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                showMessage('info', 'Coming Soon', 'Currently under development and will be ready soon')
                                            }}
                                            variant="outline"
                                            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 backdrop-blur-sm flex-1"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Live Demo (Coming Soon)
                                        </Button>
                                    </div>
                                </CardContent>
                            </div>
                        </div>
                    </Card>
                </div>

                {/*/!* GitHub CTA *!/*/}
                {/*<div className="text-center mt-12">*/}
                {/*    <p className="text-lg text-gray-300 mb-4">Excited about smart cities? Follow progress on GitHub.</p>*/}
                {/*    <Button variant="outline" asChild className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 backdrop-blur-sm">*/}
                {/*        <a href="https://github.com/HansakaRatnayake" target="_blank" rel="noopener noreferrer">*/}
                {/*            Track Updates on GitHub →*/}
                {/*        </a>*/}
                {/*    </Button>*/}
                {/*</div>*/}
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

export default OngoingProjects;