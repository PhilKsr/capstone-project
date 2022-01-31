import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <FooterNavbar>
      <li>
        <NavLink to='/home'>
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
        <NavLink to='roadtrip'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            fill='#ffffff'>
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z' />
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
        <NavLink to='packing-list'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            enable-background='new 0 0 24 24'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            fill='#ffffff'>
            <rect fill='none' height='24' width='24' />
            <path d='M11,7H2v2h9V7z M11,15H2v2h9V15z M16.34,11l-3.54-3.54l1.41-1.41l2.12,2.12l4.24-4.24L22,5.34L16.34,11z M16.34,19 l-3.54-3.54l1.41-1.41l2.12,2.12l4.24-4.24L22,13.34L16.34,19z' />
          </svg>
        </NavLink>
      </li>
    </FooterNavbar>
  );
}

const FooterNavbar = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: var(--primary);
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
      background: var(--tertiary);
      fill: var(--primary);
    }
  }
`;
