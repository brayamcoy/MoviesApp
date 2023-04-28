import React from "react";
import { Link } from "react-router-dom";

export default function Card({ movie }) {
  return (
    <Link to={`/detail/${movie.id}`} className="movie" data-testid="card">
      <figure>
        <img
          src={
            movie.poster_path
              ? "https://image.tmdb.org/t/p/w200" + movie.poster_path
              : "/noimage.png"
          }
          alt="movie poster"
        />
      </figure>
      <span className="title">{movie.title}</span>
      <span className="rate">{movie.vote_average}</span>
    </Link>
  );
}
