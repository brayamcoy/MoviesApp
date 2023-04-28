import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Card from "components/Card";

const movie = {
  id: 1,
  title: "Test Movie",
  vote_average: 7.5,
  poster_path: "/test_poster.jpg",
};

describe("Card", () => {
  test("renders movie title", () => {
    render(
      <BrowserRouter>
        <Card movie={movie} />
      </BrowserRouter>
    );
    const movieTitle = screen.getByText(/test movie/i);
    expect(movieTitle).toBeInTheDocument();
  });

  test("renders movie rating", () => {
    render(
      <BrowserRouter>
        <Card movie={movie} />
      </BrowserRouter>
    );
    const movieRating = screen.getByText(/7.5/i);
    expect(movieRating).toBeInTheDocument();
  });

  test("renders movie poster when it exists", () => {
    render(
      <BrowserRouter>
        <Card movie={movie} />
      </BrowserRouter>
    );
    const moviePoster = screen.getByRole("img", { name: /movie poster/i });
    expect(moviePoster).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/w200/test_poster.jpg"
    );
  });

  test("renders default image when movie poster does not exist", () => {
    const movieWithoutPoster = { ...movie, poster_path: null };
    render(
      <BrowserRouter>
        <Card movie={movieWithoutPoster} />
      </BrowserRouter>
    );
    const defaultImage = screen.getByAltText(/movie poster/i);
    expect(defaultImage).toHaveAttribute("src", "/noimage.png");
  });

  test("renders link to movie detail page", () => {
    render(
      <BrowserRouter>
        <Card movie={movie} />
      </BrowserRouter>
    );
    const movieLink = screen.getByRole("link", { name: /test movie/i });
    expect(movieLink).toHaveAttribute("href", "/detail/1");
  });
});
