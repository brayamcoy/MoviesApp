import React from "react";

// Components
import Card from "./Card";
import NotResults from "./NotResults";

const MoviesContainer = ({ handleSort, movies }) => {
  return (
    <div className="movies-container">
      <div className="movies-list-header">
        <span className="count">Movies</span>
        <div className="sort">
          SORT BY:
          <select onChange={handleSort} data-testid="select">
            <option defaultChecked disabled>
              Select
            </option>
            <option value="rate">Rate</option>
            <option value="latest">Lastest</option>
          </select>
        </div>
      </div>
      <hr />
      <div className="movies-list">
        {!movies.length ? (
          <NotResults />
        ) : (
          movies.map((movie) => <Card movie={movie} key={movie.id} />)
        )}
      </div>
    </div>
  );
};

export default MoviesContainer;
