import React from "react";
import { Search } from "lucide-react";

export default function ErrorBox({ error, clearFilters, year, author }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
      <div className="flex items-start gap-3">
        <Search className="h-5 w-5 text-red-500 mt-1" />
        <div>
          <p className="text-red-700 font-medium mb-2">{error}</p>
          <ul className="list-disc list-inside text-sm text-red-600 space-y-1">
            <li>Check your spelling</li>
            <li>Use fewer keywords</li>
            <li>Try searching by author</li>
            <li>Switch to "General" search</li>
            <li>Remove year or author filters</li>
          </ul>
          {(year || author) && (
            <button
              onClick={clearFilters}
              className="mt-3 text-sm bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded-md"
            >
              Clear all filters and try again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
