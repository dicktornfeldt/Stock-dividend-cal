import styled from 'styled-components';

export const ModalContainer = styled.section`
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
    background: #120f21;
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
    padding: 2rem 1.7rem;
    box-shadow: 0 3px 19px rgba(0, 0, 0, 0.1);
    @media (min-width: 1024px) {
      padding: 2.5rem 3.5rem;
    }
  }
`;

export const Close = styled.span`
  top: 1rem;
  right: 1rem;
  position: absolute;
  font-size: 2rem;
  cursor: pointer;
  @media (min-width: 1024px) {
    top: 2rem;
    right: 2rem;
    font-size: 2.5rem;
  }
`;

export const H2 = styled.h2`
  font-size: 1.7rem;
  position: relative;
  margin: 0 0 2rem 0;
  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
  span {
    top: -0.2rem;
    margin-left: 1rem;
    font-size: 120%;
    @media (min-width: 1024px) {
      position: absolute;
    }
  }
`;
