import React from 'react';
import PropTypes from 'prop-types';

import { ModalContainer, Close, H2 } from './ModalStyle';

class Modal extends React.PureComponent {
  static propTypes = {
    handleClick: PropTypes.func,
  };

  render() {
    return (
      <ModalContainer>
        <aside onClick={this.props.handleClick} />
        <div>
          <Close onClick={this.props.handleClick}>✖</Close>
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
            för en enskild aktie, ta bort den ur din portfölj och addera den på nytt.
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
            aktieinvesterande ännu lite roligare. Med det sagt så tar jag mer än gärna emot
            konstruktiv kritik, må det vara funktionalitet eller utformning av webbappen. Skicka ett
            mail till <a href="mailto:dick@pigment.se">dick@pigment.se</a> eller kontakta mig på{' '}
            <a rel="nofollow" href="https://twitter.com/dicktornfeldt" target="blank">
              {' '}
              Twitter.
            </a>
          </p>
          <p>
            <strong>
              Bara nordiska aktier?<br />
            </strong>Tyvärr så har Avanza inte utdelningsdata på aktier utanför Norden. Vi jobbar på
            att få in andra länders aktier så fort som möjligt.
          </p>
        </div>
      </ModalContainer>
    );
  }
}

export default Modal;
