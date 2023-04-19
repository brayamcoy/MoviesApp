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
      type="text"
      className="block py-1 w-full pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-800 text-gray-400 aa-input text-sm font-bold"
      placeholder="Search"
      onChange={(e) => handleChange(e)}
    />
  );
}
