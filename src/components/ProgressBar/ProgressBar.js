/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const heights = {
  small: "8px",
  medium: "12px",
  large: "24px",
};

const Background = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: ${(props) => heights[props.size]};
  width: 370px;
  border-radius: ${(props) => (props.size === "large" ? "8px" : "4px")};
  padding: ${(props) => props.size === "large" && "4px"};
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${(props) => `${props.value}%`};
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: ${({ value }) => (value == 100 ? "4px" : "0")};
  border-top-right-radius: ${({ value }) => (value == 100 ? "4px" : "0")};
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Background size={size}>
      <Bar role="progressbar" aria-valuenow={value} value={value} />
      <VisuallyHidden>{value}</VisuallyHidden>
    </Background>
  );
};

export default ProgressBar;
