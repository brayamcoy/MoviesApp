import React from "react";
import { render } from "@testing-library/react";
import NotResults from "components/NotResults";

describe("NotResults component", () => {
  it("renders the not results message", () => {
    const { getByTestId } = render(<NotResults />);
    const notResultsMessage = getByTestId("not-results").querySelector("h5");

    expect(notResultsMessage.textContent).toBe("Not results found");
  });

  it("renders the search icon", () => {
    const { getByTestId } = render(<NotResults />);
    const searchIcon = getByTestId("not-results").querySelector("svg");

    expect(searchIcon).toBeInTheDocument();
  });
});
