import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import AnimatedSection from '@/components/AnimatedSection';

const BlogPostPage = () => {
    const { postId } = useParams<{ postId: string }>();
    const post = blogPosts.find(p => p.id === postId);

    if (!post) {
        return (
            <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Post not found</h1>
                <Link to="/" className="text-primary hover:underline">
                    Go back home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
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