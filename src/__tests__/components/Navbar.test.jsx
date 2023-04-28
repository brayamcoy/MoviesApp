import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../../components/Navbar";

describe("Navbar component", () => {
  it("Renders", () => {
    render(<Navbar />);
    const searchIcon = screen.getByAltText("search icon");
    const searchForm = screen.getByTestId("search-form");
    expect(searchIcon).toBeInTheDocument();
    expect(searchForm).toBeInTheDocument();
  });
});
