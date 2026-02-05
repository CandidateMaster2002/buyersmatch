import React from 'react';
import { useNavigate } from 'react-router-dom';
import { siteConfig } from '../config/site';

const Blog: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section id="blogs" className="py-24 px-4 bg-white scroll-mt-24">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">Expert Insights & News</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">Stay updated with the latest trends and strategies in the Australian property market.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {siteConfig.blogs.map((blog: any) => (
                        <div key={blog.id} className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col">
                            {/* Image Section */}
                            <div className="aspect-[16/10] bg-gray-100 flex items-center justify-center relative overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-500">
                                    {blog.date}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-black mb-4 text-gray-900 leading-tight group-hover:text-[#29b8bd] transition-colors line-clamp-2">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {blog.excerpt}
                                </p>
                                <button
                                    onClick={() => navigate(`/blog/${blog.id}`)}
                                    className="mt-auto w-full py-3 rounded-xl border-2 border-gray-100 font-bold text-[#29b8bd] hover:bg-[#29b8bd] hover:text-white hover:border-[#29b8bd] transition-all duration-300 flex items-center justify-center group/btn"
                                >
                                    Read Full Story
                                    <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={() => navigate('/blogs')}
                        className="px-10 py-4 rounded-2xl bg-gray-900 text-white font-black hover:bg-[#29b8bd] transition-all duration-300 shadow-xl shadow-gray-200"
                    >
                        View All Articles
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Blog;
