import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SidebarLayout from "components/SidebarLayout";

describe("SidebarLayout component", () => {
  test("renders logo", () => {
    render(
      <Router>
        <SidebarLayout />
      </Router>
    );
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  test("renders children", () => {
    const children = <div>Test Children</div>;
    render(
      <Router>
        <SidebarLayout>{children}</SidebarLayout>
      </Router>
    );
    const childElement = screen.getByText(/Test Children/i);
    expect(childElement).toBeInTheDocument();
  });
});
