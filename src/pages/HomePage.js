import React, { useState, useEffect } from "react";
import Search from "../components/Search/Search";
import BooksList from "../components/BooksList/BooksList";
import "./HomePage.css";
import { useBooks } from "../store/useBooks";

export default function HomePage() {
  const api = "AIzaSyBqJ75JaAi9s6LpQe22-M_KLB-sRe6RG8A";

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const wishlist = useBooks((state) => state.wishlist);

  useEffect(() => {
    getBooks();
  }, [query]);

  const getBooks = async () => {
    const booksData = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    ).then((res) => res.json());

    if (booksData.items && Array.isArray(booksData.items)) {
      setBooks(booksData.items);
    } else {
      console.error("error");
    }
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div>
      <div className="bookFinder">
        <div className="bookFinder_search">
          <h1>Book Finder</h1>
          <Search
            search={search}
            updateSearch={updateSearch}
            getSearch={handleSearch}
            placeholder="search a book"
          />
        </div>

        <div className="bookFinder_img">
          <img src="https://book-finder-app-git-master-klebermrocha.vercel.app/static/media/home.3f4fc5b7.svg" />
        </div>
      </div>

      <BooksList books={books} />
    </div>
  );
}
