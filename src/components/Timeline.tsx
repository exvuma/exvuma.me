
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, User, ArrowRight, Briefcase, GraduationCap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { ref: timelineRef, visibleItems: staggeredItems } = useStaggeredAnimation(8, 200);
  const timelineData = [
    {
      id: 1,
      year: "2010-2015",
      role: "Bachelor of Science - Electrical Engineering",
      company: "UCLA",
      type: "education",
      description: "Specialized in Computer Science within the Electrical Engineering program, complemented by a Tech Breadth in Business Management to establish a strong foundation in both technical and business domains.",
      skills: ["Electrical Engineering", "Computer Science", "Business Management", "Technical Foundation"],
      icon: GraduationCap,
      achievement: "Graduated with a unique blend of deep technical expertise and strategic business acumen."
    },
    {
      id: 2,
      year: "2016-2018",
      role: "Senior Support Engineer",
      company: "Cloudflare",
      type: "engineering",
      description: "Pioneered support processes for a 24/7 global team, managed on-call incident response, and led the development of internal tools to boost team efficiency.",
      skills: ["Incident Response", "Process Optimization", "Internal Tooling", "SLA Management"],
      icon: Code,
      achievement: "Increased automated ticket responses by 200/week and improved agent resolve rate by 2 minutes/ticket."
    },
    {
      id: 3,
      year: "2018-2020",
      role: "Full Stack Product Engineer",
      company: "Cloudflare",
      type: "engineering",
      description: "Drove the design and development of the CLI, UI, and backend for Cloudflare Workers (now Pages), significantly enhancing the developer experience.",
      skills: ["Full Stack Development", "Product Engineering", "Developer Experience", "User Testing"],
      icon: Code,
      achievement: "Built and launched Cloudflare Zoneless (now Pages), a key component of the developer platform."
    },
    {
      id: 4,
      year: "2020",
      role: "Founding Product Manager",
      company: "Coder",
      type: "transition",
      description: "Transitioned to product management, defining Coder's inaugural product roadmap and spearheading the strategy for penetrating the enterprise market.",
      skills: ["Product Strategy", "Roadmap Development", "Enterprise GTM", "FOSS to Enterprise"],
      icon: ArrowRight,
      achievement: "Crafted and delivered the first 3-month roadmap and a comprehensive enterprise strategy."
    },
    {
      id: 5,
      year: "2021-2022",
      role: "Product Manager",
      company: "GitHub",
      type: "product",
      description: "Led initiatives to unify GitHub's internal developer experience with GitHub Enterprise Server (GHES), defining the roadmap for Dependabot and internal testing.",
      skills: ["Developer Experience", "Enterprise Solutions", "Feature Prioritization", "Roadmap Definition"],
      icon: User,
      achievement: "Acquired 60 enterprise customers by launching Dependabot updates on GHES."
    },
    {
      id: 6,
      year: "2022",
      role: "Senior Product Manager",
      company: "FireHydrant",
      type: "product",
      description: "Shaped the long and short-term product strategy for incident management, aligning with marketing for go-to-market execution and sales enablement.",
      skills: ["Product Strategy", "Incident Management", "Go-to-Market Strategy", "Sales Enablement"],
      icon: User,
      achievement: "Defined and executed a comprehensive incident management product strategy."
    },
    {
      id: 7,
      year: "2023-2024",
      role: "Founding PM - Roamly",
      company: "Outdoorsy",
      type: "product",
      description: "As the Founding Product Manager for Roamly, I defined and launched new insurance products, working directly with founders on the vision and strategy to secure investor funding.",
      skills: ["Product Innovation", "Insurtech", "Founder Collaboration", "Investment Strategy"],
      icon: Briefcase,
      achievement: "Successfully launched 3 new insurance products and onboarded over 200 users to Roamly Care."
    },
    {
      id: 8,
      year: "2024-Present",
      role: "Senior Product Manager",
      company: "Outdoorsy",
      type: "product",
      description: "Leading AI/ML product initiatives, including a new ranking model that significantly boosts conversion rates and revenue through data-driven enhancements.",
      skills: ["AI/ML Product Strategy", "Machine Learning Models", "Revenue Growth", "Data-Driven Decisions"],
      icon: User,
      achievement: "Drove $1.2M-$3M in projected annualized revenue by increasing booking sealed CVR by 5%."
    }
  ];


  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const getItemColor = (type: string) => {
    switch (type) {
      case 'education': return 'from-emerald-500 to-teal-500';
      case 'engineering': return 'from-blue-500 to-cyan-500';
      case 'transition': return 'from-purple-500 to-pink-500';
      case 'product': return 'from-pink-500 to-rose-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'education': return 'Education';
      case 'engineering': return 'Engineering';
      case 'transition': return 'Transition';
      case 'product': return 'Product';
      default: return 'Unknown';
    }
  };

  return (
    <section id="timeline" className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-b from-background via-muted to-card">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection animation="fade-up" className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text reveal-text">Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            From electrical engineering to product leadership - a timeline of growth, learning,
            and the evolution from engineer to AI-driven product strategist.
          </p>
        </AnimatedSection>

        <div className="relative" ref={timelineRef}>
          {/* Mobile-optimized Timeline Line */}
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 md:w-1 bg-gradient-to-b from-primary via-accent to-primary h-full shimmer"></div>

          <div className="space-y-6 md:space-y-12">
            {timelineData.map((item, index) => {
              const IconComponent = item.icon;
              const isVisible = visibleItems.has(item.id.toString());
              const isStaggerVisible = staggeredItems.has(index);
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  id={item.id.toString()}
                  className={`timeline-item relative flex ${
                    // Mobile: always left-aligned, Desktop: alternating
                    'md:' + (isLeft ? 'justify-end' : 'justify-start')
                    }`}
                >
                  {/* Mobile-optimized Timeline Node */}
                  <div className={`absolute left-3 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 md:w-16 md:h-16 rounded-full bg-background border-2 md:border-4 border-primary flex items-center justify-center z-10 transition-all duration-1000 ${isStaggerVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
                    <div className={`w-3 h-3 md:w-8 md:h-8 rounded-full bg-gradient-to-r ${getItemColor(item.type)} flex items-center justify-center pulse-glow`}>
                      <IconComponent className="h-2 w-2 md:h-4 md:w-4 text-white" />
                    </div>
                  </div>

                  {/* Mobile-optimized Content Card */}
                  <div className={`w-full pl-12 md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className={`transition-all duration-1000 card-3d narrative-indicator ${isVisible ? 'opacity-100 translate-y-0 active' : 'opacity-0 translate-y-8'
                      } ${isLeft ? 'md:text-right' : 'md:text-left'}`}
                      style={{ transitionDelay: `${index * 200}ms` }}>
                      <CardContent className="p-4 md:p-6">
                        <div className={`flex flex-col md:flex-row items-start md:items-center ${isLeft ? 'md:justify-end' : 'md:justify-start'} mb-3 md:mb-4 gap-2`}>
                          <Badge variant="outline" className="text-xs magnetic-effect">
                            {getTypeLabel(item.type)}
                          </Badge>
                          <span className="text-lg md:text-2xl font-bold gradient-text reveal-text">{item.year}</span>
                        </div>

                        <h3 className="text-lg md:text-xl font-bold mb-1">{item.role}</h3>
                        <p className="text-primary font-medium mb-2 md:mb-3">{item.company}</p>

                        {/* Condensed description for mobile */}
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4 md:block">
                          {item.description}
                        </p>

                        {/* Achievement with glow effect */}
                        <div className="bg-primary/10 border border-primary/20 rounded-lg p-2 md:p-3 mb-3 md:mb-4 pulse-glow">
                          <p className="text-xs md:text-sm font-medium text-primary">{item.achievement}</p>
                        </div>

                        {/* Condensed skills for mobile */}
                        <div className={`flex flex-wrap gap-1 md:gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                          {item.skills.slice(0, 3).map((skill, skillIndex) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-xs font-mono magnetic-effect"
                              style={{
                                animationDelay: `${(index * 200) + (skillIndex * 50)}ms`,
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'all 0.5s ease'
                              }}
                            >
                              {skill}
                            </Badge>
                          ))}
                          {item.skills.length > 3 && (
                            <Badge variant="secondary" className="text-xs font-mono">
                              +{item.skills.length - 3}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Summary */}
        <AnimatedSection animation="scale" delay={600} className="mt-8 md:mt-16 text-center">
          <Card className="max-w-2xl mx-auto card-3d">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 gradient-text reveal-text">The Transformation</h3>
              <p className="text-sm md:text-lg leading-relaxed text-muted-foreground">
                Victoria's unique journey from electrical engineering through full-stack development to strategic
                product management showcases a rare combination of technical depth and business acumen. Her experience
                spans from incident management at scale to AI/ML product innovation, making her uniquely positioned
                to build products that are both technically sophisticated and commercially successful.
              </p>
              <div className="mt-4 md:mt-6 flex flex-wrap justify-center gap-2 md:gap-3">
                <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs md:text-sm">
                  $5M+ Revenue Impact
                </Badge>
                <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs md:text-sm">
                  AI/ML Innovation
                </Badge>
                <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs md:text-sm">
                  Founding PM Experience
                </Badge>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Timeline;
