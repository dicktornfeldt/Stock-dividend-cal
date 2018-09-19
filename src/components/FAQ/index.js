import React from 'react';
import styled from 'styled-components';

import QuestionMark from '../../images/question-mark.svg';
import Modal from './Modal';

const ImgContainer = styled.div`
  width: 4rem;
  height: 4rem;
  position: fixed;
  z-index: 991;
  left: 1.5rem;
  right: auto;
  top: auto;
  bottom: 1.5rem;
  margin: auto;
  cursor: pointer;
  border-radius: 100%;
  transition: all 170ms linear;
  background-color: white;
  border-radius: 100%;
  @media (min-width: 1024px) {
    left: auto;
    right: 2rem;
    position: absolute;
    width: 4.5rem;
    height: 4.5rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  img {
    width: 100%;
    height: auto;
  }
`;

class FAQ extends React.PureComponent {
  state = {
    modalVisible: false,
  };

  handleClick = () => {
    this.setState(state => ({
      modalVisible: !state.modalVisible,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <ImgContainer onClick={this.handleClick}>
          <img src={QuestionMark} alt="FAQ" />
        </ImgContainer>
        {this.state.modalVisible && <Modal handleClick={this.handleClick} />}
      </React.Fragment>
    );
  }
}

export default FAQ;
