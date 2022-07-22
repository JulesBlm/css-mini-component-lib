import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
// import VisuallyHidden from "../VisuallyHidden";

const StyledInput = styled.input`
  color: ${COLORS.gray700};
  font-weight: 400;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const Container = styled.input`
  width: ${(props) => props.width}px;
  border-bottom: 1px solid black;
  font-size: ${({ size }) => (size === "large" ? "18px" : "14px")};
`;

const StyledIcon = styled.Icon`
  height: ${({ size }) => (size === "large" ? "24px" : "16px")};
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Container>
      <StyledIcon id="search" />
      <StyledInput placeholder={placeholder} />
    </Container>
  );
};

export default IconInput;
