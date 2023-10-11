import React from "react";
import "./BooksList.css";
import { useBooks } from "../../store/useBooks";
import { FcLike } from "react-icons/fc";
import "react-icons/fc";

export default function BooksList({ books }) {
  const addToWishlist = useBooks((state) => state.addToWishlist);

  return (
    <div className="bookslist">
      {books.map((book, index) => (
        <div className="books" key={index}>
          <button
            className="wishlistButton"
            onClick={() => addToWishlist(book)}
          >
            {" "}
            <FcLike />
            wishlist
          </button>
          <h3>{book.volumeInfo.title}</h3>
          <p>{book.volumeInfo.publishedDate}</p>
          <p>{book.volumeInfo.publisher}</p>
          <p>{book.volumeInfo.authors}</p>
          <img src={book.volumeInfo.imageLinks?.thumbnail} />
          <p>{book.volumeInfo.description}</p>
        </div>
      ))}
    </div>
  );
}
