import React, { useState } from 'react';
import { ReactGoogleReviews } from 'react-google-reviews';
import MagneticButton from './MagneticButton';
import AnimatedText from './AnimatedText';
import 'react-google-reviews/dist/index.css';

interface GoogleReviewsProps {
    featurableId?: string;
}

const getRelativeTime = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const diffInDays = Math.floor(diffInSeconds / 86400);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);

    if (diffInYears > 0) return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
    if (diffInMonths > 0) return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
    if (diffInDays > 0) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    return 'Just now';
};

const ReviewCard = ({ review }: { review: any }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 180;
    const shouldShowReadMore = review.comment && review.comment.length > maxLength;

    return (
        <div className="review-card-item group">
            {/* Header: Avatar, Name, Relative Date */}
            <div className="flex items-start gap-4 mb-5">
                {review.reviewer.profilePhotoUrl ? (
                    <img
                        src={review.reviewer.profilePhotoUrl}
                        alt={review.reviewer.displayName}
                        className="w-14 h-14 rounded-full object-cover border border-gray-100 shadow-sm"
                    />
                ) : (
                    <div className="w-14 h-14 rounded-full bg-[#29b8bd] flex items-center justify-center text-white font-bold text-xl uppercase shadow-sm">
                        {review.reviewer.displayName.charAt(0)}
                    </div>
                )}
                <div className="flex flex-col">
                    <h4 className="font-bold text-[#1a1a1a] text-lg leading-tight uppercase tracking-tight">
                        {review.reviewer.displayName}
                    </h4>
                    <span className="text-[#70757a] text-base font-medium">
                        {getRelativeTime(review.createTime)}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative mb-6">
                <p className={`text-[#3c4043] text-[17px] leading-[1.6] font-normal transition-all duration-300 ${!isExpanded && shouldShowReadMore ? 'line-clamp-4' : ''}`}>
                    {review.comment}
                </p>
                {shouldShowReadMore && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-2 text-[#70757a] text-[17px] font-medium hover:text-[#29b8bd] transition-colors focus:outline-none flex items-center gap-1"
                    >
                        {isExpanded ? 'Read less' : 'Read more'}
                    </button>
                )}
            </div>

            {/* Footer: Stars and Google G Logo */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                <div className="flex text-[#fabb05] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-6 h-6 ${i < review.starRating ? 'fill-current' : 'fill-gray-200'}`} viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
                <div className="w-7 h-7">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

const GoogleReviews: React.FC<GoogleReviewsProps> = ({
    featurableId = "05712950-a499-41db-a75f-ce6b5050f2cc"
}) => {
    const [visibleCount, setVisibleCount] = useState(9); // Default to roughly 3 rows on desktop

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 9);
    };

    return (
        <section id="testimonials" className="py-24 px-4 bg-white scroll-mt-24">
            <div className="container mx-auto max-w-7xl">
                <ReactGoogleReviews
                    layout="custom"
                    featurableId={featurableId}
                    renderer={(reviews) => {
                        if (!reviews || reviews.length === 0) {
                            return (
                                <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                    <div className="animate-pulse flex flex-col items-center">
                                        <div className="h-12 w-48 bg-gray-200 rounded-full mb-6"></div>
                                        <div className="h-4 w-64 bg-gray-100 rounded-full mb-2"></div>
                                        <div className="h-4 w-48 bg-gray-100 rounded-full"></div>
                                    </div>
                                    <p className="text-gray-400 mt-6 font-medium animate-pulse">Loading Google reviews...</p>
                                </div>
                            );
                        }

                        const displayedReviews = reviews.slice(0, visibleCount);
                        const hasMore = visibleCount < reviews.length;

                        return (
                            <div className="space-y-16">
                                {/* First Section: Summary Header */}
                                <div className="text-center mb-16">
                                    <AnimatedText
                                        text="Our Clients Love Us"
                                        className="text-4xl md:text-6xl font-black text-gray-900"
                                    />
                                </div>

                                {/* Second Section: Masonry Reviews */}
                                <div className="space-y-12 md:[perspective:1200px]">
                                    <div className="reviews-masonry">
                                        {displayedReviews.map((review, index) => (
                                            <div key={review.reviewId || index} className="review-card-outer">
                                                <ReviewCard review={review} />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Load More Button */}
                                    {hasMore && (
                                        <div className="mt-16 flex justify-center">
                                            <MagneticButton>
                                                <button
                                                    onClick={handleLoadMore}
                                                    className="px-10 py-4 bg-white border-2 border-gray-100 text-gray-900 font-black rounded-2xl hover:bg-gray-50 hover:border-[#29b8bd] transition-all duration-300 shadow-xl shadow-gray-200/50"
                                                >
                                                    Load More Reviews
                                                </button>
                                            </MagneticButton>
                                        </div>
                                    )}
                                </div>

                                <style>{`
                                    .reviews-masonry {
                                        columns: 1;
                                        column-gap: 1.5rem;
                                        width: 100%;
                                    }
                                    @media (min-width: 768px) {
                                        .reviews-masonry {
                                            columns: 2;
                                        }
                                    }
                                    @media (min-width: 1024px) {
                                        .reviews-masonry {
                                            columns: 3;
                                        }
                                    }
                                    .review-card-outer {
                                        break-inside: avoid;
                                        margin-bottom: 1.5rem;
                                        display: block;
                                        width: 100%;
                                    }
                                    .review-card-item {
                                        background: white;
                                        padding: 2.5rem;
                                        border-radius: 12px;
                                        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                                        border: 1px solid #e0e0e0;
                                        transition: all 0.3s ease;
                                        display: flex;
                                        flex-direction: column;
                                        position: relative;
                                        width: 100%;
                                    }
                                    .review-card-item:hover {
                                        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                                        border-color: #d0d0d0;
                                    }
                                `}</style>
                            </div>
                        );
                    }}
                />
            </div>
        </section>
    );
};

export default GoogleReviews;
