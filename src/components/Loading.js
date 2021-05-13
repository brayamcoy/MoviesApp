import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
`;

export default function Loading() {
  return <ClipLoader css={override} size={150} color={"#775d5d"} />;
}
