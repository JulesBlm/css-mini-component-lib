import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const TextInput = styled.input`
  color: ${COLORS.gray700};
  border: none;
  border-bottom: 1px solid black;
  font-weight: 400;
  height: 1.5rem;
  padding-left: 24px;
  outline-offset: 2px;
  width: var(--width);

  &:hover {
    font-weight: 700;
    color: ${COLORS.black};
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const Container = styled.label`
  display: block;
  position: relative;
  font-size: ${(props) => STYLES[props.size]}px;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const IconInput = ({
  label,
  icon = "search",
  width = 250,
  size,
  placeholder,
  ...props
}) => {
  const id = label;
  const styles = STYLES[size];

  return (
    <Container style={{ "--width": width + "px" }}>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <TextInput
        style={{
          "--width": width + "px",
          "--border-thickness": styles.borderThickness + "px",
        }}
        id={id}
        placeholder={placeholder}
        {...props}
      />
    </Container>
  );
};

export default IconInput;
