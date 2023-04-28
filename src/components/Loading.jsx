import React from "react";
import { css } from "@emotion/core";

// Components
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 20px;
`;

export default function Loading() {
  return <ClipLoader css={override} size={50} color={"#775d5d"} data-testid="spinner" />;
}
