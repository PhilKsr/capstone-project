import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <FooterNavbar>
      <li>
        <NavLink to='/'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            enableBackground='new 0 0 24 24'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            fill='#ffffff'>
            <rect fill='none' height='24' width='24' />
            <path d='M12,3L6,7.58V6H4v3.11L1,11.4l1.21,1.59L4,11.62V21h16v-9.38l1.79,1.36L23,11.4L12,3z M18,19h-5v-4h-2v4H6v-8.9l6-4.58 l6,4.58V19z M10,1c0,1.66-1.34,3-3,3C6.45,4,6,4.45,6,5H4c0-1.66,1.34-3,3-3c0.55,0,1-0.45,1-1H10z' />
          </svg>
        </NavLink>
      </li>

      <li>
        <NavLink to='new'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            fill='#ffffff'>
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path d='M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' />
          </svg>
        </NavLink>
      </li>

      <li>
        <NavLink to='collections'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            fill='#ffffff'>
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path d='M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 2v5l-1-.75L15 9V4h2zm3 12H8V4h5v9l3-2.25L19 13V4h1v12z' />
          </svg>
        </NavLink>
      </li>

      <li>
        <NavLink to='discover'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            enableBackground='new 0 0 24 24'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            fill='#ffffff'>
            <rect fill='none' height='24' width='24' />
            <path d='M19.3,16.9c0.4-0.7,0.7-1.5,0.7-2.4c0-2.5-2-4.5-4.5-4.5S11,12,11,14.5s2,4.5,4.5,4.5c0.9,0,1.7-0.3,2.4-0.7l3.2,3.2 l1.4-1.4L19.3,16.9z M15.5,17c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S16.9,17,15.5,17z M12,20v2 C6.48,22,2,17.52,2,12C2,6.48,6.48,2,12,2c4.84,0,8.87,3.44,9.8,8h-2.07c-0.64-2.46-2.4-4.47-4.73-5.41V5c0,1.1-0.9,2-2,2h-2v2 c0,0.55-0.45,1-1,1H8v2h2v3H9l-4.79-4.79C4.08,10.79,4,11.38,4,12C4,16.41,7.59,20,12,20z' />
          </svg>
        </NavLink>
      </li>

      <li>
        <NavLink to='profile'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            fill='#ffffff'>
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path d='M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z' />
          </svg>
        </NavLink>
      </li>
    </FooterNavbar>
  );
}

export default Navbar;

const FooterNavbar = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: var(--black);
  position: fixed;
  z-index: 999;
  bottom: 0;
  right: 0;
  left: 0;
  height: 4rem;
  :focus {
    outline: none;
  }

  li {
    height: 3rem;
  }

  li a svg {
    box-sizing: content-box;
    padding: 0.75rem;
    border-radius: 50%;
  }

  //Switch auf filled Icons! -> Fill: Füllung / Stroke: Outline
  li a.active {
    svg {
      background: var(--white);
      fill: var(--black);
    }
  }
`;
