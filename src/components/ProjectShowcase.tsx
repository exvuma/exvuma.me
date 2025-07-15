import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, User, Monitor, Link, Github, ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);
  const { ref: projectsRef, visibleItems } = useStaggeredAnimation(5, 150);

  const projects = [
    {
      id: 1,
      title: "Glince",
      category: "Hardware/Software Integration",
      description: "A revolutionary cross-platform tool that allows an optical lens to capture files from moving displays. Download files directly from displays without Internet, Bluetooth, NFC, or any network protocol required.",
      impact: "Enables offline file transfer from displays",
      technologies: ["Image Processing", "Hardware Integration", "Cross-Platform Development"],
      role: "Chief Technology Officer",
      image: "/api/placeholder/600/400",
      metrics: {
        status: "RTM Ready",
        innovation: "Patent Pending",
        confidential: "Stealth Mode"
      },
      links: {
        video: "#", // You can update this with the actual video link
        demo: null,
        github: null
      }
    },
    {
      id: 2,
      title: "Cloudflare Apps",
      category: "Web Development",
      description: "Developed for the Cloudflare Apps Platform. Implemented in JavaScript to allow users to edit and format HTML directly in the browser. App is live on the Google Chrome Store.",
      impact: "Enhanced browser-based HTML editing for users",
      technologies: ["JavaScript", "HTML", "Cloudflare Apps Platform", "Chrome Extension"],
      role: "Developer",
      image: "/api/placeholder/600/400",
      metrics: {
        platform: "Chrome Store",
        users: "Live",
        status: "Published"
      },
      links: {
        chrome: "#", // Chrome store link
        github: "#", // GitHub repository link
        demo: null
      }
    },
    {
      id: 3,
      title: "TFI Fellowship",
      category: "Non-Profit Innovation",
      description: "Non-profit firm connecting young talent seeking experience with worthy causes in need of bandwidth to innovate transformative projects. Volunteered in recruitment process and created format for technical interviews.",
      impact: "Supported talent placement and organizational innovation",
      technologies: ["Recruitment Strategy", "Process Design", "Technical Interviewing"],
      role: "Recruitment Volunteer",
      image: "/api/placeholder/600/400",
      metrics: {
        focus: "Talent",
        impact: "Social Good",
        contribution: "Process Design"
      },
      links: {
        video: "#", // Video link
        website: null,
        github: null
      }
    },
    {
      id: 4,
      title: "Joëlle Swim",
      category: "E-commerce & Branding",
      description: "A swimsuit line specializing in versatile garments for sports, swim, and daytime activities. Designed the website, assisted in completion of the business model, and conducted marketing campaigns.",
      impact: "Supported brand launch and online presence",
      technologies: ["Web Design", "HTML/CSS/JS", "Marketing Strategy", "Business Model"],
      role: "Web Designer",
      image: "/api/placeholder/600/400",
      metrics: {
        deliverable: "Website",
        scope: "Full Brand",
        role: "Design Lead"
      },
      links: {
        website: "#", // Website link
        demo: null,
        github: null
      }
    },
    {
      id: 5,
      title: "Centipede Game",
      category: "Game Development",
      description: "Video game where users score points, grow dynamically, and 'die' once lives run out from touching their own tail. Designed a fully functional Centipede game developed in C++.",
      impact: "Demonstrated game development and programming skills",
      technologies: ["C++", "Game Development", "Algorithm Design"],
      role: "Developer",
      image: "/api/placeholder/600/400",
      metrics: {
        language: "C++",
        type: "Full Game",
        status: "Complete"
      },
      links: {
        github: "#", // GitHub link
        demo: null,
        video: null
      }
    }
  ];

  const currentProject = projects[activeProject];

  const renderProjectLinks = (links: any) => {
    const linkButtons = [];

    if (links.github) {
      linkButtons.push(
        <Button key="github" size="sm" variant="outline">
          <Github className="h-4 w-4 mr-2" />
          GitHub
        </Button>
      );
    }

    if (links.video) {
      linkButtons.push(
        <Button key="video" size="sm" variant="outline">
          <ExternalLink className="h-4 w-4 mr-2" />
          Watch Video
        </Button>
      );
    }

    if (links.chrome) {
      linkButtons.push(
        <Button key="chrome" size="sm" variant="outline">
          <ExternalLink className="h-4 w-4 mr-2" />
          Chrome Store
        </Button>
      );
    }

    if (links.website) {
      linkButtons.push(
        <Button key="website" size="sm" variant="outline">
          <Link className="h-4 w-4 mr-2" />
          Visit Site
        </Button>
      );
    }

    if (linkButtons.length === 0) {
      linkButtons.push(
        <Button key="details" size="sm" variant="outline">
          <Code className="h-4 w-4 mr-2" />
          View Details
        </Button>
      );
    }

    return linkButtons;
  };

  return (
    <section id="projects" className="py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Product <span className="gradient-text reveal-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of products I've built and managed, from concept to scale,
            demonstrating the intersection of technical expertise and product vision.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Project Navigation with staggered animations */}
          <div className="lg:col-span-4 space-y-4" ref={projectsRef}>
            <AnimatedSection animation="slide-left">
              <h3 className="text-lg font-semibold mb-6 font-mono">
                {'// Featured Projects'}
              </h3>
            </AnimatedSection>

            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`stagger-fade ${visibleItems.has(index) ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card
                  className={`cursor-pointer transition-all duration-500 hover:scale-105 card-3d magnetic-effect ${activeProject === index
                      ? 'ring-2 ring-primary gradient-primary text-white transform scale-105'
                      : 'hover:border-primary/50'
                    }`}
                  onClick={() => setActiveProject(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold mb-1">{project.title}</h4>
                        <p className={`text-sm ${activeProject === index ? 'text-white/80' : 'text-muted-foreground'}`}>
                          {project.category}
                        </p>
                      </div>
                      <Badge variant={activeProject === index ? "secondary" : "outline"} className="text-xs">
                        {project.role.split(' ')[0]}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Project Details with enhanced animations */}
          <div className="lg:col-span-8">
            <AnimatedSection animation="slide-right" className="h-full">
              <Card className="h-full card-3d">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2 gradient-text">{currentProject.title}</CardTitle>
                      <Badge variant="outline" className="mb-4">{currentProject.category}</Badge>
                    </div>
                    <div className="flex space-x-2">
                      {renderProjectLinks(currentProject.links)}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Project Image with enhanced visual effects */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 shimmer"></div>
                    <Monitor className="h-16 w-16 text-primary/60 transition-all duration-500 group-hover:scale-110 group-hover:text-primary" />
                  </div>

                  {/* Description with progressive reveal */}
                  <div className="progressive-reveal">
                    <div className="progressive-reveal-content">
                      <p className="text-lg leading-relaxed">{currentProject.description}</p>
                    </div>
                  </div>

                  {/* Impact Highlight with glow effect */}
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 pulse-glow">
                    <h4 className="font-semibold text-primary mb-2">Key Impact</h4>
                    <p className="text-lg font-medium">{currentProject.impact}</p>
                  </div>

                  {/* Metrics with staggered reveal */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(currentProject.metrics).map(([key, value], index) => (
                      <AnimatedSection key={key} animation="scale" delay={index * 100}>
                        <div className="text-center card-3d p-3 rounded-lg bg-muted/50">
                          <div className="text-2xl font-bold gradient-text">{value}</div>
                          <div className="text-sm text-muted-foreground capitalize">{key}</div>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>

                  {/* Technologies with floating animation */}
                  <AnimatedSection animation="fade-up" delay={200}>
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.technologies.map((tech, index) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="font-mono magnetic-effect"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Role with icon animation */}
                  <AnimatedSection animation="slide-left" delay={300}>
                    <div className="border-t pt-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-primary floating-animation" />
                        <span className="font-medium">{currentProject.role}</span>
                      </div>
                    </div>
                  </AnimatedSection>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
