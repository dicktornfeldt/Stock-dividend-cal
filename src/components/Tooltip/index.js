import React from 'react';
import styled from 'styled-components';

const TooltipContainer = styled.div`
  position: relative;
  display: none;
  top: 1rem;
  background: ${props => props.theme.primary};
  color: white;
  font-weight: bold;
  border-radius: 0.5rem;
  padding: 0.8rem;
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.1);
  p {
    margin: 0;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 15%;
    width: 0;
    height: 0;
    border: 1rem solid transparent;
    border-bottom-color: ${props => props.theme.primary};
    border-top: 0;
    margin-left: -1rem;
    margin-top: -1rem;
  }

  @media (min-width: 1024px) {
    display: block;
  }
`;

const Tooltip = () => (
  <TooltipContainer>
    <p>Sök efter och lägg till din första aktie. Välj sedan hur många du äger av den.</p>
  </TooltipContainer>
);

export default Tooltip;
