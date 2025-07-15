import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import { blogPosts } from '../data/blogPosts';
import { BlogPost } from '../types/blog';

const BlogSection = () => {
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getSourceLogo = (source: string) => {
    switch (source) {
      case 'github':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        );
      case 'cloudflare':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.315 12.475c-.267-.214-.62-.313-.973-.313-.351 0-.705.099-.973.313-.267.214-.417.514-.417.841 0 .326.15.626.417.841.268.214.622.313.973.313.352 0 .706-.099.973-.313.267-.215.417-.515.417-.841 0-.327-.15-.627-.417-.841zm-8.631-6.73c-.8-.8-1.886-1.245-3.026-1.245s-2.226.446-3.026 1.246c-.8.8-1.245 1.886-1.245 3.026s.446 2.226 1.245 3.026c.8.8 1.886 1.245 3.026 1.245s2.226-.446 3.026-1.245c.8-.8 1.245-1.886 1.245-3.026s-.446-2.226-1.245-3.026zm9.632 1.87c-.214-.267-.514-.417-.841-.417-.326 0-.626.15-.841.417-.214.267-.313.622-.313.973 0 .352.099.706.313.973.215.267.515.417.841.417.327 0 .627-.15.841-.417.214-.267.313-.621.313-.973 0-.351-.099-.706-.313-.973z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const renderPostCard = (post: BlogPost) => (
    <motion.article
      className="group bg-card backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 h-full flex flex-col"
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
      }}
    >
      <div className="p-8 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
          {post.isExternal && (
            <div className="flex items-center gap-2">
              {post.source && getSourceLogo(post.source)}
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </div>
          )}
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue-400 transition-colors duration-300 flex-grow">
          {post.title}
        </h3>

        <p className="text-muted-foreground mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
          <span className="mr-2">{post.isExternal ? 'Read on external site' : 'Read more'}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.article>
  );

  return (
    <section id="blog" className="py-32 px-6 bg-gradient-to-b from-background via-muted to-card">
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="text-center mb-20">
            <motion.h2
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Technical Insights
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Deep dives into product strategy, technical challenges, and lessons learned from the field
            </motion.p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <AnimatedSection key={post.id}>
              {post.isExternal ? (
                <a
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer h-full flex"
                >
                  {renderPostCard(post)}
                </a>
              ) : (
                <Link to={`/blog/${post.id}`} className="cursor-pointer h-full flex">
                  {renderPostCard(post)}
                </Link>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
