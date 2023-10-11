import React from "react";
import { useBooks } from "../store/useBooks";
import "./WishList.css";

export default function WishList() {
  const wishlist = useBooks((state) => state.wishlist);

  return (
    <div>
      <div className="wishlist_head">
        <h2>Wishlist</h2>
        <img src="https://book-finder-app-git-master-klebermrocha.vercel.app/static/media/book.bafa48d3.svg" />
        <p>Your wishlist!</p>
      </div>
      <div className="wishlist_content">
        {wishlist.map((book, index) => (
          <div className="wishlistDiv" key={index}>
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.publishedDate}</p>
            <p>{book.volumeInfo.publisher}</p>
            <p>{book.volumeInfo.authors}</p>
            <img src={book.volumeInfo.imageLinks?.thumbnail} />
            <p>{book.volumeInfo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
