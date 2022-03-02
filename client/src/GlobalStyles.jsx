import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --primary: #313131;
  --secondary: #505050;
  --tertiary: #ffffff;
  --confirm: #1d981d;
  --cancel: #ef3c3c;
  }
  
  *,
  *::before,
  *::after {
    font-family: 'Libre Franklin', sans-serif;
        box-sizing: border-box;
  }
  
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
/*     background: linear-gradient(180deg, #f8f5edf0 70%, #a4d1aacf 100%); 
    background-repeat: no-repeat; */
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
  

  //iPhone 6/7/8 for final presentation
  .leaflet-container {
    position: relative;
    z-index: 10;
    height: 667px;
    }

  .leaflet-right{
  margin-top: 2.5rem;
  margin-right: 2.5rem; 
  color: var(--tertiary);
  }

  .leaflet-left.leaflet-top { 
  margin-top: 28rem;
  margin-left: 0.75rem;
  }

  .leaflet-control-geocoder-icon {
    background-color: var(--primary);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' %3E%3Cpath d='M12.2 13l3.4 6.6c.6 1.1 2.5-.4 2-1.2l-4-6.2z'/%3E%3Ccircle cx='10.8' cy='8.9' r='3.9' fill='none' stroke='white' strokeWidth='1.5'/%3E%3C/svg%3E");
  }

  .leaflet-control-geocoder {
    background-color: var(--primary);
    color: var(--tertiary);
    opacity: 85%;
    border: none;

    input {
      color: var(--tertiary);
    }
  }

  .leaflet-touch .leaflet-bar{
    border: none;
  }

  ::placeholder {
      color: var(--tertiary);
      opacity: 70%;
    }

  .leaflet-container a {
    -webkit-tap-highlight-color: var(--primary);
    opacity: 85%;
  }

  .leaflet-control-zoom {
    a{
      background-color: var(--primary);
      border: none;
      color: var(--tertiary);
    }
    a:hover{
      background-color: var(--primary);
      border: none;
      color: var(--tertiary);
    }
  }


  //Samsung Galaxy S10 for tests on own device to use with touch
  @media (min-height: 740px) {
    .leaflet-container {
    width: 100%;
    height: 760px;
  }
  .leaflet-right {
  margin-right: 2rem; 
  }

  .leaflet-left.leaflet-top { 
  margin-top: 34rem;
  margin-left: 0.9rem;
  }
  }

  //Basic monitor to use with mouse
  @media (min-height: 760px ) and (min-width: 600px) {
    .leaflet-container {
    width: 100%;
    height: 100vh;
  }

  .leaflet-right {
  margin-right: 10px; 
  margin-top: 5px;
  }

  .leaflet-left.leaflet-top { 
  margin-top: 10px;
  margin-left: 10px;
  }
}
`;

export default GlobalStyle;
