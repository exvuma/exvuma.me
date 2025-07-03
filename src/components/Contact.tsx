
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Github, MessageSquare } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection animation="fade-up" className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get In <span className="gradient-text reveal-text">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Let's connect and explore opportunities to collaborate on innovative products and AI initiatives.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={300} className="max-w-md mx-auto">
          <Card className="card-3d bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <div className="flex flex-col space-y-6">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScqUoQmnKZiRU9z9-X-fsAgWhjRo_NCkE0eKQI6-6QMqMdM-w/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-green-600 hover:bg-green-700 transition-colors duration-300 text-white magnetic-effect"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span className="font-medium">Send me a message</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/exvuma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white magnetic-effect"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="font-medium">Connect on LinkedIn</span>
                </a>

                <a
                  href="https://github.com/exvuma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 text-white magnetic-effect"
                >
                  <Github className="w-6 h-6" />
                  <span className="font-medium">View GitHub Profile</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
