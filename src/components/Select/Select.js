import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';



const StyledSelect = styled.select`
  background-color: ${COLORS.gray50};
  background-image: url();
  color: ${COLORS.gray700};
  font-family: 'Roboto', sans-serif;
  border-radius: 8px;
  padding: 12px;
  padding-left: 16px;
  padding-right: 52px;
  appearance: none;

  &:hover {
    color: black;
  }
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <StyledSelect value={value} onChange={onChange}>
      {children}
      <Icon id="chevron-down" />
    </StyledSelect>
  );
};

export default Select;
