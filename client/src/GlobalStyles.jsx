import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --white: white;
    --black: black;
  
    --ff-sans: sans-serif;
    --ff-serif: serif;
  
    --fs-200: 0.75rem;
    --fs-300: 1rem;
    --fs-400: 1.25rem;
    --fs-500: 1.375rem;
    --fs-600: 1.75rem;
    --fs-900: 2.125rem;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  h1,
  h2,
  h3 {
    line-height: 1.2;
  }
  
  body,
  h1,
  h2,
  h3,
  p {
    margin: 0;
  }
  
  body {
    line-height: 1.5;
    font-size: 1.25rem;
  }
  
  ul[class],
  ol[class] {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  ul[class] li,
  ol[class] li {
    list-style: none;
    padding: 0;
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
//iPhone 6/7/8+ for final presentation
  .leaflet-container {
  width: 100%;
  height: 672px;
}

//Samsung Galaxy S10 for tests on own device to use with touch
@media (min-height: 760px) {
  .leaflet-container {
  width: 100%;
  height: 696px;
}
}
//Basic monitor to use with mouse
@media (min-height: 800px) {
  .leaflet-container {
  width: 100%;
  height: 100vh;
}
}
  `;

export default GlobalStyle;
