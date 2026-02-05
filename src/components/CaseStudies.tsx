import React from 'react';
import { siteConfig } from '../config/site';
import houseSa from '../assets/house_sa.png';
import houseWa from '../assets/house_wa.png';
import houseQld from '../assets/house_qld.png';

const CaseStudies: React.FC = () => {
    const storyImages = [houseSa, houseWa, houseQld];

    return (
        <section id="case-studies" className="py-24 px-4 bg-gray-50 scroll-mt-24">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">Results Speak Louder</h2>
                    <p className="text-xl text-gray-500">Recent properties secured for our clients</p>
                </div>
                <div className="grid lg:grid-cols-3 gap-10">
                    {siteConfig.successStories.map((story: any, index: number) => (
                        <div key={index} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 group">
                            <div className="h-64 bg-gray-200 relative overflow-hidden">
                                <img
                                    src={storyImages[index]}
                                    alt={`${story.state} Property`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-6">
                                    <p className="font-black text-2xl uppercase tracking-widest text-white drop-shadow-md">{story.state} Property</p>
                                </div>
                                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full font-bold text-sm shadow-sm text-[#29b8bd]">
                                    {story.status}
                                </div>
                            </div>
                            <div className="p-10">
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Purchase Price</div>
                                        <div className="font-black text-2xl text-gray-900">{story.price}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Weekly Rent</div>
                                        <div className="font-black text-2xl text-gray-900">{story.rent}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Rental Yield</div>
                                        <div className="font-black text-2xl text-[#29b8bd]">{story.yield}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Opportunity</div>
                                        <div className="font-black text-2xl text-gray-900">Off Market</div>
                                    </div>
                                </div>
                                <button className="w-full mt-10 py-4 rounded-2xl border-2 border-gray-100 font-bold hover:bg-gray-50 hover:border-[#29b8bd]/20 transition-all duration-300">
                                    View Full Case Study
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
