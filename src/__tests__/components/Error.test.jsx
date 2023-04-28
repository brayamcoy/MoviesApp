import React from "react";
import { render } from "@testing-library/react";

import Error from "components/Error";

describe("Error component", () => {
  it("should render the error message correctly", () => {
    // Render component
    const { getByText, getByTestId } = render(<Error />);

    // get the element message
    const errorMessage = getByText(
      /There was an error loading the information./i
    );

    // document exists
    expect(errorMessage).toBeInTheDocument();

    // get the icon by id
    const errorIcon = getByTestId("tb-face-id-error");

    // Validate if icons exists
    expect(errorIcon).toBeInTheDocument();
    expect(errorIcon.tagName).toBe("svg");
  });
});
