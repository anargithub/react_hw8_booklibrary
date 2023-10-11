import { Link } from "react-router-dom";
import "./Header.css";
import { FcLike } from "react-icons/fc";
import { BiSolidSearch } from "react-icons/bi";
import "react-icons/fc";
import "react-icons/bi";

export default function Header() {
  return (
    <header>
      <div className="links">
        <Link className="link" to="/">
          <BiSolidSearch />
          Search
        </Link>
        <Link className="link" to="/wishlist">
          <FcLike />
          Wishlist
        </Link>
      </div>
    </header>
  );
}
