import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = ({ data, social }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: data.email,
      href: `mailto:${data.email}`
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "HansakaRatnayake",
      href: social.github
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "hansaka-ratnayake-dev",
      href: social.linkedin
    }
  ];

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <Card className="border border-purple-500/20 shadow-2xl bg-gray-900/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Name"
                        className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 backdrop-blur-sm"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Subject"
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 backdrop-blur-sm"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project..."
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 resize-none backdrop-blur-sm"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white py-3 text-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4 text-gray-300">
                <p>{data.location}</p>
                <p>{data.email}</p>
                <p>{data.phone}</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center group-hover:border-purple-400 group-hover:shadow-md transition-all backdrop-blur-sm">
                      {link.icon}
                    </div>
                    <div>
                      <p className="font-medium">{link.label}</p>
                      <p className="text-sm text-gray-400">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-green-900/30 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <div>
                  <p className="font-semibold text-green-300">Currently Available</p>
                  <p className="text-green-400 text-sm">Open to new opportunities and collaborations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;