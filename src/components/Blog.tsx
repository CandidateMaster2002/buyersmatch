import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import AnimatedText from './AnimatedText';

const Blog: React.FC = () => {
    const navigate = useNavigate();

    // Duplicate the blogs to ensure a smooth infinite loop
    const loopedBlogs = [...siteConfig.blogs, ...siteConfig.blogs, ...siteConfig.blogs];

    return (
        <section id="blogs" className="py-24 bg-[#e8f7f7] scroll-mt-24 overflow-hidden">
            <div className="container mx-auto px-4 mb-16">
                <div className="text-center">
                    <AnimatedText
                        text="Expert Insights & News"
                        className="text-4xl md:text-6xl font-black text-gray-900"
                    />
                </div>
            </div>

            {/* Scrolling Container */}
            <div className="relative group cursor-grab active:cursor-grabbing overflow-hidden">
                <motion.div
                    className="flex gap-8 px-4"
                    drag="x"
                    dragConstraints={{ right: 0, left: -2400 }}
                    animate={{
                        x: [0, -1600],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 60,
                            ease: "linear",
                        },
                    }}
                    whileHover={{ transition: { duration: 0 } }}
                    whileDrag={{ transition: { duration: 0 } }}
                >
                    {loopedBlogs.map((blog: any, index: number) => (
                        <div
                            key={`${blog.id}-${index}`}
                            className="flex-shrink-0 w-[380px] bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col pointer-events-none group-active:pointer-events-none"
                        >
                            {/* Image Section */}
                            <div className="aspect-[16/10] bg-gray-100 flex items-center justify-center relative overflow-hidden pointer-events-none">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-700 pointer-events-none select-none"
                                    onDragStart={(e) => e.preventDefault()}
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-500">
                                    {blog.date}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow pointer-events-auto">
                                <h3 className="text-xl font-black mb-4 text-gray-900 leading-tight group-hover:text-[#29b8bd] transition-colors line-clamp-2">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                                    {blog.excerpt}
                                </p>
                                <button
                                    onClick={() => navigate(`/blog/${blog.id}`)}
                                    className="mt-auto w-full py-4 rounded-xl border-2 border-gray-100 font-bold text-[#29b8bd] hover:bg-[#29b8bd] hover:text-white hover:border-[#29b8bd] transition-all duration-300 flex items-center justify-center group/btn"
                                >
                                    Read Full Story
                                    <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Fades */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#e8f7f7] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#e8f7f7] to-transparent z-10 pointer-events-none"></div>
            </div>

            {/* View All Button */}
            <div className="container mx-auto px-4 mt-20 text-center">
                <button
                    onClick={() => navigate('/blogs')}
                    className="inline-flex items-center px-10 py-5 bg-white text-[#29b8bd] font-black rounded-3xl border-2 border-[#29b8bd]/10 hover:border-[#29b8bd] hover:shadow-2xl hover:shadow-[#29b8bd]/20 transition-all duration-300 group"
                >
                    View All Articles
                    <div className="ml-4 w-10 h-10 bg-[#29b8bd] text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </button>
            </div>
        </section>
    );
};

export default Blog;
