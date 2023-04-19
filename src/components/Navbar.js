import React from "react";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";
export default function Navbar({ onResults }) {
  return (
    <header className="w-full shadow-lg bg-gray-700  items-center h-16 rounded-2xl z-40 mb-10 py-5">
      <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
        <div className="relative items-center justify-between pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
          <div className="relative flex items-center w-1/4 ml-2 mr-2 sm:mr-0 sm:right-auto">
            <Link to="/" className="relative flex flex-row items-center">
              <img alt="logo" src="/play.svg" className="w-12" />
              <h2 className="text-gray-50 font-extrabold text-xl pl-4">
                Movies Book{" "}
              </h2>
            </Link>
          </div>
          <div className="relative flex items-center w-full lg:w-64 h-full group">
            <div className="absolute z-50 flex items-center justify-center w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
              <svg
                className="absolute left-0 z-20  w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
            </div>
            <svg
              className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
            </svg>
            <SearchForm onResults={onResults} />
          </div>
        </div>
      </div>
    </header>
  );
}
