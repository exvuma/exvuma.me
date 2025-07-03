import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
// import ProjectShowcase from '@/components/ProjectShowcase';
import Timeline from '@/components/Timeline';
import BlogSection from '@/components/BlogSection';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <BlogSection />
      {/* <ProjectShowcase /> */}
      <Timeline />
      <Contact />
    </div>
  );
};

export default Index;
