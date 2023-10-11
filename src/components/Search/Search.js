import React from "react";
import Button from "../Button/Button";
import "./Search.css";

export default function Search({
  search,
  updateSearch,
  getSearch,
  placeholder,
}) {
  return (
    <form onSubmit={getSearch} className="search-form">
      <input
        className="search-bar"
        type="text"
        value={search}
        onChange={updateSearch}
        placeholder={placeholder}
      />
      <Button buttonValue="Search" />
    </form>
  );
}
