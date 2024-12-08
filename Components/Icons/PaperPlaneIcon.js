/** @jsx React.createElement */

import React from 'react';

export const PaperPlaneIcon = ({ className }) => {
  return (
    <svg
      className={className || "paper-plane-icon"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: '20px', 
        height: '20px', 
        marginLeft: '8px', 
        stroke: 'currentColor',
        transform: 'rotate(45deg)'
      }}
    >
      <g>
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22L11 13L2 9L22 2Z" />
      </g>
    </svg>
  );
};

// Exportar globalmente
window.PaperPlaneIcon = PaperPlaneIcon;

export default PaperPlaneIcon; 