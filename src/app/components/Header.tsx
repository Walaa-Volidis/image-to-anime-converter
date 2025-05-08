import React from 'react';

export const Header: React.FC = () => {
  return (
    <nav className="border-b relative overflow-hidden">
      {/* Anime-style gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-accent-foreground to-primary/80"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-white rounded-full blur-3xl"></div>

        {/* Anime style decorative elements */}
        <div className="absolute top-10 left-1/5 w-3 h-3 bg-white rounded-full animate-sparkle delay-300"></div>
        <div className="absolute top-20 left-1/3 w-2 h-2 bg-white rounded-full animate-sparkle delay-100"></div>
        <div className="absolute bottom-10 right-1/4 w-4 h-4 bg-white rounded-full animate-sparkle delay-500"></div>
        <div className="absolute bottom-20 right-1/2 w-2 h-2 bg-white rounded-full animate-sparkle delay-200"></div>
      </div>

      <div className="container mx-auto px-6 py-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-3 animate-float">
            {/* Custom anime-style logo */}
            <div className="relative h-12 w-12 rounded-xl bg-white/90 flex items-center justify-center shadow-lg overflow-hidden animate-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent-foreground/20"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-primary h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3.5v2m6-2v2M9 20.5v-2m6 2v-2M3.5 9h2m-2 6h2m15-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
                <circle cx="12" cy="12" r="3" strokeWidth={2} />
              </svg>
              <div className="absolute -right-1 -top-1 h-4 w-4 bg-accent-foreground rounded-full border-2 border-white animate-pulse-slow"></div>
            </div>

            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                AnimeStyler
              </h1>
              <p className="text-xs text-white/80 font-medium">
                Transform Images to Anime
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
