import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
// import ProjectShowcase from '@/components/ProjectShowcase';
import Timeline from '@/components/Timeline';
import BlogSection from '@/components/BlogSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>Victoria Fawcett – Product Leader driving AI innovation, data-driven strategies, and exceptional user experiences.</title>
        <meta name="description" content="Victoria Fawcett, Engineer-turned-Product Manager and AI Product Leader, driving innovation, guest experience, and data-driven product strategy. Expertise in full-stack engineering, SEO experimentation, and technical leadership." />
        <meta name="keywords" content="Victoria Fawcett, AI Product Manager, Product Leader, guest experience, innovation leadership, data-driven decisions, product strategy, full-stack engineering, SEO experimentation, product management, AI innovation" />
        <meta property="og:title" content="Victoria Fawcett – Product Leader driving AI innovation, data-driven strategies, and exceptional user experiences." />
        <meta property="og:description" content="Engineer-turned-Product Manager and AI Product Leader, driving innovation, guest experience, and data-driven product strategy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://exvuma.me/" />
        <meta property="og:image" content="/images/headshot.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Victoria Fawcett – Product Leader driving AI innovation, data-driven strategies, and exceptional user experiences." />
        <meta name="twitter:description" content="Engineer-turned-Product Manager and AI Product Leader, driving innovation, guest experience, and data-driven product strategy." />
        <meta name="twitter:image" content="/images/headshot.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Victoria Fawcett',
            jobTitle: 'Product Leader, AI Product Manager',
            description: 'Product Leader driving AI innovation, data-driven strategies, and exceptional user experiences.',
            url: 'https://exvuma.me/',
            sameAs: [
              'https://www.linkedin.com/in/victoriafawcett',
              'https://exvuma.substack.com/'
            ],
            image: 'https://exvuma.me/images/headshot.png',
            worksFor: {
              '@type': 'Organization',
              name: 'Outdoorsy'
            },
            knowsAbout: [
              'AI Product Management',
              'Product Strategy',
              'Innovation Leadership',
              'Guest Experience',
              'Full-Stack Engineering',
              'SEO Experimentation',
              'Data-Driven Decisions'
            ]
          })
        }} />
      </Head>
      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroSection tagline="Victoria Fawcett – Product Leader driving AI innovation, data-driven strategies, and exceptional user experiences." />
        <BlogSection />
        {/* <ProjectShowcase /> */}
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
