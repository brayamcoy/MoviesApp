import React from "react";

// Components
import { TbFaceIdError } from "react-icons/tb";

const Error = () => {
  return (
    <div className="alert-container">
      <TbFaceIdError data-testid="tb-face-id-error" />
      <h4>There was an error loading the information.</h4>
    </div>
  );
};

export default Error;
