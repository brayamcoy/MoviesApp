import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "components/SearchForm";

describe("SearchForm component", () => {
  test("renders search input field", () => {
    render(<SearchForm />);
    const searchInput = screen.getByTestId("search-form");
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute("placeholder", "Search");
  });

  test("onResults is not called when search input is empty", () => {
    const onResults = jest.fn();
    render(<SearchForm onResults={onResults} />);
    const searchInput = screen.getByTestId("search-form");
    fireEvent.change(searchInput, { target: { value: "" } });
    expect(onResults).not.toHaveBeenCalled();
  });
});
