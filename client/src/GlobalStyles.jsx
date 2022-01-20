import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --white: #ffffff;
    --black: #313131;
  
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
    position: relative;
    z-index: 10;
  width: 100%;
  height: 672px;
}

.leaflet-right{
margin-right: 2.5rem; 
color: var(--white);
}

.leaflet-left.leaflet-top { 
margin-top: 28rem;
margin-left: 0.75rem;
}


//Samsung Galaxy S10 for tests on own device to use with touch
@media (min-height: 720px) {
  .leaflet-container {
  width: 100%;
  height: 696px;
}
.leaflet-right {
margin-right: 1.75rem; 
}

.leaflet-left.leaflet-top { 
margin-top: 34rem;
margin-left: 0.75rem;
}
}
//Basic monitor to use with mouse
@media (min-height: 790px) {
  .leaflet-container {
  width: 100%;
  height: 100vh;
}

.leaflet-right {
margin-right: 10px; 
}

.leaflet-left.leaflet-top { 
margin-top: 10px;
margin-left: 10px;
}
}

.leaflet-control-geocoder {
  background-color: var(--black);
  color: var(--white);
  opacity: 95%;
  input {
    color: var(--white);
    border-radius: 30px;
  }
  ul li a {
    color: var(--white);
    span {
      color: var(--white);
      opacity: 80%;
    }
  }
}

::placeholder {
    color: var(--white);
    opacity: 75%;
  }

.leaflet-control-geocoder-icon {
  background-color: var(--black);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' %3E%3Cpath d='M12.2 13l3.4 6.6c.6 1.1 2.5-.4 2-1.2l-4-6.2z'/%3E%3Ccircle cx='10.8' cy='8.9' r='3.9' fill='none' stroke='white' stroke-width='1.5'/%3E%3C/svg%3E");
}

.leaflet-touch .leaflet-bar{
  border: none;
  border-radius: 5px;
}

.leaflet-container a {
  -webkit-tap-highlight-color: var(--black);
  opacity: 95%;
}

.leaflet-control-zoom {
  a{
    background-color: var(--black);
    border: none;
    color: var(--white);
  }
  a:hover{
    background-color: var(--black);
    border: none;
    color: var(--white);
  }
}

  `;

export default GlobalStyle;
