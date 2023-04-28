import React, { useEffect, useState } from "react";

// Components
import GenreList from "./GenreList";
import MoviesContainer from "./MoviesContainer";

export default function Container({ data, results, search, genres }) {
  const initialState = search ? results : data;
  const [movies, setMovies] = useState(data);
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    if (search) {
      setMovies(results);
    } else {
      setMovies(data);
    }
  }, [search, results, data]);

  const handleSortMovies = (e) => {
    const {
      target: { value },
    } = e;
    if (value === "rate")
      setMovies([...movies].sort((a, b) => b.vote_average - a.vote_average));
    if (value === "latest") setMovies([...movies].sort((a, b) => b.id - a.id));
  };

  const handleFilterMoviesByGenre = (id) => {
    setSelectedGenre(id);
    if (id !== 0) {
      setMovies(
        [...initialState].filter((movie) => movie.genre_ids.includes(id))
      );
    } else {
      setMovies([...initialState]);
    }
  };

  return (
    <div className="main-container">
      <GenreList
        handleFilter={handleFilterMoviesByGenre}
        genres={genres}
        selected={selectedGenre}
      />
      <MoviesContainer
        handleSort={handleSortMovies}
        movies={movies}
      />
    </div>
  );
}
