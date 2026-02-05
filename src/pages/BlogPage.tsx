import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { siteConfig } from '../config/site';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const blog = siteConfig.blogs.find(b => b.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (id: string) => {
        navigate(`/#${id}`);
    };

    if (!blog) {
        return <div className="p-20 text-center">Blog post not found.</div>;
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar scrollToSection={scrollToSection} />

            <main className="py-24 px-4">
                <div className="container mx-auto max-w-4xl">
                    <button
                        onClick={() => navigate('/')}
                        className="mb-12 flex items-center text-gray-400 hover:text-[#29b8bd] transition-colors font-bold uppercase tracking-widest text-sm"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </button>

                    <div className="mb-12">
                        <div className="text-[#29b8bd] font-black mb-4 uppercase tracking-[0.2em] text-sm">{blog.date}</div>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
                            {blog.title}
                        </h1>
                        <div className="w-full aspect-video bg-gray-100 rounded-[3rem] flex items-center justify-center text-[10rem] mb-12 shadow-2xl">
                            {blog.image}
                        </div>
                    </div>

                    <div className="prose prose-xl prose-gray max-w-none">
                        <p className="text-2xl text-gray-600 font-medium leading-relaxed mb-12 italic">
                            "{blog.excerpt}"
                        </p>
                        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <h2 className="text-3xl font-black text-gray-900 mt-12 mb-6">Key Takeaways</h2>
                            <ul className="list-disc pl-6 space-y-4">
                                <li>Strategy over guessing: How to use data to your advantage.</li>
                                <li>The importance of networking with local agents.</li>
                                <li>Risk mitigation through thorough due diligence.</li>
                            </ul>
                            <p>
                                Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
};

export default BlogPage;
