import React from 'react';
import styled from 'styled-components';

import Loading from '../../images/loading.svg';

const Load = styled.div`
  position: absolute;
  z-index: 99;
  margin: auto;
  padding: 1rem 0;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  span {
    top: 50%;
    top: 49%;
    transform: translateY(-50%);
    position: absolute;
    left: 0;
    bottom: auto;
    right: 0;
    margin: auto;
  }
  p {
    font-weight: bold;
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    color: ${props => props.theme.black};
  }
  img {
    width: 7rem;
    display: inline-block;
    height: 1.7rem;
  }
`;

const SidebarLoading = () => {
  return (
    <Load>
      <span>
        <p>Hämtar aktiedata</p>
        <img src={Loading} alt="loading" />
      </span>
    </Load>
  );
};

export default SidebarLoading;
