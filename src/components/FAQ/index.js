import React from 'react';
import styled from 'styled-components';

import QuestionMark from '../../images/question-mark.svg';
import Modal from './Modal';

const ImgContainer = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  position: absolute;
  z-index: 991;
  left: auto;
  right: 2rem;
  top: auto;
  bottom: 2rem;
  margin: auto;
  cursor: pointer;
  border-radius: 100%;
  transition: all 170ms linear;
  background-color: white;
  border-radius: 100%;
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
