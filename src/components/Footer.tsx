import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee, Github, Linkedin, Twitter, Mail, Zap, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Fun code snippet that represents the journey
    const codeSnippet = `// Life in progress...
const victoria = {
  role: "Product Manager",
  background: "Software Engineer", 
  passion: "Building things that matter",
  coffee: "☕ Always brewing",
  vibe: "✨ Vibe-coded with love"
};`;

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
                <div className="absolute top-20 right-20 w-1 h-1 bg-accent/40 rounded-full animate-ping"></div>
                <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-primary/20 rounded-full animate-bounce"></div>
                <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-accent/50 rounded-full animate-pulse"></div>
            </div>

            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className="grid lg:grid-cols-3 gap-8 items-start">

                    {/* Left Column - Personal Touch */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">VF</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Victoria Fawcett</h3>
                        </div>

                        <p className="text-gray-300 leading-relaxed">
                            From <Code className="inline w-4 h-4 text-primary" /> to <Zap className="inline w-4 h-4 text-yellow-400" />
                            — building products with heart and hustle.
                            <br />
                            <span className="text-sm text-gray-400">
                                Powered by coffee and curiosity ☕✨
                            </span>
                        </p>

                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <Coffee className="w-4 h-4" />
                            <span>Coffee count: ∞</span>
                            <Heart className="w-4 h-4 text-red-400 ml-4" />
                            <span>Code commits: ∞</span>
                        </div>
                    </motion.div>

                    {/* Middle Column - Code Snippet */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                            <Sparkles className="w-5 h-5 text-yellow-400" />
                            <span>Current Status</span>
                        </h4>

                        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                            <pre className="text-xs text-green-400 font-mono overflow-x-auto">
                                <code>{codeSnippet}</code>
                            </pre>
                        </div>

                        <p className="text-sm text-gray-400">
                            Always learning, always building, always vibing 🚀
                        </p>
                    </motion.div>

                    {/* Right Column - Links & Contact */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h4 className="text-lg font-semibold text-white">Let's Connect</h4>

                        <div className="space-y-3">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
                                onClick={() => window.open('https://github.com/exvuma', '_blank')}
                            >
                                <Github className="w-4 h-4 mr-2" />
                                GitHub
                            </Button>

                            <Button
                                variant="ghost"
                                size="sm"
                                className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
                                onClick={() => window.open('https://linkedin.com/in/exvuma', '_blank')}
                            >
                                <Linkedin className="w-4 h-4 mr-2" />
                                LinkedIn
                            </Button>


                        </div>

                    </motion.div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    className="mt-12 pt-8 border-t border-gray-800 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                        <p className="text-sm text-gray-400">
                            © {currentYear} Victoria Fawcett. All vibes reserved.
                        </p>

                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span className="flex items-center space-x-1">
                                <span>Built with</span>
                                <Code className="w-4 h-4 text-primary" />
                                <span>React + TypeScript</span>
                            </span>
                            <span>•</span>
                            <span className="flex items-center space-x-1">
                                <span>Styled with</span>
                                <Sparkles className="w-4 h-4 text-yellow-400" />
                                <span>Tailwind CSS</span>
                            </span>
                        </div>
                    </div>

                    <div className="mt-4 text-xs text-gray-500">
                        <p>
                            From engineer to PM, but still a developer at heart 💻 → 🎯
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer; 