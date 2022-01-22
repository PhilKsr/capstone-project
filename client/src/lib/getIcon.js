export const getIcon = (type) => {
  if (type === "Attraction") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
        <path fill="#000000" d="M11,6H13V13H11V6M9,20A1,1 0 0,1 8,21H5A1,1 0 0,1 4,20V15L6,6H10V13A1,1 0 0,1 9,14V20M10,5H7V3H10V5M15,20V14A1,1 0 0,1 14,13V6H18L20,15V20A1,1 0 0,1 19,21H16A1,1 0 0,1 15,20M14,5V3H17V5H14Z" />
     </svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  } else if (type === "Alpine Hut") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M10,1c0,1.66-1.34,3-3,3C6.45,4,6,4.45,6,5H4c0-1.66,1.34-3,3-3c0.55,0,1-0.45,1-1H10z M12,3L6,7.58V6H4v3.11L1,11.4 l1.21,1.59L4,11.62V21h16v-9.38l1.79,1.36L23,11.4L12,3z M13.94,7h-3.89L12,5.52L13.94,7z M7.44,9h9.12L18,10.1V11H6v-0.9L7.44,9z M18,13v2H6v-2H18z M6,19v-2h12v2H6z"/></svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  } else if (type === "Campsite") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
        <path fill="#000000" d="M15.9,18.5L21.9,20.1L21.5,22L12.1,19.5L2.7,22L2.2,20.1L8.2,18.5L2.1,16.9L2.6,15L12,17.5L21.4,15L21.9,16.9L15.9,18.5M16.07,7.92C15.91,7.7 15.71,7.5 15.5,7.33C15.05,6.9 14.5,6.59 14.06,6.13C13,5.08 12.79,3.34 13.44,2C12.79,2.17 12.18,2.54 11.67,2.95C9.84,4.46 9.11,7.1 10,9.38C10,9.45 10.04,9.53 10.04,9.62C10.04,9.78 9.93,9.92 9.79,10C9.63,10.05 9.46,10 9.33,9.9C9.28,9.86 9.25,9.82 9.22,9.77C8.42,8.74 8.29,7.26 8.84,6.07C7.65,7.06 7,8.72 7.11,10.29C7.13,10.65 7.18,11 7.3,11.36C7.41,11.8 7.59,12.23 7.82,12.61C8.57,13.86 9.9,14.76 11.32,14.94C12.84,15.14 14.46,14.85 15.63,13.79C16.93,12.59 17.4,10.67 16.71,9L16.61,8.83C16.47,8.5 16.28,8.2 16.04,7.93L16.07,7.92M13.83,12.47C13.63,12.65 13.31,12.83 13.05,12.91C12.26,13.19 11.46,12.79 11,12.31C11.84,12.11 12.34,11.47 12.5,10.83C12.61,10.25 12.39,9.78 12.29,9.22C12.21,8.69 12.22,8.23 12.42,7.73C12.55,8 12.69,8.28 12.86,8.5C13.41,9.22 14.27,9.54 14.45,10.5C14.47,10.63 14.5,10.72 14.5,10.83C14.5,11.43 14.26,12.07 13.82,12.47" />
     </svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  } else if (type === "Caravansite") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
        <path fill="#000000" d="M20 8H22V6L20 4H3A2 2 0 0 0 1 6V15A2 2 0 0 0 3 17H4A3 3 0 0 0 7 20A3 3 0 0 0 10 17H15A3 3 0 0 0 21 17H23V12M7 18.5A1.5 1.5 0 0 1 7 15.5A1.5 1.5 0 0 1 7 18.5M9 12H3V9H9M14 15H11V9H14M18 18.5A1.5 1.5 0 1 1 19.5 17A1.54 1.54 0 0 1 18 18.5M17 12V9.5H19.5L21.5 12Z" />
     </svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  } else if (type === "Castle") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
        <path fill="#000000" d="M2,13H4V15H6V13H8V15H10V13H12V15H14V10L17,7V1H19L23,3L19,5V7L22,10V22H11V19A2,2 0 0,0 9,17A2,2 0 0,0 7,19V22H2V13M18,10C17.45,10 17,10.54 17,11.2V13H19V11.2C19,10.54 18.55,10 18,10Z" />
     </svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  } else if (type === "Fuelstation") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
        <path fill="#000000" d="M18,10A1,1 0 0,1 17,9A1,1 0 0,1 18,8A1,1 0 0,1 19,9A1,1 0 0,1 18,10M12,10H6V5H12M19.77,7.23L19.78,7.22L16.06,3.5L15,4.56L17.11,6.67C16.17,7 15.5,7.93 15.5,9A2.5,2.5 0 0,0 18,11.5C18.36,11.5 18.69,11.42 19,11.29V18.5A1,1 0 0,1 18,19.5A1,1 0 0,1 17,18.5V14C17,12.89 16.1,12 15,12H14V5C14,3.89 13.1,3 12,3H6C4.89,3 4,3.89 4,5V21H14V13.5H15.5V18.5A2.5,2.5 0 0,0 18,21A2.5,2.5 0 0,0 20.5,18.5V9C20.5,8.31 20.22,7.68 19.77,7.23Z" />
     </svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  } else if (type === "Hotel") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
        <path fill="#000000" d="M19,7H11V14H3V5H1V20H3V17H21V20H23V11A4,4 0 0,0 19,7M7,13A3,3 0 0,0 10,10A3,3 0 0,0 7,7A3,3 0 0,0 4,10A3,3 0 0,0 7,13Z" />
     </svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  } else if (type === "Restaurant") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
        <path fill="#000000" d="M8.1,13.34L3.91,9.16C2.35,7.59 2.35,5.06 3.91,3.5L10.93,10.5L8.1,13.34M14.88,11.53L13.41,13L20.29,19.88L18.88,21.29L12,14.41L5.12,21.29L3.71,19.88L13.47,10.12C12.76,8.59 13.26,6.44 14.85,4.85C16.76,2.93 19.5,2.57 20.96,4.03C22.43,5.5 22.07,8.24 20.15,10.15C18.56,11.74 16.41,12.24 14.88,11.53Z" />
     </svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  } else if (type === "Ruin") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
        <path fill="#000000" d="M5,20H19V22H5V20M17,2V5H15V2H13V5H11V2H9V5H7V2H5V8H7V18H17V8H19V2H17Z" />
     </svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  } else if (type === "Themepark") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
        <path fill="#000000" d="M12,19C12.86,19 13.59,19.54 13.87,20.29C14.42,20.17 14.95,20 15.46,19.77L13.7,15.62C13.18,15.87 12.61,16 12,16C11.39,16 10.82,15.87 10.3,15.62L8.54,19.77C9.05,20 9.58,20.17 10.13,20.29C10.41,19.54 11.14,19 12,19M18.25,17.76C18,17.42 17.81,17 17.81,16.5C17.81,15.41 18.71,14.5 19.81,14.5L20.12,14.53C20.37,13.73 20.5,12.88 20.5,12C20.5,11.12 20.37,10.27 20.12,9.5H19.81C18.7,9.5 17.81,8.61 17.81,7.5C17.81,7 17.97,6.59 18.25,6.24C17.1,5 15.59,4.09 13.87,3.71C13.59,4.46 12.86,5 12,5C11.14,5 10.41,4.46 10.13,3.71C8.41,4.09 6.9,5 5.75,6.24C6.03,6.59 6.2,7.03 6.2,7.5C6.2,8.61 5.3,9.5 4.2,9.5H3.88C3.63,10.28 3.5,11.12 3.5,12C3.5,12.89 3.64,13.74 3.89,14.55L4.2,14.5C5.31,14.5 6.2,15.42 6.2,16.5C6.2,17 6.04,17.43 5.76,17.77C6.08,18.12 6.44,18.44 6.81,18.73L8.71,14.27C8.26,13.62 8,12.84 8,12A4,4 0 0,1 12,8A4,4 0 0,1 16,12C16,12.84 15.74,13.62 15.29,14.27L17.19,18.73C17.57,18.44 17.92,18.11 18.25,17.76M12,23C11,23 10.16,22.26 10,21.29C9.37,21.16 8.75,20.95 8.15,20.69L7.17,23H5L6.41,19.68C5.88,19.3 5.39,18.86 4.96,18.37C4.72,18.47 4.47,18.5 4.2,18.5A2,2 0 0,1 2.2,16.5C2.2,15.88 2.5,15.32 2.97,14.95C2.66,14 2.5,13.03 2.5,12C2.5,11 2.66,10 2.96,9.08C2.5,8.71 2.2,8.15 2.2,7.5C2.2,6.41 3.09,5.5 4.2,5.5C4.46,5.5 4.71,5.56 4.93,5.65C6.25,4.18 8,3.13 10,2.71C10.16,1.74 11,1 12,1C13,1 13.84,1.74 14,2.71C16,3.13 17.74,4.18 19.06,5.64C19.29,5.55 19.54,5.5 19.81,5.5A2,2 0 0,1 21.81,7.5C21.81,8.14 21.5,8.71 21.04,9.07C21.34,10 21.5,11 21.5,12C21.5,13 21.34,14 21.04,14.93C21.5,15.3 21.81,15.87 21.81,16.5C21.81,17.62 20.92,18.5 19.81,18.5C19.54,18.5 19.29,18.46 19.05,18.36C18.61,18.85 18.12,19.29 17.59,19.68L19,23H16.83L15.85,20.69C15.25,20.95 14.63,21.16 14,21.29C13.84,22.26 13,23 12,23Z" />
     </svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  } else if (type === "Waterfall") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
        <path fill="#000000" d="M20 20C18.61 20 17.22 19.53 16 18.67C13.56 20.38 10.44 20.38 8 18.67C6.78 19.53 5.39 20 4 20H2V22H4C5.37 22 6.74 21.65 8 21C10.5 22.3 13.5 22.3 16 21C17.26 21.65 18.62 22 20 22H22V20M20 16C18.61 16 17.22 15.53 16 14.67C13.56 16.38 10.44 16.38 8 14.67C6.78 15.53 5.39 16 4 16H2V18H4C5.37 18 6.74 17.65 8 17C10.5 18.3 13.5 18.3 16 17C17.26 17.65 18.62 18 20 18H22V16M22 2H2V4H6V16H18V4H22M9 4H11V10H9M13 8H15V14H13Z" />
     </svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  }
};

export const getRoadtripIcon = (type) => {
  if (type === "Attraction") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
        <path fill="#ff0000" d="M11,6H13V13H11V6M9,20A1,1 0 0,1 8,21H5A1,1 0 0,1 4,20V15L6,6H10V13A1,1 0 0,1 9,14V20M10,5H7V3H10V5M15,20V14A1,1 0 0,1 14,13V6H18L20,15V20A1,1 0 0,1 19,21H16A1,1 0 0,1 15,20M14,5V3H17V5H14Z" />
     </svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  } else if (type === "Alpine Hut") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><rect fill="none" height="24" width="24"/><path d="M10,1c0,1.66-1.34,3-3,3C6.45,4,6,4.45,6,5H4c0-1.66,1.34-3,3-3c0.55,0,1-0.45,1-1H10z M12,3L6,7.58V6H4v3.11L1,11.4 l1.21,1.59L4,11.62V21h16v-9.38l1.79,1.36L23,11.4L12,3z M13.94,7h-3.89L12,5.52L13.94,7z M7.44,9h9.12L18,10.1V11H6v-0.9L7.44,9z M18,13v2H6v-2H18z M6,19v-2h12v2H6z"/></svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  } else if (type === "Campsite") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
        <path fill="#ff0000" d="M15.9,18.5L21.9,20.1L21.5,22L12.1,19.5L2.7,22L2.2,20.1L8.2,18.5L2.1,16.9L2.6,15L12,17.5L21.4,15L21.9,16.9L15.9,18.5M16.07,7.92C15.91,7.7 15.71,7.5 15.5,7.33C15.05,6.9 14.5,6.59 14.06,6.13C13,5.08 12.79,3.34 13.44,2C12.79,2.17 12.18,2.54 11.67,2.95C9.84,4.46 9.11,7.1 10,9.38C10,9.45 10.04,9.53 10.04,9.62C10.04,9.78 9.93,9.92 9.79,10C9.63,10.05 9.46,10 9.33,9.9C9.28,9.86 9.25,9.82 9.22,9.77C8.42,8.74 8.29,7.26 8.84,6.07C7.65,7.06 7,8.72 7.11,10.29C7.13,10.65 7.18,11 7.3,11.36C7.41,11.8 7.59,12.23 7.82,12.61C8.57,13.86 9.9,14.76 11.32,14.94C12.84,15.14 14.46,14.85 15.63,13.79C16.93,12.59 17.4,10.67 16.71,9L16.61,8.83C16.47,8.5 16.28,8.2 16.04,7.93L16.07,7.92M13.83,12.47C13.63,12.65 13.31,12.83 13.05,12.91C12.26,13.19 11.46,12.79 11,12.31C11.84,12.11 12.34,11.47 12.5,10.83C12.61,10.25 12.39,9.78 12.29,9.22C12.21,8.69 12.22,8.23 12.42,7.73C12.55,8 12.69,8.28 12.86,8.5C13.41,9.22 14.27,9.54 14.45,10.5C14.47,10.63 14.5,10.72 14.5,10.83C14.5,11.43 14.26,12.07 13.82,12.47" />
     </svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  } else if (type === "Caravansite") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
        <path fill="#ff0000" d="M20 8H22V6L20 4H3A2 2 0 0 0 1 6V15A2 2 0 0 0 3 17H4A3 3 0 0 0 7 20A3 3 0 0 0 10 17H15A3 3 0 0 0 21 17H23V12M7 18.5A1.5 1.5 0 0 1 7 15.5A1.5 1.5 0 0 1 7 18.5M9 12H3V9H9M14 15H11V9H14M18 18.5A1.5 1.5 0 1 1 19.5 17A1.54 1.54 0 0 1 18 18.5M17 12V9.5H19.5L21.5 12Z" />
     </svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  } else if (type === "Castle") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
        <path fill="#ff0000" d="M2,13H4V15H6V13H8V15H10V13H12V15H14V10L17,7V1H19L23,3L19,5V7L22,10V22H11V19A2,2 0 0,0 9,17A2,2 0 0,0 7,19V22H2V13M18,10C17.45,10 17,10.54 17,11.2V13H19V11.2C19,10.54 18.55,10 18,10Z" />
     </svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  } else if (type === "Fuelstation") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
        <path fill="#ff0000" d="M18,10A1,1 0 0,1 17,9A1,1 0 0,1 18,8A1,1 0 0,1 19,9A1,1 0 0,1 18,10M12,10H6V5H12M19.77,7.23L19.78,7.22L16.06,3.5L15,4.56L17.11,6.67C16.17,7 15.5,7.93 15.5,9A2.5,2.5 0 0,0 18,11.5C18.36,11.5 18.69,11.42 19,11.29V18.5A1,1 0 0,1 18,19.5A1,1 0 0,1 17,18.5V14C17,12.89 16.1,12 15,12H14V5C14,3.89 13.1,3 12,3H6C4.89,3 4,3.89 4,5V21H14V13.5H15.5V18.5A2.5,2.5 0 0,0 18,21A2.5,2.5 0 0,0 20.5,18.5V9C20.5,8.31 20.22,7.68 19.77,7.23Z" />
     </svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  } else if (type === "Hotel") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
        <path fill="#ff0000" d="M19,7H11V14H3V5H1V20H3V17H21V20H23V11A4,4 0 0,0 19,7M7,13A3,3 0 0,0 10,10A3,3 0 0,0 7,7A3,3 0 0,0 4,10A3,3 0 0,0 7,13Z" />
     </svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  } else if (type === "Restaurant") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
        <path fill="#ff0000" d="M8.1,13.34L3.91,9.16C2.35,7.59 2.35,5.06 3.91,3.5L10.93,10.5L8.1,13.34M14.88,11.53L13.41,13L20.29,19.88L18.88,21.29L12,14.41L5.12,21.29L3.71,19.88L13.47,10.12C12.76,8.59 13.26,6.44 14.85,4.85C16.76,2.93 19.5,2.57 20.96,4.03C22.43,5.5 22.07,8.24 20.15,10.15C18.56,11.74 16.41,12.24 14.88,11.53Z" />
     </svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  } else if (type === "Ruin") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
        <path fill="#ff0000" d="M5,20H19V22H5V20M17,2V5H15V2H13V5H11V2H9V5H7V2H5V8H7V18H17V8H19V2H17Z" />
     </svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  } else if (type === "Themepark") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
        <path fill="#ff0000" d="M12,19C12.86,19 13.59,19.54 13.87,20.29C14.42,20.17 14.95,20 15.46,19.77L13.7,15.62C13.18,15.87 12.61,16 12,16C11.39,16 10.82,15.87 10.3,15.62L8.54,19.77C9.05,20 9.58,20.17 10.13,20.29C10.41,19.54 11.14,19 12,19M18.25,17.76C18,17.42 17.81,17 17.81,16.5C17.81,15.41 18.71,14.5 19.81,14.5L20.12,14.53C20.37,13.73 20.5,12.88 20.5,12C20.5,11.12 20.37,10.27 20.12,9.5H19.81C18.7,9.5 17.81,8.61 17.81,7.5C17.81,7 17.97,6.59 18.25,6.24C17.1,5 15.59,4.09 13.87,3.71C13.59,4.46 12.86,5 12,5C11.14,5 10.41,4.46 10.13,3.71C8.41,4.09 6.9,5 5.75,6.24C6.03,6.59 6.2,7.03 6.2,7.5C6.2,8.61 5.3,9.5 4.2,9.5H3.88C3.63,10.28 3.5,11.12 3.5,12C3.5,12.89 3.64,13.74 3.89,14.55L4.2,14.5C5.31,14.5 6.2,15.42 6.2,16.5C6.2,17 6.04,17.43 5.76,17.77C6.08,18.12 6.44,18.44 6.81,18.73L8.71,14.27C8.26,13.62 8,12.84 8,12A4,4 0 0,1 12,8A4,4 0 0,1 16,12C16,12.84 15.74,13.62 15.29,14.27L17.19,18.73C17.57,18.44 17.92,18.11 18.25,17.76M12,23C11,23 10.16,22.26 10,21.29C9.37,21.16 8.75,20.95 8.15,20.69L7.17,23H5L6.41,19.68C5.88,19.3 5.39,18.86 4.96,18.37C4.72,18.47 4.47,18.5 4.2,18.5A2,2 0 0,1 2.2,16.5C2.2,15.88 2.5,15.32 2.97,14.95C2.66,14 2.5,13.03 2.5,12C2.5,11 2.66,10 2.96,9.08C2.5,8.71 2.2,8.15 2.2,7.5C2.2,6.41 3.09,5.5 4.2,5.5C4.46,5.5 4.71,5.56 4.93,5.65C6.25,4.18 8,3.13 10,2.71C10.16,1.74 11,1 12,1C13,1 13.84,1.74 14,2.71C16,3.13 17.74,4.18 19.06,5.64C19.29,5.55 19.54,5.5 19.81,5.5A2,2 0 0,1 21.81,7.5C21.81,8.14 21.5,8.71 21.04,9.07C21.34,10 21.5,11 21.5,12C21.5,13 21.34,14 21.04,14.93C21.5,15.3 21.81,15.87 21.81,16.5C21.81,17.62 20.92,18.5 19.81,18.5C19.54,18.5 19.29,18.46 19.05,18.36C18.61,18.85 18.12,19.29 17.59,19.68L19,23H16.83L15.85,20.69C15.25,20.95 14.63,21.16 14,21.29C13.84,22.26 13,23 12,23Z" />
     </svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  } else if (type === "Waterfall") {
    const markerIcon = new L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
        <path fill="#ff0000" d="M20 20C18.61 20 17.22 19.53 16 18.67C13.56 20.38 10.44 20.38 8 18.67C6.78 19.53 5.39 20 4 20H2V22H4C5.37 22 6.74 21.65 8 21C10.5 22.3 13.5 22.3 16 21C17.26 21.65 18.62 22 20 22H22V20M20 16C18.61 16 17.22 15.53 16 14.67C13.56 16.38 10.44 16.38 8 14.67C6.78 15.53 5.39 16 4 16H2V18H4C5.37 18 6.74 17.65 8 17C10.5 18.3 13.5 18.3 16 17C17.26 17.65 18.62 18 20 18H22V16M22 2H2V4H6V16H18V4H22M9 4H11V10H9M13 8H15V14H13Z" />
     </svg>`,
      className: "marker_div",
      iconSize: [24, 24],
    });
    return markerIcon;
  }
};
