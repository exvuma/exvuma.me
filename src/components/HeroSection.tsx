import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Code, User, ArrowDown, Terminal, Palette, Lightbulb } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = [
    { icon: Code, title: "Engineer", subtitle: "Building Solutions", color: "from-blue-500 to-cyan-500" },
    { icon: User, title: "Product Manager", subtitle: "Creating Impact", color: "from-purple-500 to-pink-500" },
    { icon: Terminal, title: "Hacker", subtitle: "Breaking Boundaries", color: "from-green-500 to-emerald-500" },
    { icon: Palette, title: "Want to be Designer", subtitle: "Crafting Experiences", color: "from-pink-500 to-rose-500" },
    { icon: Lightbulb, title: "Problem Solver", subtitle: "Finding Solutions", color: "from-yellow-500 to-orange-500" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const CurrentIcon = roles[currentRole].icon;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 blueprint-grid opacity-30"></div>

      {/* Morphing background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-20 morphing-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 morphing-blob blur-3xl opacity-20" style={{ animationDelay: '2s' }}></div>

      {/* Parallax elements that follow mouse */}
      <div
        className="absolute top-10 left-10 w-4 h-4 bg-primary/30 rounded-full parallax-element"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      ></div>
      <div
        className="absolute bottom-10 right-10 w-6 h-6 bg-accent/30 rounded-full parallax-element"
        style={{
          transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`
        }}
      ></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content with staggered animations */}
          <div className="space-y-8">
            <AnimatedSection animation="fade-up" delay={0}>
              <div className="space-y-4">
                <p className="text-primary font-mono text-sm tracking-wide uppercase reveal-text">
                  From Code to Product
                </p>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-200">
                  Transforming
                  <br />
                  <span className="gradient-text">Ideas</span> into
                  <br />
                  <span className="gradient-text">Impact</span>
                </h1>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                I combine deep technical expertise with a passion for user-centered design to ship products that solve critical problems and create devoted customers.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-right" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="gradient-primary text-white border-0 pulse-glow magnetic-effect"
                  onClick={() => {
                    const element = document.getElementById('blog');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white magnetic-effect"
                  onClick={() => {
                    const element = document.getElementById('timeline');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Read My Story
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={600}>
              <div className="flex items-center space-x-4 pt-8">
                <div className="h-px bg-gradient-to-r from-primary to-accent flex-1"></div>
                <span className="text-sm text-muted-foreground font-mono">scroll to explore</span>
                <ArrowDown className="h-4 w-4 text-primary animate-bounce" />
              </div>
            </AnimatedSection>
          </div>

          {/* Enhanced Profile & Role Display */}
          <AnimatedSection animation="scale" delay={300} className="relative">
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Background Code Pattern with shimmer */}
              <div className="absolute inset-0 code-pattern opacity-10 rounded-2xl shimmer"></div>

              {/* Main Profile Area */}
              <div className="text-center space-y-6 z-10">
                {/* Profile Image with Dynamic Gradient Border */}
                <div className="relative mx-auto">
                  <div className={`w-40 h-40 bg-gradient-to-r ${roles[currentRole].color} rounded-full p-1 pulse-glow transition-all duration-1000`}>
                    <img
                      src="/images/headshot.png"
                      alt="Professional headshot"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>

                  {/* Role Icon Overlay with morphing animation */}
                  <div className={`absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r ${roles[currentRole].color} rounded-full flex items-center justify-center transition-all duration-1000 morphing-blob`}>
                    <CurrentIcon className="h-8 w-8 text-white" />
                  </div>

                  {/* Enhanced Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full floating-animation opacity-60"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full floating-animation opacity-40" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-8 -left-8 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full floating-animation opacity-50" style={{ animationDelay: '0.5s' }}></div>
                </div>

                <div className="space-y-2 progressive-reveal">
                  <div className="progressive-reveal-content">
                    <h3 className="text-3xl font-bold gradient-text transition-all duration-500">
                      {roles[currentRole].title}
                    </h3>
                    <p className="text-muted-foreground font-mono">
                      {roles[currentRole].subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Wireframe Elements */}
              <div className="absolute top-8 left-8 w-16 h-16 border-2 border-primary/30 rounded-lg floating-animation"></div>
              <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-accent/30 rounded-full floating-animation" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-1/2 left-4 w-2 h-8 bg-primary/20 rounded-full floating-animation" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 right-4 w-2 h-8 bg-accent/20 rounded-full floating-animation" style={{ animationDelay: '2s' }}></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
