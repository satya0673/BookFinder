// import React from "react";

// export default function Filters({
//   yearFilter,
//   setYearFilter,
//   authorFilter,
//   setAuthorFilter,
//   sortBy,
//   setSortBy,
//   clearFilters,
// }) {
//   return (
//     <div className="bg-gray-50 rounded-xl p-4 space-y-4 mb-8">
//       <div className="flex flex-wrap gap-4">
//         <div className="flex-1 min-w-48">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Publication Year
//           </label>
//           <input
//             type="number"
//             placeholder="e.g., 2020"
//             value={yearFilter}
//             onChange={(e) => setYearFilter(e.target.value)}
//             className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="flex-1 min-w-48">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Author Filter
//           </label>
//           <input
//             type="text"
//             placeholder="Filter by author"
//             value={authorFilter}
//             onChange={(e) => setAuthorFilter(e.target.value)}
//             className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="flex-1 min-w-48">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Sort By
//           </label>
//           <select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="relevance">Relevance</option>
//             <option value="title">Title A–Z</option>
//             <option value="year_desc">Newest First</option>
//             <option value="year_asc">Oldest First</option>
//           </select>
//         </div>
//       </div>
//       <button
//         onClick={clearFilters}
//         className="text-sm text-blue-600 hover:text-blue-800 font-medium"
//       >
//         Clear all filters
//       </button>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Calendar, User, ArrowUpDown, X, Filter, Sparkles, ChevronDown, RefreshCw } from "lucide-react";

export default function Filters({
  yearFilter,
  setYearFilter,
  authorFilter,
  setAuthorFilter,
  sortBy,
  setSortBy,
  clearFilters,
}) {
  const [isClearing, setIsClearing] = useState(false);

  const handleClearFilters = () => {
    setIsClearing(true);
    setTimeout(() => {
      clearFilters();
      setIsClearing(false);
    }, 300);
  };

  const sortOptions = [
    { value: "relevance", label: "Relevance", icon: "✨" },
    { value: "title", label: "Title A–Z", icon: "📝" },
    { value: "year_desc", label: "Newest First", icon: "🆕" },
    { value: "year_asc", label: "Oldest First", icon: "📚" },
  ];

  const hasActiveFilters = yearFilter || authorFilter || sortBy !== "relevance";

  return (
    <div className="relative mb-8">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 rounded-3xl blur-sm opacity-60 animate-pulse"></div>
      
      {/* Main container */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-200/30 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
        
        {/* Header with filter icon */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl shadow-lg">
            <Filter className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Smart Filters
            </h3>
            <p className="text-gray-500 text-sm">Refine your search results</p>
          </div>
          {hasActiveFilters && (
            <div className="ml-auto flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
              Active Filters
            </div>
          )}
        </div>

        {/* Filter inputs grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* Publication Year Filter */}
          <div className="group">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
              <Calendar className="h-4 w-4 text-purple-500" />
              Publication Year
              <Sparkles className="h-3 w-3 text-yellow-500 animate-spin" />
            </label>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-2xl blur-sm opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
              <input
                type="number"
                placeholder="e.g., 2024 ✨"
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="relative w-full px-4 py-4 rounded-2xl border-2 border-gray-200/50 bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-200/30 focus:outline-none transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              />
              {yearFilter && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
          </div>

          {/* Author Filter */}
          <div className="group">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
              <User className="h-4 w-4 text-blue-500" />
              Author Filter
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
            </label>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-2xl blur-sm opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
              <input
                type="text"
                placeholder="Filter by author 📖"
                value={authorFilter}
                onChange={(e) => setAuthorFilter(e.target.value)}
                className="relative w-full px-4 py-4 rounded-2xl border-2 border-gray-200/50 bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-200/30 focus:outline-none transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              />
              {authorFilter && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
          </div>

          {/* Sort By Dropdown */}
          <div className="group">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
              <ArrowUpDown className="h-4 w-4 text-pink-500" />
              Sort By
              <div className="w-1 h-1 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            </label>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-2xl blur-sm opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="relative w-full px-4 py-4 rounded-2xl border-2 border-gray-200/50 bg-white/80 backdrop-blur-sm text-gray-800 focus:border-pink-400 focus:ring-4 focus:ring-pink-200/30 focus:outline-none transition-all duration-300 font-medium shadow-lg hover:shadow-xl appearance-none cursor-pointer"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.icon} {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none group-focus-within:text-pink-500 transition-colors duration-300" />
              </div>
              {sortBy !== "relevance" && (
                <div className="absolute right-8 top-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Clear Filters Button */}
        {hasActiveFilters && (
          <div className="flex justify-center">
            <button
              onClick={handleClearFilters}
              disabled={isClearing}
              className="group relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white font-bold rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-70 overflow-hidden"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              
              <div className="relative flex items-center gap-2">
                {isClearing ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    <span>Clearing...</span>
                  </>
                ) : (
                  <>
                    <X className="h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
                    <span>Clear all filters</span>
                    <Sparkles className="h-3 w-3 group-hover:animate-spin" />
                  </>
                )}
              </div>

              {/* Button glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
            </button>
          </div>
        )}

        {/* Status indicator for no active filters */}
        {!hasActiveFilters && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              No active filters - showing all results
            </div>
          </div>
        )}

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-b-3xl opacity-50"></div>
      </div>

      {/* Floating action indicator */}
      {hasActiveFilters && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg animate-bounce flex items-center gap-1">
          <Filter className="h-3 w-3" />
          {[yearFilter, authorFilter, sortBy !== "relevance"].filter(Boolean).length}
        </div>
      )}
    </div>
  );
}
