
import React, { useState, useEffect } from "react";
import { BookOpen, Star, Sparkles, Heart, Zap, Crown } from "lucide-react";

export default function Header({ favorites }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [animateCount, setAnimateCount] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (favorites.length > 0) {
      setAnimateCount(true);
      setTimeout(() => setAnimateCount(false), 600);
    }
  }, [favorites.length]);

  return (
    <header className={`relative transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-purple-100' 
        : 'bg-white shadow-lg border-b border-gray-100 '
    }`}>
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden ">
        <div className="absolute -top-20 -right-32 w-96 h-96 bg-gradient-to-br from-purple-400/10 via-pink-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-blue-400/10 via-cyan-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-8 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-6 left-1/2 w-1.5 h-1.5 bg-pink-400/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative max-w-4xl mx-0.5 px-3 py-4 ">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo Section */}
          <div className="flex items-center gap-4 group">
            {/* Premium Logo Container */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
              
              {/* Logo background */}
              <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-4 rounded-2xl shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <BookOpen className="h-10 w-10 text-white drop-shadow-lg group-hover:animate-pulse" />
                
                {/* Sparkle effects */}
                <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-300 animate-spin" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
              </div>

              {/* Premium badge */}
              {/* <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg animate-bounce">
              
              </div> */}
            </div>

            {/* Enhanced Title Section */}
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm group-hover:scale-105 transition-transform duration-300">
                  Book Finder
                </h1>
                <Crown className="h-6 w-6 text-yellow-500 animate-bounce" style={{animationDelay: '0.5s'}} />
              </div>
              
              <div className="flex items-center gap-2">
                <p className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                  Discover your next great read
                </p>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>

              {/* Subtitle enhancement */}
              <div className="flex items-center gap-2 opacity-75">
                <Zap className="h-3 w-3 text-yellow-500 animate-pulse" />
                <span className="text-xs text-gray-500 font-medium">AI-Powered Literary Discovery</span>
              </div>
            </div>
          </div>

          {/* Ultra-Stylish Favorites Counter */}
          {favorites.length > 0 && (
            <div className="relative group">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 animate-pulse transition-opacity duration-300"></div>
              
              {/* Main container */}
              <div className={`relative flex items-center gap-4 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 px-6 py-4 rounded-2xl border-2 border-yellow-200/50 shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                animateCount ? 'animate-bounce scale-110' : ''
              }`}>
                
                {/* Animated star icon */}
                <div className="relative">
                  <Star className="h-6 w-6 text-yellow-600 drop-shadow-sm animate-pulse" fill="currentColor" />
                  
                  {/* Sparkle effects around star */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  
                  {/* Heart decoration */}
                  <Heart className="absolute -top-2 -left-2 h-3 w-3 text-red-400 animate-bounce" style={{animationDelay: '0.3s'}} />
                </div>

                {/* Counter with enhanced styling */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className={`text-2xl font-black bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent transition-all duration-300 ${
                      animateCount ? 'scale-125' : ''
                    }`}>
                      {favorites.length}
                    </span>
                    <Sparkles className="h-4 w-4 text-yellow-600 animate-spin" />
                  </div>
                  
                  <span className="text-sm font-bold text-yellow-700 uppercase tracking-wide">
                    {favorites.length === 1 ? 'Favorite' : 'Favorites'}
                  </span>
                </div>

                {/* Celebration confetti effect */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-yellow-400 rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-red-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-1 h-1 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>

                {/* Premium badge for favorites */}
                <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-0.5 rounded-full font-bold shadow-lg">
                  ♥ VIP
                </div>
              </div>

              {/* Hover effect particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute top-2 right-4 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-red-400 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
                <div className="absolute top-1/2 right-2 w-1 h-1 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
              </div>
            </div>
          )}
        </div>

        {/* Decorative bottom line */}
        <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full opacity-30"></div>
        
        {/* Animated progress bar effect */}
        <div className="mt-1 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
      </div>

      {/* Bottom shadow enhancement */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
    </header>

 
  );
}