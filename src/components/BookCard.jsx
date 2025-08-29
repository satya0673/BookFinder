// import React from "react";
// import { Book, User, Calendar, Users, Star } from "lucide-react";

// export default function BookCard({ book, toggleFavorite, isFavorite, openBook }) {
//   return (
//     <div
//       className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 cursor-pointer group"
//       onClick={() => openBook(book)}
//     >
//       <div className="relative mb-4">
//         {book.cover_i ? (
//           <img
//             src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
//             alt={book.title}
//             className="w-full h-64 object-cover rounded-lg shadow-md"
//           />
//         ) : (
//           <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
//             <Book className="h-16 w-16 text-gray-400" />
//           </div>
//         )}
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             toggleFavorite(book);
//           }}
//           className={`absolute top-3 right-3 p-2 rounded-full shadow-lg ${
//             isFavorite ? "bg-yellow-400 text-white" : "bg-white text-gray-600"
//           }`}
//         >
//           <Star className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
//         </button>
//       </div>

//       <h3 className="font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-blue-600">
//         {book.title}
//       </h3>

//       <div className="text-sm text-gray-600 mt-2 space-y-1">
//         {book.author_name && (
//           <div className="flex items-center gap-2">
//             <User className="h-4 w-4" /> {book.author_name.slice(0, 2).join(", ")}
//           </div>
//         )}
//         {book.first_publish_year && (
//           <div className="flex items-center gap-2">
//             <Calendar className="h-4 w-4" /> {book.first_publish_year}
//           </div>
//         )}
//         {book.publisher && (
//           <div className="flex items-center gap-2">
//             <Users className="h-4 w-4" /> {book.publisher[0]}
//           </div>
//         )}
//       </div>

//       {book.subject && (
//         <div className="flex flex-wrap gap-1 mt-2">
//           {book.subject.slice(0, 2).map((s, idx) => (
//             <span
//               key={idx}
//               className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
//             >
//               {s}
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import { Book, User, Calendar, Users, Star, Sparkles, Eye, Heart, BookOpen, Award } from "lucide-react";

export default function BookCard({ book, toggleFavorite, isFavorite, openBook }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(book);
  };

  const handleCardClick = () => {
    openBook(book);
  };

  return (
    <div
      className="group relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02] hover:-translate-y-2 border border-white/20 overflow-hidden"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-4 right-6 w-1 h-1 bg-blue-400/40 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-8 left-4 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-6 right-4 w-1 h-1 bg-pink-400/40 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative p-6 sm:p-8">
        {/* Enhanced Book Cover Section */}
        <div className="relative mb-6">
          <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-400/20 via-transparent to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            
            {book.cover_i && !imageError ? (
              <div className="relative">
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={book.title}
                  className={`w-full h-48 sm:h-64 object-cover transition-all duration-700 group-hover:scale-110 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse"></div>
                )}
              </div>
            ) : (
              <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center relative group-hover:from-blue-200 group-hover:via-purple-200 group-hover:to-pink-200 transition-all duration-500">
                <Book className="h-16 w-16 sm:h-20 sm:w-20 text-gray-400 group-hover:text-gray-500 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
              </div>
            )}

            {/* Enhanced overlay on hover */}
            <div className={`absolute inset-0 bg-black/20 backdrop-blur-[1px] flex items-center justify-center transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                <Eye className="h-6 w-6 text-gray-700" />
              </div>
            </div>
          </div>

          {/* Premium Favorite Button */}
          <button
            onClick={handleFavoriteClick}
            className={`absolute -top-2 -right-2 p-3 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-110 border-2 ${
              isFavorite 
                ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-yellow-300 shadow-yellow-400/30" 
                : "bg-white/95 backdrop-blur-sm text-gray-600 border-gray-200 hover:bg-yellow-50 hover:border-yellow-300 hover:text-yellow-600"
            }`}
          >
            <Star 
              className={`h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 ${
                isFavorite ? "fill-current animate-pulse" : "group-hover:animate-bounce"
              }`} 
            />
            {isFavorite && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            )}
          </button>

          {/* Premium badge if it's a favorite */}
          {isFavorite && (
            <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg animate-pulse flex items-center gap-1">
              <Heart className="h-3 w-3" fill="currentColor" />
              Loved
            </div>
          )}
        </div>

        {/* Enhanced Title Section */}
        <div className="mb-4">
          <h3 className="font-black text-lg sm:text-xl text-gray-900 leading-tight group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2">
            {book.title}
          </h3>
          
          {/* Animated underline */}
          <div className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-2"></div>
        </div>

        {/* Enhanced Book Details */}
        <div className="space-y-3 text-sm text-gray-600 mb-4">
          {book.author_name && (
            <div className="flex items-center gap-3 group-hover:text-gray-800 transition-colors duration-300">
              <div className="bg-blue-100 p-2 rounded-xl group-hover:bg-blue-200 transition-colors duration-300">
                <User className="h-4 w-4 text-blue-600" />
              </div>
              <span className="font-medium flex-1 truncate">
                {book.author_name.slice(0, 2).join(", ")}
              </span>
            </div>
          )}
          
          {book.first_publish_year && (
            <div className="flex items-center gap-3 group-hover:text-gray-800 transition-colors duration-300">
              <div className="bg-purple-100 p-2 rounded-xl group-hover:bg-purple-200 transition-colors duration-300">
                <Calendar className="h-4 w-4 text-purple-600" />
              </div>
              <span className="font-medium">
                {book.first_publish_year}
              </span>
            </div>
          )}
          
          {book.publisher && (
            <div className="flex items-center gap-3 group-hover:text-gray-800 transition-colors duration-300">
              <div className="bg-pink-100 p-2 rounded-xl group-hover:bg-pink-200 transition-colors duration-300">
                <Users className="h-4 w-4 text-pink-600" />
              </div>
              <span className="font-medium flex-1 truncate">
                {book.publisher[0]}
              </span>
            </div>
          )}
        </div>

        {/* Enhanced Subject Tags */}
        {book.subject && (
          <div className="flex flex-wrap gap-2">
            {book.subject.slice(0, 2).map((subject, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-semibold rounded-full border border-blue-200/50 group-hover:from-blue-200 group-hover:to-purple-200 group-hover:scale-105 transition-all duration-300"
              >
                <BookOpen className="h-3 w-3" />
                {subject.length > 15 ? `${subject.substring(0, 15)}...` : subject}
              </span>
            ))}
            
            {book.subject.length > 2 && (
              <span className="inline-flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 text-xs font-semibold rounded-full border border-gray-200/50 group-hover:scale-105 transition-all duration-300">
                <Sparkles className="h-3 w-3" />
                +{book.subject.length - 2} more
              </span>
            )}
          </div>
        )}

        {/* Premium Action Buttons - Mobile Optimized */}
        <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Award className="h-3 w-3" />
            <span>Premium Book</span>
          </div>
          
          <button
            onClick={handleCardClick}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Eye className="h-3 w-3" />
            <span className="hidden sm:inline">View Details</span>
            <span className="sm:hidden">View</span>
          </button>
        </div>
      </div>

      {/* Bottom gradient decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-yellow-200/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}