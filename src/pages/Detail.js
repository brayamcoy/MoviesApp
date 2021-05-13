import React, { useEffect, useRef, useState } from "react";
import { api, showVotes } from "../config/utils";
import { Link } from "react-router-dom";

export default function Detail({ match }) {
  const movieRef = useRef();
  const { movieId } = match.params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    movieRef.current = movieId;
  });

  const getMovie = (id) => {
    fetch(api.detail(id))
      .then((res) => res.json())
      .then((movie) => {
        // console.log(movie);
        setMovie(movie);
      });
  };

  useEffect(() => {
    getMovie(movieRef.current);
  }, []);

  return movie !== null ? (
    <div className="w-full bg-gray-900 p-12 overflow-auto h-screen">
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white mb-4
          transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110
          "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
          />
        </svg>
      </Link>
      <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div
          className="lg:col-start-2 md:pl-20 bg-gray-800 p-5
        transition duration-500 ease-in-out  hover:bg-red-900 transform hover:-translate-y-1 hover:scale-100"
        >
          <h4
            className="text-2xl leading-8 font-extrabold text-white tracking-tight sm:leading-9 
             transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-100
          "
          >
            {movie.original_title}
          </h4>
          <div className="flex mt-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-80">
            {showVotes(movie.vote_average)}
          </div>
          <ul className="mt-10">
            <li>
              <div className="flex">
                <div className="ml-4">
                  <h5
                    className="text-lg leading-6 text-white font-bold flex
                  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-100
                  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                      />
                    </svg>
                    Genres
                  </h5>
                  <div className="flex ">
                    {movie.genres.map((genre, index) => (
                      <p
                        className="mt-2 ml-2 text-base leading-6 text-white"
                        key={index}
                      >
                        {genre.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="ml-4">
                  <h5
                    className="text-lg leading-6 text-white font-bold flex
                  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-100
                  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                    Spoken Languages
                  </h5>
                  <div className="flex ">
                    {movie.spoken_languages.map((language, index) => (
                      <p
                        className="mt-2 ml-2 text-base leading-6 text-white"
                        key={index}
                      >
                        {language.english_name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="ml-4">
                  <h5
                    className="text-lg leading-6 text-white font-bold flex
                  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-100
                  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Description
                  </h5>
                  <p className="mt-2 text-base leading-6 text-white ml-2">
                    {movie.overview}
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div
                    className="flex items-center justify-center h-12 w-12 rounded-md bg-red-400 text-white
                  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110
                  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5
                    className="text-lg leading-6 text-white font-bold
                  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-100
                  "
                  >
                    Overview
                  </h5>
                  <p className="mt-2 text-base leading-6 text-white">
                    Votes: {movie.vote_count} <br />
                    Status: {movie.status} <br />
                    Date: {movie.release_date}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1
        transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110"
        >
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
            alt="illustration"
            className="relative mx-auto shadow-lg rounded w-auto"
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full bg-gray-900 p-12 flex item-center justify-center overflow-auto h-screen"></div>
  );
}
