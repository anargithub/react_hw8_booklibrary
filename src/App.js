import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WishList from "./pages/WishList";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>
          {" "}
        </Route>
        <Route path="/wishlist" element={<WishList />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}


