import React from "react";
import { render, fireEvent } from "@testing-library/react";

import MoviesContainer from "components/MoviesContainer";
import { BrowserRouter } from "react-router-dom";

describe("MoviesContainer Component", () => {
  const handleSortMock = jest.fn();
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      releaseDate: "1994-10-14",
      rating: 9.3,
      overview:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
    {
      id: 2,
      title: "The Godfather",
      releaseDate: "1972-03-24",
      rating: 9.2,
      overview:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    },
  ];

  it("should render without errors", () => {
    render(
      <BrowserRouter>
        <MoviesContainer handleSort={handleSortMock} movies={movies} />
      </BrowserRouter>
    );
  });

  it("should render the movies list with the correct amount of movies", () => {
    const { getAllByTestId } = render(
      <BrowserRouter>
        <MoviesContainer handleSort={handleSortMock} movies={movies} />
      </BrowserRouter>
    );
    const movieElements = getAllByTestId("card");

    expect(movieElements).toHaveLength(movies.length);
  });

  it("should render the NotResults component when no movies are provided", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MoviesContainer handleSort={handleSortMock} movies={[]} />
      </BrowserRouter>
    );
    const notResultsElement = getByTestId("not-results");

    expect(notResultsElement).toBeInTheDocument();
  });

  it("should call handleSortMock function when select option is changed", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MoviesContainer handleSort={handleSortMock} movies={movies} />
      </BrowserRouter>
    );
    const selectElement = getByTestId("select");

    fireEvent.change(selectElement, { target: { value: "rate" } });

    expect(handleSortMock).toHaveBeenCalled();
  });
});
