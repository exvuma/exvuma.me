import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import AnimatedSection from '@/components/AnimatedSection';
import Head from 'next/head';

const BlogPostPage = () => {
    const { postId } = useParams<{ postId: string }>();
    const post = blogPosts.find(p => p.id === postId);

    if (!post) {
        return (
            <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
                <Head>
                    <title>Post not found | Victoria Fawcett</title>
                    <meta name="robots" content="noindex" />
                </Head>
                <h1 className="text-4xl font-bold mb-4">Post not found</h1>
                <Link to="/" className="text-primary hover:underline">
                    Go back home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Head>
                <title>{post.title} | Victoria Fawcett – AI Product Manager</title>
                <meta name="description" content={post.excerpt || "Blog post by Victoria Fawcett, Engineer-turned-PM and AI Product Leader."} />
                <meta name="keywords" content={`Victoria Fawcett, AI Product Manager, Product Leader, guest experience, innovation leadership, data-driven decisions, product strategy, blog, ${post.title}`} />
                <meta property="og:title" content={post.title + ' | Victoria Fawcett'} />
                <meta property="og:description" content={post.excerpt || "Blog post by Victoria Fawcett, Engineer-turned-PM and AI Product Leader."} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://exvuma.me/posts/${post.id}`} />
                <meta property="og:image" content="/images/headshot.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.title + ' | Victoria Fawcett'} />
                <meta name="twitter:description" content={post.excerpt || "Blog post by Victoria Fawcett, Engineer-turned-PM and AI Product Leader."} />
                <meta name="twitter:image" content="/images/headshot.png" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        headline: post.title,
                        description: post.excerpt,
                        author: {
                            '@type': 'Person',
                            name: 'Victoria Fawcett',
                            jobTitle: 'Product Leader, AI Product Manager'
                        },
                        datePublished: post.date,
                        image: 'https://exvuma.me/images/headshot.png',
                        mainEntityOfPage: `https://exvuma.me/posts/${post.id}`
                    })
                }} />
            </Head>
            <Navigation />
            <div className="container mx-auto px-6 py-24 pt-32">
                <AnimatedSection animation="fade-up">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
                    >
                        <ArrowLeft size={16} />
                        Back to all posts
                    </Link>
                </AnimatedSection>
                <article>
                    <AnimatedSection animation="fade-up" delay={100}>
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4 gradient-text">
                            {post.title}
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection animation="fade-up" delay={200}>
                        <div className="flex items-center space-x-4 text-muted-foreground mb-8">
                            <span>{post.date}</span>
                            <span>&bull;</span>
                            <span>{post.readTime}</span>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection animation="fade-up" delay={300}>
                        <div className="prose prose-lg max-w-none dark:prose-invert">
                            {post.content}
                        </div>
                    </AnimatedSection>
                </article>
            </div>
        </div>
    );
};

export default BlogPostPage; 