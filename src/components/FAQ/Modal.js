import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalContainer = styled.section`
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
    padding: 2.5rem 2rem;
  }
`;

const Modal = props => {
  return (
    <ModalContainer>
      <aside onClick={props.handleClick} />
      <div>
        <h1>Hej</h1>
      </div>
    </ModalContainer>
  );
};

Modal.propTypes = {
  handleClick: PropTypes.func,
};

export default Modal;
