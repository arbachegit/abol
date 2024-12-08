/** @jsx React.createElement */

import React from 'react';

// Definir componente globalmente
window.PaperPlaneIcon = function PaperPlaneIcon({ className }) {
  return React.createElement("svg", {
    className: className || "paper-plane-icon",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: '20px',
      height: '20px',
      marginLeft: '8px',
      stroke: 'currentColor',
      transform: 'rotate(45deg)'
    }
  }, /* ... resto do SVG ... */);
}; 