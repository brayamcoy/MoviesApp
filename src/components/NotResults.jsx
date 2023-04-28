import React from "react";

// Components
import { BsSearch } from "react-icons/bs";

export default function NotResults() {
  return (
    <div className="alert-container" data-testid="not-results">
      <BsSearch />
      <h5>Not results found</h5>
    </div>
  );
}
