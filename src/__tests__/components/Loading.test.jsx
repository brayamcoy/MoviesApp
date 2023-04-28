import React from "react";
import { render } from "@testing-library/react";

import Loading from "components/Loading";

describe("Loading Component", () => {
  it("should render without errors", () => {
    render(<Loading />);
  });
});
