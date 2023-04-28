import React from "react";

// Assets
import { TbFaceIdError } from "react-icons/tb";

export default function NotFound() {
  return (
    <div className="alert-container">
      <TbFaceIdError data-testid="logo" />
      <h4>Sorry page not found</h4>
    </div>
  );
}
