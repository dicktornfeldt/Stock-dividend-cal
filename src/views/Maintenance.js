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
          Hej på er, då jag har alldeles för mycket privat för att kunna hålla sidan vid liv så
          läggs den nu på is. Har lagt alldeles för mycket obetald tid på något som jag inte längre
          tycker är roligt. Om någon är sugen på att ta över driften så kan ni maila
          dick@pigment.se. Det är ett React/Redux projekt. Må väl!
        </StyledH1>
      </Main>
    );
  }
}

export default Maintenance;
