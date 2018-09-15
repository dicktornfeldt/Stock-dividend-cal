import React from 'react';
import styled from 'styled-components';
import QuestionMark from '../../images/question-mark.svg';

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
const Modal = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  box-pack: center;
  box-align: center;
  position: fixed;
  transform: translate(0, 0);
  width: 100%;
  left: 0;
  right: 0;
  height: auto;
  top: 0;
  bottom: 0;
  z-index: 990;
  background: transparent;
  padding: 2rem;
  aside {
    display: block;
    position: absolute;
    width: auto;
    left: 0;
    right: 0;
    height: auto;
    top: 0;
    bottom: 0;
    z-index: 995;
    opacity: 0.3;
    background: #222222;
  }
  div {
    width: 100%;
    max-width: 70rem;
    height: auto;
    max-height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
    z-index: 999;
    background: #ffffff;
    border-radius: 1.6rem;
    padding: 1.6rem;
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
        {this.state.modalVisible && (
          <Modal>
            <aside onClick={this.handleClick} />
            <div>
              <h1>Hej</h1>
            </div>
          </Modal>
        )}
      </React.Fragment>
    );
  }
}

export default FAQ;
