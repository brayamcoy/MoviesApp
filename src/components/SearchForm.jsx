import React from "react";
import { api } from "../config/utils";

export default function SearchForm({ onResults }) {
  const handleChange = (e) => {
    if (e.target.value !== "") {
      fetch(api.search(e.target.value))
        .then((res) => res.json())
        .then((myJson) => {
          onResults(myJson.results);
        });
    }
  };

  return (
    <input
      data-testid="search-form"
      name="searchText"
      type="search"
      placeholder="Search"
      aria-label="Search"
      onChange={(e) => handleChange(e)}
    />
  );
}
