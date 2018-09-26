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

const H2 = styled.h2`
  font-size: 1.9rem;
  position: relative;
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

const Close = styled.span`
  width: 2.4rem;
  height: 2.4rem;
  top: 1rem;
  right: 1rem;
  position: absolute;
  font-weight: bold;
  color: white;
  line-height: 2.2rem;
  font-size: 1.4rem;
  text-align: center;
  border-radius: 100%;
  cursor: pointer;
  background-color: ${props => props.theme.black};
  @media (min-width: 1024px) {
    top: 2rem;
    right: 2rem;
  }
`;

class Modal extends React.PureComponent {
  static propTypes = {
    handleClick: PropTypes.func,
  };

  render() {
    console.log('Modal Component');
    return (
      <ModalContainer>
        <aside onClick={this.props.handleClick} />
        <div>
          <Close onClick={this.props.handleClick}>x</Close>
          <H2>
            Vanliga frågor och svar
            <span role="img" aria-label="emoji hum">
              🤔
            </span>
          </H2>

          <p>
            <strong>
              Sparas min data?<br />
            </strong>Din portfölj sparas bara i din webbläsares{' '}
            <a
              rel="nofollow"
              href="https://www.w3schools.com/html/html5_webstorage.asp"
              target="blank"
            >
              Localstorage
            </a>
            , detta för att du ska slippa skapa ett konto. Kortfattat, det är bara du och din
            webbläsare som kan se din portfölj. Vill du se portföljen i både din dator, andra
            datorer och telefoner så måste du skapa den i respektive enhet.
          </p>
          <p>
            <strong>
              Hur hämtas aktiedata?<br />
            </strong>Aktiedata hämtas från Avanza varje gång du lägger till en ny aktie i din
            portfölj. Inte när du justerar antalet av respektive innehav. Så för att uppdatera datan
            för en enskil aktie, ta bort den ur din portfölj och addera den på nytt.
          </p>
          <p>
            <strong>
              Använder hemsidan cookies?<br />
            </strong>Webappen använder sig av Google Analytics för att spåra trafik. Däremot så
            sparas inte data som har med enskild användare att göra, dvs. webappen sparar inte ditt
            IP-nummer, i enlighet med GDPR.
          </p>
          <p>
            <strong>
              Varför funkar inte ...XXX?<br />
            </strong>Detta är en webbapp som jag byggt främst för att göra mitt eget
            aktieinvesterande ännu lite roligare. Jag är dessutom utvecklare, så jag kombinerar lite
            allmän nytta med egen vinning. Med det sagt så tar jag mer än gärna emot konstruktiv
            kritik, må det vara funktionalitet eller utformning av webbappen. Skicka ett mail till{' '}
            <a href="mailto:dick@pigment.se">dick@pigment.se</a> eller kontakta mig på{' '}
            <a rel="nofollow" href="https://twitter.com/dicktornfeldt" target="blank">
              {' '}
              Twitter.
            </a>
          </p>
        </div>
      </ModalContainer>
    );
  }
}

export default Modal;
