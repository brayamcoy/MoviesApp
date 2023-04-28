import React from "react";

// Components
import SearchForm from "./SearchForm";

// Assets
import searchIcon from "../assets/search.svg";

export default function Navbar({ onResults }) {
  return (
    <div className="search-bar">
      <img src={searchIcon} alt="search icon" />
      <SearchForm onResults={onResults} />
    </div>
  );
}
