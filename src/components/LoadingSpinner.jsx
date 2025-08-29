import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="bg-white rounded-lg shadow-lg p-6 flex items-center gap-3">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
        <span className="text-gray-700">Searching for books...</span>
      </div>
    </div>
  );
}
