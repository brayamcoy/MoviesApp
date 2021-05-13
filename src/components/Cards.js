import React from "react";
import { Link } from "react-router-dom";
import { showVotes } from "../config/utils";

export default function Cards({ movies }) {
  return movies.map((movie) => (
    <div
      className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden 
      transition duration-500 ease-in-out hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110"
      key={movie.id}
    >
      <div className="w-1/3 bg-cover bg-landscape">
        <img
          src={
            movie.poster_path
              ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
              : "/noimage.png"
          }
          alt="movie"
          className="inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="w-2/3 p-4">
        <h1 className="text-gray-900 font-bold text-2xl truncate">
          {movie.original_title}
        </h1>
        <p className="mt-2 text-gray-600 text-sm truncate">{movie.overview}</p>
        <div className="flex item-center mt-2">
          {showVotes(movie.vote_average)}
        </div>
        <div className="flex item-center justify-between mt-5">
          <h1 className="text-gray-700 font-bold text-xl">
            Votes: {movie.vote_count}
          </h1>
          <Link to={`/detail/${movie.id}`}>
            <button
              className="px-3 py-2 bg-gray-800 mt-5 text-white text-xs font-bold uppercase rounded 
          transition duration-500 ease-in-out  hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110"
            >
              View detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  ));
}
