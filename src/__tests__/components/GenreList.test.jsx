import React from "react";
import { render, fireEvent } from "@testing-library/react";

import GenreList from "components/GenreList";

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Comedy" },
  { id: 3, name: "Drama" },
];
const selected = 2;
const handleFilter = jest.fn();

describe("GenreList component", () => {
  it("should render the genres list correctly", () => {
    // Renderizar el componente
    const { getByText } = render(
      <GenreList
        genres={genres}
        selected={selected}
        handleFilter={handleFilter}
      />
    );

    const actionGenre = getByText("Action");
    const comedyGenre = getByText("Comedy");
    const dramaGenre = getByText("Drama");

    expect(actionGenre).toBeInTheDocument();
    expect(comedyGenre).toBeInTheDocument();
    expect(dramaGenre).toBeInTheDocument();

    expect(comedyGenre).toHaveClass("active");
  });

  it("should call the handleFilter function when a genre is clicked", () => {
    // Renderizar el componente
    const { getByText } = render(
      <GenreList
        genres={genres}
        selected={selected}
        handleFilter={handleFilter}
      />
    );
    const actionGenre = getByText("Action");

    fireEvent.click(actionGenre);

    expect(handleFilter).toHaveBeenCalledWith(1);
  });

  it("should render the genres list sorted by ID", () => {
    const { getByText } = render(
      <GenreList
        genres={genres}
        selected={selected}
        handleFilter={handleFilter}
      />
    );

    const actionGenre = getByText("Action");
    const comedyGenre = getByText("Comedy");
    const dramaGenre = getByText("Drama");

    expect(actionGenre).toBeInTheDocument();
    expect(comedyGenre).toBeInTheDocument();
    expect(dramaGenre).toBeInTheDocument();

    expect(actionGenre.parentElement).toHaveAttribute("data-testid", "genre-1");
    expect(comedyGenre.parentElement).toHaveAttribute("data-testid", "genre-2");
    expect(dramaGenre.parentElement).toHaveAttribute("data-testid", "genre-3");
  });
});
