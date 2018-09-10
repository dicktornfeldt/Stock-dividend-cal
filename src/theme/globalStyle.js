/**
 * These are styles that are injected globally throughout the app
 */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`    
  html,
  body,
  #root {
    height: 100%;
  }

  html {
    font-size: 62.5%;
    font-smooth: always;
    overflow-y: scroll;
    box-sizing: border-box;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: "Lucida Console", Monaco, monospace;
    font-weight: normal;
    font-size: 1.3rem;
    line-height: 1.4;
    color: #181933;
    background: white;
    @media (min-width: 768px) {
      font-size: 1.4rem;
    }
  }

  a {
    text-decoration: none;
    background-color: transparent;
    transition: all .15s ease;
    cursor: pointer;
    &:visited,
    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
      outline: 0;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    &:after {
      display: block;
      clear: both;
      content: '';
    }
    li {
      margin: 0;
      padding: 0;
    }
  }
`;
