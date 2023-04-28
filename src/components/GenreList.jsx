/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const GenreList = ({ genres, selected, handleFilter }) => {
  return (
    <div className="genres-list">
      <span className="title">genres</span>
      <hr />
      <ul className="genre-list-items">
        {genres.length &&
          genres
            .sort((a, b) => a.id - b.id)
            .map((genre) => (
              <li key={genre.id} data-testid={`genre-${genre.id}`}>
                <a
                  className={genre.id === selected ? "active" : ""}
                  href="#"
                  alt="genres"
                  onClick={() => handleFilter(genre.id)}
                >
                  {genre.name}
                </a>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default GenreList;
