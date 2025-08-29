import React from "react";
import { Book, User, Calendar, Users, ExternalLink, X } from "lucide-react";

export default function BookModal({ book, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between">
          <h2 className="text-xl font-bold">Book Details</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 flex gap-6">
          {book.cover_i ? (
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
              alt={book.title}
              className="w-32 h-48 object-cover rounded-lg shadow-md"
            />
          ) : (
            <div className="w-32 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <Book className="h-12 w-12 text-gray-400" />
            </div>
          )}
          <div className="flex-1 space-y-3">
            <h3 className="text-2xl font-bold">{book.title}</h3>
            {book.author_name && (
              <div className="flex items-center gap-2 text-gray-700">
                <User className="h-4 w-4" /> {book.author_name.join(", ")}
              </div>
            )}
            {book.first_publish_year && (
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="h-4 w-4" /> First published:{" "}
                {book.first_publish_year}
              </div>
            )}
            {book.publisher && (
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="h-4 w-4" /> Publisher:{" "}
                {book.publisher.slice(0, 3).join(", ")}
              </div>
            )}
            {book.language && (
              <div className="text-gray-700">
                <strong>Languages:</strong> {book.language.slice(0, 5).join(", ")}
              </div>
            )}
            {book.subject && (
              <div>
                <strong>Subjects:</strong>
                <div className="flex flex-wrap gap-1 mt-1">
                  {book.subject.slice(0, 8).map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {book.key && (
              <a
                href={`https://openlibrary.org${book.key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                <ExternalLink className="h-4 w-4" /> View on OpenLibrary
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
