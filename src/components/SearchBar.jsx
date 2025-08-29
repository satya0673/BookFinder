
import React from "react";
import { Search, Book, User, BookOpen, Filter, Sparkles } from "lucide-react";

export default function SearchBar({
  query,
  setQuery,
  searchType,
  setSearchType,
  showFilters,
  setShowFilters,
  loading,
  searchBooks,
}) {
  const handleKeyPress = (e) => e.key === "Enter" && searchBooks();

  const searchTypes = [
    { value: "title", label: "Title", icon: Book, gradient: "from-emerald-500 to-teal-600" },
    { value: "author", label: "Author", icon: User, gradient: "from-purple-500 to-pink-600" },
    { value: "subject", label: "Subject", icon: BookOpen, gradient: "from-orange-500 to-red-600" },
    { value: "general", label: "General", icon: Search, gradient: "from-blue-500 to-indigo-600" },
  ];
  
  return (
    <div className="relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
      
      <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 mb-8 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full translate-y-12 -translate-x-12"></div>
        
        {/* Search type buttons with enhanced styling */}
        <div className="flex flex-wrap gap-3 mb-6">
          {searchTypes.map(({ value, label, icon: Icon, gradient }) => (
            <button
              key={value}
              onClick={() => setSearchType(value)}
              className={`group relative flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                searchType === value
                  ? `bg-gradient-to-r ${gradient} text-white shadow-lg scale-105`
                  : "bg-gray-50/80 text-gray-700 hover:bg-white/90 hover:text-gray-900"
              }`}
            >
              {searchType === value && (
                <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse"></div>
              )}
              <Icon className={`h-5 w-5 transition-transform duration-300 ${
                searchType === value ? "animate-bounce" : "group-hover:scale-110"
              }`} />
              <span className="relative z-10">{label}</span>
              {searchType === value && (
                <Sparkles className="h-4 w-4 text-white/80 animate-spin" />
              )}
            </button>
          ))}
        </div>

        {/* Enhanced search input section */}
        <div className="flex gap-4 items-center">
          <div className="flex-1 relative group">
            {/* Input glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-sm opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400 transition-colors duration-300 group-focus-within:text-blue-500" />
              <input
                type="text"
                placeholder={`Search by ${searchType}... ✨`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full pl-12 pr-6 py-4 rounded-2xl border-2 border-gray-200/50 bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:border-blue-400 focus:ring-4 focus:ring-blue-200/30 focus:outline-none transition-all duration-300 font-medium"
              />
              
              {/* Animated typing indicator */}
              {query && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Stylish filter button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`relative px-5 py-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 group ${
              showFilters 
                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-transparent shadow-lg" 
                : "bg-white/80 border-gray-200/50 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
            }`}
          >
            <Filter className={`h-6 w-6 transition-transform duration-300 ${
              showFilters ? "rotate-180" : "group-hover:rotate-12"
            }`} />
            {showFilters && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            )}
          </button>

          {/* Premium search button */}
          <button
            onClick={searchBooks}
            disabled={loading}
            className="relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-70 disabled:scale-100 overflow-hidden group"
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            
            <div className="relative flex items-center gap-3">
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <Search className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Search</span>
                  <Sparkles className="h-4 w-4 group-hover:animate-spin" />
                </>
              )}
            </div>

            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Optional: Status indicator */}
        {query && (
          <div className="mt-4 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Ready to search for "{query}"
            </span>
          </div>
        )}
      </div>
    </div>
  );
}