import React from 'react';
import styled, { css } from 'styled-components';

import PlusIcon from '../../images/plus-circle.svg';

const ImgContainer = styled.div`
  width: 4rem;
  height: 4rem;
  position: fixed;
  z-index: 999;
  left: auto;
  right: 1.5rem;
  top: auto;
  bottom: 1.5rem;
  margin: auto;
  cursor: pointer;
  transition: all 170ms linear;
  ${props =>
    props.sidebarVisible &&
    css`
      transform: rotate(45deg);
    `};
  @media (min-width: 1024px) {
    display: none;
    position: absolute;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const SidebarSwitch = props => (
  <ImgContainer onClick={props.onClick} sidebarVisible={props.sidebarVisible}>
    <img src={PlusIcon} alt="plus icon" />
  </ImgContainer>
);

export default SidebarSwitch;
