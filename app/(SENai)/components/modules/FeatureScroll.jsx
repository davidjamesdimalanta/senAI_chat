'use client';

import { useState, useRef } from 'react';
import FeatureCard from './FeatureCard';
import { 
  StandardFeatureModal, 
  EfficiencyFeatureModal, 
  ConnectionFeatureModal 
} from './FeatureModal';

export default function FeatureScroll() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const scrollContainerRef = useRef(null);
  
  // Enhanced features with detailed data for specific modal types
  const features = [
    {
      id: 1,
      title: 'Inclusive Intelligence',
      description: 'CONNECT WITH THOSE WHO MATTER',
      image: '/graphics/contact-lens.png',
      content: 'With Sen AI glasses and contact lenses, you\'ll never have to struggle with emotional ambiguity again.',
      callToAction: 'Learn More',
      // Additional fields for ConnectionFeatureModal
      modalType: 'connection',
      mainImage: '/graphics/contact-lens.png',
      galleryImages: [
        { src: '/graphics/cahtting.png', alt: 'Social connection' },
        { src: '/graphics/contact-cross-section.png', alt: 'Product detail' }
      ],
      technologies: [
        {
          name: 'Affective Computing™',
          description: 'SEN decodes and advises on human interactions in real-time.'
        }
      ],
      tagline: 'Because True Inclusion Means Excluding The RIGHT People.'
    },
    {
      id: 2,
      title: 'Data-Driven Advice',
      description: 'SOCIALIZE NORMALLY',
      image: '/graphics/cahtting.png',
      content: 'Sen AI analyzes millions of behavioral datasets to generate instant recommendations for acceptable behavior.',
      callToAction: 'See How It Works',
      // Additional fields for StandardFeatureModal
      modalType: 'standard',
      bulletPoints: [
        {
          title: 'Authenticity Score™',
          description: 'Tracks how well you\'re conforming to dominant social norms.'
        },
        {
          title: 'Crowd Calibration™',
          description: 'Adjusts your personality based on the person you are talking to.'
        },
        {
          title: 'Discreet Alerts™',
          description: 'Warn you if someone\'s behaviour is statistically atypical. Proceed with caution.'
        },
        {
          title: 'Auto-Avoidance™',
          description: 'Because not all interactions are worth your time.'
        }
      ]
    },
    {
      id: 3,
      title: 'Real-Time Analysis',
      description: 'SPEED UP YOUR SOCIAL GAME',
      image: '/graphics/contact-cross-section.png',
      content: 'Our AI-powered Social Efficiency Engine™ ensures you extract maximum value from every human connection.',
      callToAction: 'Try Demo',
      // Additional fields for EfficiencyFeatureModal
      modalType: 'efficiency',
      subtitle: 'Our AI-powered Social Efficiency Engine™',
      features: [
        {
          title: 'Conversational ROI',
          description: 'Prioritizes people based on their potential usefulness.'
        },
        {
          title: 'Time-to-Engagement Reduction',
          description: 'Speeds up small talk, removing unnecessary pleasantries.'
        },
        {
          title: 'Emotional Bandwidth Optimization',
          description: 'Filters out low-value emotions so you can focus on winning social interactions.'
        },
        {
          title: 'Pro Mode™',
          description: 'Get AI-generated talking points based on trending topics—never waste time forming your own opinions again.'
        }
      ]
    }
  ];

  const handleOpenModal = (feature) => {
    setSelectedFeature(feature);
  };

  const handleCloseModal = () => {
    setSelectedFeature(null);
  };
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -350,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 350,
        behavior: 'smooth'
      });
    }
  };

  // Function to determine which modal component to render based on the feature type
  const renderFeatureModal = () => {
    if (!selectedFeature) return null;
    
    switch (selectedFeature.modalType) {
      case 'connection':
        return (
          <ConnectionFeatureModal 
            feature={selectedFeature} 
            isOpen={!!selectedFeature} 
            onClose={handleCloseModal} 
          />
        );
      case 'efficiency':
        return (
          <EfficiencyFeatureModal 
            feature={selectedFeature} 
            isOpen={!!selectedFeature} 
            onClose={handleCloseModal} 
          />
        );
      case 'standard':
      default:
        return (
          <StandardFeatureModal 
            feature={selectedFeature} 
            isOpen={!!selectedFeature} 
            onClose={handleCloseModal} 
          />
        );
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-5xl font-bold text-white mb-4">MEET SEN</h2>
      </div>
    
      {/* Scrollable container */}
      <div className="relative">
        {/* Left scroll button */}
        <button 
          onClick={scrollLeft}
          className="absolute -left-10 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors md:flex hidden"
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        {/* Right scroll button */}
        <button 
          onClick={scrollRight}
          className="absolute -right-10 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors md:flex hidden"
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div 
          ref={scrollContainerRef}
          className="w-full overflow-x-auto pb-8 hide-scrollbar"
        >
          <div className="flex px-4 md:px-8 py-4" style={{ minWidth: 'min-content' }}>
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                onClick={handleOpenModal}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile scroll indicators */}
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        <div className="text-xs text-white/60">
          Swipe to view more features
        </div>
      </div>
      
      {/* Feature Modal - Now dynamically selected based on feature type */}
      {renderFeatureModal()}
      
      {/* Custom scrollbar styles */}
      <style jsx global>{`
        /* Hide scrollbar but allow scrolling */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
        
        /* Animation for modal */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
} 