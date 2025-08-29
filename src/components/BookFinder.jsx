
import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import BookGrid from "./BookGrid";
import BookModal from "./BookModal";
import LoadingSpinner from "./LoadingSpinner";
import ErrorBox from "./ErrorBox";

export default function BookFinder() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchType, setSearchType] = useState("title");
  const [sortBy, setSortBy] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [yearFilter, setYearFilter] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");

  // 🔍 API call
  const searchBooks = async () => {
    if (!query.trim()) {
      setError("Please enter a search term");
      return;
    }

    setLoading(true);
    setError("");
    setBooks([]);

    try {
      let url = "";
      const q = encodeURIComponent(query);

      switch (searchType) {
        case "title":
          url = `https://openlibrary.org/search.json?title=${q}&limit=20`;
          break;
        case "author":
          url = `https://openlibrary.org/search.json?author=${q}&limit=20`;
          break;
        case "subject":
          url = `https://openlibrary.org/search.json?subject=${q}&limit=20`;
          break;
        default:
          url = `https://openlibrary.org/search.json?q=${q}&limit=20`;
      }

      if (yearFilter) url += `&first_publish_year=${yearFilter}`;

      const res = await fetch(url);
      const data = await res.json();

      if (!data.docs?.length) {
        setError("No books found. Try different search terms.");
      } else {
        setBooks(applyFiltersAndSort(data.docs.slice(0, 20)));
      }
    } catch (e) {
      setError("Something went wrong. Please check your connection.");
    }

    setLoading(false);
  };

  // 📚 Filter + Sort
  const applyFiltersAndSort = (results) => {
    if (authorFilter) {
      results = results.filter((book) =>
        book.author_name?.some((a) =>
          a.toLowerCase().includes(authorFilter.toLowerCase())
        )
      );
    }

    if (yearFilter) {
      results = results.filter(
        (b) =>
          b.first_publish_year?.toString() === yearFilter ||
          b.publish_year?.includes(parseInt(yearFilter))
      );
    }

    switch (sortBy) {
      case "year_desc":
        return results.sort(
          (a, b) => (b.first_publish_year || 0) - (a.first_publish_year || 0)
        );
      case "year_asc":
        return results.sort(
          (a, b) => (a.first_publish_year || 0) - (b.first_publish_year || 0)
        );
      case "title":
        return results.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return results;
    }
  };

  // ⭐ Toggle favorites
  const toggleFavorite = (book) => {
    setFavorites((prev) =>
      prev.some((f) => f.key === book.key)
        ? prev.filter((f) => f.key !== book.key)
        : [...prev, book]
    );
  };

  const clearFilters = () => {
    setYearFilter("");
    setAuthorFilter("");
    setSortBy("relevance");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header favorites={favorites} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <SearchBar
          query={query}
          setQuery={setQuery}
          searchType={searchType}
          setSearchType={setSearchType}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          loading={loading}
          searchBooks={searchBooks}
        />
        {showFilters && (
          <Filters
            yearFilter={yearFilter}
            setYearFilter={setYearFilter}
            authorFilter={authorFilter}
            setAuthorFilter={setAuthorFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
            clearFilters={clearFilters}
          />
        )}
        {loading && <LoadingSpinner />}
        {error && (
          <ErrorBox error={error} clearFilters={clearFilters} year={yearFilter} author={authorFilter} />
        )}
        <BookGrid
          books={books}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
          openBook={(book) => setSelectedBook(book)}
        />
        {selectedBook && (
          <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
        )}
      </div>
    </div>
  );
}
