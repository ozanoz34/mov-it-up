import { createGlobalStyle } from 'styled-components';

import { StyledPropsModel } from '../../types';

const GeneralStyles = createGlobalStyle<StyledPropsModel>`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* http://www.paulirish.com/2012/box-sizing-border-box-ftw/ (2015/04/28)*/
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  /* Additional resets */
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: inherit;
    outline: none;
    line-height: inherit;
    -webkit-appearance: none;
  }
  /* Fix antialiasing */
  *, *:before, *:after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /* Disable user select on everything but texts */
  *, *:before, *:after {
    user-select: none;
  }
  p, span, h1, h2, h3, h4, h5, h6, blockquote, pre, ul, ol, li, table, tr, th, td, input, textarea {
    user-select: text;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.1;
    overflow: hidden;
    color: ${(props) => props.theme.common.textColor};
    background-color: ${({ theme }) => theme.common.backgroundColor};
  }

  /* Hack to hide chrome autofill colors applied to text inputs */
  input:-webkit-autofill {
    transition-property: background-color, color;
    transition-delay: 1000000s;
  }

  input[type="number"] {
    appearance: textfield;
  }

  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  // TODO: to be removed once we rewrite all inputs to BaseInput
  .MuiInputLabel-root, .MuiFormLabel-root {
    display: flex;

    .MuiInputLabel-asterisk, .MuiFormLabel-asterisk {
      font-size: 1.5rem;
    }
  }
`;

export default GeneralStyles;