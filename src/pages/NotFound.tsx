import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';

const NotFound: React.FC = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Add search functionality here
  };

  // Generate random positions for stars
  const stars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 60,
    size: Math.random() * 3 + 2,
  }));

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden flex flex-col">
      {/* Background and Stars */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
        {/* Crescent Moon */}
        <div className="absolute top-4 left-4 md:top-12 md:left-12">
          <div className="w-12 h-12 md:w-20 md:h-20 relative">
            <div className="w-full h-full rounded-full bg-gray-300 relative overflow-hidden">
              <div className="absolute top-0.5 left-3 w-9 h-9 md:top-1 md:left-4 md:w-16 md:h-16 rounded-full bg-gray-900"></div>
            </div>
          </div>
        </div>

        {/* Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-gray-400 opacity-60"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pb-20 md:pb-32">
        <div className="text-center mb-8">
          {/* 404 Text */}
          <div className="flex items-center justify-center mb-6">
            <h1 className="text-6xl md:text-9xl lg:text-[12rem] font-light text-white tracking-wider">
              404
            </h1>
            <div className="w-px h-20 md:h-40 lg:h-48 bg-white mx-4 md:mx-8 opacity-60"></div>
            <div className="text-left">
              <h2 className="text-xl md:text-3xl font-medium text-white mb-2">
                SORRY !
              </h2>
              <p className="text-sm md:text-xl text-gray-300 leading-relaxed max-w-xs">
                The Page You're Looking For<br />
                Was Not Found
              </p>
            </div>
          </div>

          {/* Go Back Link */}
          <button
            onClick={handleGoBack}
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-200 mb-6 md:mb-8 group text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Go Back
          </button>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative max-w-xs md:max-w-md mx-auto">
            <input
              type="text"
              placeholder="How Can We Help?"
              className="w-full px-3 py-2 md:px-4 md:py-3 pr-10 md:pr-12 bg-gray-700 bg-opacity-80 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:bg-opacity-100 transition-all duration-200 text-sm md:text-base"
            />
            <button
              type="submit"
              className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Mountain Silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-64">
        {/* Back Mountains */}
        <div className="absolute bottom-0 w-full">
          <svg
            viewBox="0 0 1200 200"
            className="w-full h-20 md:h-40"
            preserveAspectRatio="none"
          >
            <path
              d="M0,200 L0,100 L150,60 L300,120 L450,40 L600,80 L750,30 L900,90 L1050,50 L1200,100 L1200,200 Z"
              fill="#4a5568"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Middle Mountains */}
        <div className="absolute bottom-0 w-full">
          <svg
            viewBox="0 0 1200 180"
            className="w-full h-16 md:h-36"
            preserveAspectRatio="none"
          >
            <path
              d="M0,180 L0,120 L200,70 L400,110 L600,50 L800,90 L1000,40 L1200,80 L1200,180 Z"
              fill="#2d3748"
              opacity="0.8"
            />
          </svg>
        </div>

        {/* Front Mountains */}
        <div className="absolute bottom-0 w-full">
          <svg
            viewBox="0 0 1200 160"
            className="w-full h-12 md:h-32"
            preserveAspectRatio="none"
          >
            <path
              d="M0,160 L0,140 L100,90 L250,120 L400,70 L550,100 L700,60 L850,110 L1000,80 L1150,120 L1200,90 L1200,160 Z"
              fill="#1a202c"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFound;