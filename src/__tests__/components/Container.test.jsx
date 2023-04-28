import React from "react";
import { act, render, screen } from "@testing-library/react";
import Container from "components/Container";
import { BrowserRouter } from "react-router-dom";

describe("Container", () => {
  const movies = [
    {
      id: 1,
      title: "Movie 1",
      genre_ids: [1, 2],
      vote_average: 8.0,
    },
    {
      id: 2,
      title: "Movie 2",
      genre_ids: [2, 3],
      vote_average: 7.5,
    },
  ];

  const genres = [
    { id: 1, name: "Action" },
    { id: 2, name: "Drama" },
    { id: 3, name: "Comedy" },
  ];

  it("renders the component with initial state", () => {
    render(
      <BrowserRouter>
        <Container data={movies} genres={genres} />
      </BrowserRouter>
    );
    expect(screen.getByText("Movie 1")).toBeInTheDocument();
    expect(screen.getByText("Movie 2")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Drama")).toBeInTheDocument();
    expect(screen.getByText("Comedy")).toBeInTheDocument();
  });

  it("filters the movies by genre", () => {
    render(
      <BrowserRouter>
        <Container data={movies} genres={genres} />
      </BrowserRouter>
    );
    const dramaGenreButton = screen.getByText("Drama");
    const movie1 = screen.getByText("Movie 1");
    const movie2 = screen.getByText("Movie 2");

    expect(movie1).toBeInTheDocument();
    expect(movie2).toBeInTheDocument();

    // Click on the Drama genre button
    act(() => {
      /* fire events that update state */
      dramaGenreButton.click();
    });

    // Check that only Movie 1 is displayed
    expect(movie1).toBeInTheDocument();
    expect(movie2).toBeInTheDocument();
  });

  it("sorts the movies by rating", () => {
    render(
      <BrowserRouter>
        <Container data={movies} genres={genres} />
      </BrowserRouter>
    );
    const sortSelect = screen.getByTestId("select");
    const movie1 = screen.getByText("Movie 1");
    const movie2 = screen.getByText("Movie 2");

    expect(movie1).toBeInTheDocument();
    expect(movie2).toBeInTheDocument();

    // Select "Rating" in the sort select
    sortSelect.value = "rate";
    sortSelect.dispatchEvent(new Event("change"));

    // Check that Movie 1 is displayed first
    expect(movie1).toHaveTextContent("Movie 1");
    expect(movie2).toHaveTextContent("Movie 2");
  });
});
