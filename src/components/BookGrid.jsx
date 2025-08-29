// import React from "react";
// import BookCard from "./BookCard";

// export default function BookGrid({ books, toggleFavorite, favorites, openBook }) {
//   if (!books.length) return null;

//   return (
//     <>
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-xl font-semibold text-gray-800">
//           Found {books.length} books
//         </h2>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {books.map((book, i) => (
//           <BookCard
//             key={i}
//             book={book}
//             toggleFavorite={toggleFavorite}
//             isFavorite={favorites.some((f) => f.key === book.key)}
//             openBook={openBook}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { BookOpen, Search, Sparkles, Grid, List, Eye, TrendingUp, Star } from "lucide-react";
import BookCard from "./BookCard";

export default function BookGrid({ books, toggleFavorite, favorites, openBook }) {
  const [viewMode, setViewMode] = useState("grid");
  const [isLoaded, setIsLoaded] = useState(false);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    if (books.length > 0) {
      setIsLoaded(false);
      const timer = setTimeout(() => setIsLoaded(true), 100);
      return () => clearTimeout(timer);
    }
  }, [books]);

  if (!books.length) return null;

  const favoriteCount = favorites.length;
  const averageYear = books.reduce((sum, book) => {
    const year = book.first_publish_year || new Date().getFullYear();
    return sum + year;
  }, 0) / books.length;

  return (
    <div className="relative">
      {/* Enhanced Header Section */}
      <div className="relative mb-8">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl opacity-60 blur-sm"></div>

        <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

            {/* Results Info with Enhanced Styling */}
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl shadow-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Found {books.length} books
                  </h2>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Search className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">Search Results</span>
                  </div>

                  {favoriteCount > 0 && (
                    <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
                      <Star className="h-3 w-3 text-yellow-600" fill="currentColor" />
                      <span className="text-yellow-700 font-semibold text-xs">
                        {favoriteCount} favorited
                      </span>
                    </div>
                  )}

                  <button
                    onClick={() => setShowStats(!showStats)}
                    className="flex items-center gap-1 text-gray-500 hover:text-purple-600 transition-colors duration-200"
                  >
                    <TrendingUp className="h-3 w-3" />
                    <span className="text-xs font-medium">Stats</span>
                  </button>
                </div>

                {/* Expandable Stats */}
                {showStats && (
                  <div className="mt-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200/50">
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="text-center">
                        <div className="font-bold text-blue-600">Avg Year</div>
                        <div className="text-gray-700">{Math.round(averageYear)}</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-purple-600">Total Found</div>
                        <div className="text-gray-700">{books.length}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* View Mode Toggle - Mobile Friendly */}
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-2xl shadow-inner">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${viewMode === "grid"
                  ? "bg-white shadow-md text-blue-600 scale-105"
                  : "text-gray-600 hover:text-gray-800"
                  }`}
              >
                <Grid className="h-4 w-4" />
                <span className="hidden sm:inline">Grid</span>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${viewMode === "list"
                  ? "bg-white shadow-md text-purple-600 scale-105"
                  : "text-gray-600 hover:text-gray-800"
                  }`}
              >
                <List className="h-4 w-4" />
                <span className="hidden sm:inline">List</span>
              </button>
            </div>
          </div>

          {/* Decorative bottom line */}
          <div className="mt-4 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-30"></div>
        </div>
      </div>

      {/* Enhanced Book Grid/List */}
      <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {viewMode === "grid" ? (
          // Responsive Grid Layout
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
            {books.map((book, i) => (
              <div
                key={i}
                className="relative group transform transition-all duration-500 ease-out hover:scale-105"
                style={{
                  animationDelay: `${i * 50}ms`,
                  animation: isLoaded ? "fadeInUp 0.6s ease-out forwards" : "none",
                }}
              >
                {/* Gradient glow wrapper */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-70 group-hover:opacity-100 transition-all duration-500 blur-md group-hover:blur-lg"></div>

                {/* Card container with glassmorphism */}
                <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-white/20 rounded-xl m-[2px] overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <BookCard
                    book={book}
                    toggleFavorite={toggleFavorite}
                    isFavorite={favorites.some((f) => f.key === book.key)}
                    openBook={openBook}
                  />

                  {/* Sparkle effects on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-3 right-3 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
                  </div>

                  {/* Decorative gradient bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
                </div>
              </div>
            ))}
          </div>

        ) : (
          // List View for Mobile/Compact Display
          // <div className="space-y-4">
          //   {books.map((book, i) => (
          //     <div
          //       key={i}
          //       className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          //       style={{
          //         animationDelay: `${i * 30}ms`,
          //         animation: isLoaded ? 'slideInLeft 0.5s ease-out forwards' : 'none'
          //       }}
          //     >
          //       <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100 p-4 hover:shadow-xl transition-all duration-300">
          //         <div className="flex gap-4">
          //           {/* Book thumbnail */}
          //           <div className="flex-shrink-0 w-16 h-20 sm:w-20 sm:h-28 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center shadow-md">
          //             <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
          //           </div>

          //           {/* Book info */}
          //           <div className="flex-1 min-w-0">
          //             <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 line-clamp-2 h-[3rem]">
          //               {book.title}
          //             </h3>
          //             {book.author_name && (
          //               <p className="text-gray-600 text-xs sm:text-sm mb-2 line-clamp-1">
          //                 by {book.author_name[0]}
          //               </p>
          //             )}
          //             <div className="flex items-center justify-between">
          //               <span className="text-xs text-gray-500">
          //                 {book.first_publish_year || 'Unknown'}
          //               </span>
          //               <div className="flex gap-2">
          //                 <button
          //                   onClick={() => toggleFavorite(book)}
          //                   className={`p-2 rounded-lg transition-all duration-200 ${favorites.some((f) => f.key === book.key)
          //                     ? "text-red-500 bg-red-50 hover:bg-red-100"
          //                     : "text-gray-400 hover:text-red-500 hover:bg-red-50"
          //                     }`}
          //                 >
          //                   <Star className="h-4 w-4" fill={favorites.some((f) => f.key === book.key) ? "currentColor" : "none"} />
          //                 </button>
          //                 <button
          //                   onClick={() => openBook(book)}
          //                   className="p-2 text-blue-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
          //                 >
          //                   <Eye className="h-4 w-4" />
          //                 </button>
          //               </div>
          //             </div>
          //           </div>
          //         </div>
          //       </div>
          //     </div>
          //   ))}
          // </div>
          <div className="space-y-4">
  {books.map((book, i) => (
    <div
      key={i}
      className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      style={{
        animationDelay: `${i * 30}ms`,
        animation: isLoaded ? 'slideInLeft 0.5s ease-out forwards' : 'none'
      }}
    >
      {/* Multi-layer gradient border wrapper */}
      <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-rose-400 via-violet-500 via-blue-500 via-teal-500 to-emerald-400 shadow-lg hover:shadow-xl transition-all duration-300">
        
        {/* Inner border layer for extra depth */}
        <div className="p-[1px] rounded-3xl bg-gradient-to-br from-pink-300 via-purple-300 via-indigo-300 to-cyan-300">
          
          {/* Main content card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-md border border-white/50 p-4 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-50/30 via-violet-50/30 to-blue-50/30 opacity-50"></div>
            
            <div className="flex gap-4 relative z-10">
              {/* Enhanced Book thumbnail with gradient border */}
              <div className="flex-shrink-0 relative">
                <div className="p-[1px] rounded-xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
                  <div className="w-16 h-20 sm:w-20 sm:h-28 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center shadow-md">
                    <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
                  </div>
                </div>
                {/* Small decorative dot */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-pink-400 to-violet-500 rounded-full"></div>
              </div>

              {/* Book info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 line-clamp-2 h-[3rem]">
                  {book.title}
                </h3>
                {book.author_name && (
                  <p className="text-gray-600 text-xs sm:text-sm mb-2 line-clamp-1">
                    by {book.author_name[0]}
                  </p>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {book.first_publish_year || 'Unknown'}
                  </span>
                  <div className="flex gap-2">
                    {/* Enhanced buttons with gradient borders */}
                    <div className="p-[1px] rounded-lg bg-gradient-to-r from-red-300 to-pink-400">
                      <button
                        onClick={() => toggleFavorite(book)}
                        className={`p-2 rounded-lg transition-all duration-200 ${
                          favorites.some((f) => f.key === book.key)
                            ? "text-red-500 bg-red-50 hover:bg-red-100"
                            : "text-gray-400 hover:text-red-500 hover:bg-red-50 bg-white"
                        }`}
                      >
                        <Star className="h-4 w-4" fill={favorites.some((f) => f.key === book.key) ? "currentColor" : "none"} />
                      </button>
                    </div>
                    
                    <div className="p-[1px] rounded-lg bg-gradient-to-r from-blue-300 to-cyan-400">
                      <button
                        onClick={() => openBook(book)}
                        className="p-2 text-blue-500 hover:text-blue-600 hover:bg-blue-50 bg-white rounded-lg transition-all duration-200"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-400 via-violet-500 via-blue-500 via-teal-500 to-emerald-400 opacity-60"></div>
            
            {/* Side accent dots */}
            <div className="absolute left-1 top-1/2 w-1 h-6 bg-gradient-to-b from-rose-400 to-violet-500 rounded-full opacity-70"></div>
            <div className="absolute right-1 top-1/2 w-1 h-6 bg-gradient-to-b from-blue-500 to-emerald-400 rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
          
        )}
      </div>

      {/* Loading Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Floating Action Indicator */}
      {books.length > 12 && (
        <div className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-xl text-sm font-medium animate-bounce z-10">
          <Sparkles className="h-4 w-4 inline mr-1" />
          {books.length} results
        </div>
      )}
    </div>
  );
}