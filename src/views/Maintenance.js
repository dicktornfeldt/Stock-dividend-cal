import React, { Component } from 'react';
import { H1 } from '../theme/typo';
import styled from 'styled-components';

const Main = styled.main`
  background-color: ${props => props.theme.lightgrey};
  height: 100vh;
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
  z-index: 2;
  background: transparent;
  padding: 2rem;
`;

const StyledH1 = styled(H1)`
  text-align: center;
  max-width: 84rem;
  span {
    font-size: 6rem;
    display: block;
    @media (min-width: 1024px) {
      font-size: 7rem;
    }
  }
`;

class Maintenance extends Component {
  render() {
    return (
      <Main>
        <StyledH1>
          <span role="img" aria-label="emoji">
            👨‍💻
          </span>
          Då 2019 års utdelningsdata hämtas från Avanza så väntar vi in denna. Bolagens utdelningar
          blir känd i samband med bolagens bokslut som sedan Avanza lägger in i sitt system. Så vi
          hoppas vara tillbaka igen i början på februari. Skicka ett mail till dick@pigment.se om du
          har några funderingar.
        </StyledH1>
      </Main>
    );
  }
}

export default Maintenance;
